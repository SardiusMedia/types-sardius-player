import Hls, { Events, ErrorData, Level, MediaPlaylist } from 'hls.js';
import {
  Caption,
  PlayerAssetWithLanguage,
  SardiusMappedManifest,
} from './assets';
import { LanguageCodesUppercase } from './languageCodes';
import {
  DynamoPlayerModel,
  PlayerManagerRootSettings,
  PlayerParams,
  PlayerPlugins,
} from './player';
import {
  LanguageMenuItem,
  SJSButton,
  SJSPlayer,
  SJSSource,
  VJSTech,
} from './videojs';
import events from './events';
import { Writeable } from './common';

interface SJSTech extends VJSTech {
  name_?: string;
  hlsProvider?: SardiusHLS;
}

declare class SardiusEvents {
  plugin: Sardius;
  events: typeof events;

  constructor(plugin: Sardius);
  triggerEvent: <T>(code: keyof typeof events, data: T) => void;
}

declare class SardiusHlsEvents extends SardiusEvents {
  sardiusHLS: SardiusHLS;
  _duration?: number;
  playerSettingsHasNudgeOffset?: boolean;

  constructor(plugin: Sardius, sardiusHLS: SardiusHLS);
  registerEvents: () => void;
}

declare class SardiusHlsErrors {
  player: Sardius['player'];
  sardiusHLS: SardiusHLS;
  fatalError: number;

  constructor(plugin: Sardius, sardiusHLS: SardiusHLS);
  recoverFatalError: () => void;
  handleError: (event: Events.ERROR, data: ErrorData) => void;
}

declare class SardiusHLS {
  public hls?: Hls;
  public plugin: Sardius;
  public source?: SJSSource;
  public tech?: SJSTech;
  public playerManager?: PlayerManagerClass;
  public errors?: SardiusHlsErrors;
  public events?: SardiusHlsEvents;
  public playerSettingsHasNudgeOffset?: boolean;
  public _video: HTMLVideoElement | HTMLAudioElement;

  constructor(plugin: Sardius);
  public init(): void;
  public canHandleHlsSource(source: SJSSource): string;
  public handleHlsSource(source: SJSSource, tech: SJSTech): SardiusHLS;
  public registerHLS(): void;
  public flushBuffer(): void;
  public getMidrangeBitrate(): number;
  public flushOnScrub(): void;
  public hlsSetup(): void;
  public hlsInitialize(): void;
  public dispose(): void;
  public load(source: SJSSource): void;
  public provider(source: SJSSource, tech: SJSTech): SardiusHLS;
  public getCurrentLevel(): number | undefined;
  public setCurrentLevel(levelId: number): void;
  public getLevels(): Level[] | undefined;
  public getCurrentAudioTrack(): number | undefined;
  public setCurrentAudioTrack(id: number): void;
  public getAudioTracks(): MediaPlaylist[] | undefined;
  public getCurrentTextTrack(): number | undefined;
  public setCurrentTextTrack(id: number): void;
  public getTextTracks(): MediaPlaylist[] | undefined;
  public setTextTrackDisplay(isShowing: boolean): void;
}

declare class StreamHandler extends SardiusHLS {
  plugin: Sardius;
  public protocol?: string;
  public isIOS: boolean;
  public lib?: SardiusHLS;

  constructor(plugin: Sardius);
  setLocale: (locale: string) => void;
}

export type SardiusMediaError = Pick<
  Writeable<MediaError, keyof MediaError>,
  'code' | 'message'
>;

type SJSPlayerManager = SJSPlayer & {
  playerManager: PlayerManagerClass;
  originalError?: SJSPlayer['error'];
  error?: SJSPlayer['error'] | ((err: SardiusMediaError) => void);
  refresh?: (fromError: boolean, newUrl?: string, addTime?: boolean) => void;
  delete?: () => void;
  nextAsset?: (url: string) => void;
  getAsset?: (key: string | undefined, assetUrl: string) => void;
  setAsset?: (key: string, assetUrl: string, retryNumber?: number) => void;
  refreshAsset?: () => void;
  currentTime?: () => number;
  source: (src: SJSSource) => string | undefined;
  ga?: (gaSettings?: PlayerPlugins['ga']) => void;
  // preroll?: (prerollSettings?: KeyValueTyped) => void;
  youbora?: (settings: KeyValueTyped<string | boolean | undefined>) => void;
  spThumbnails?: () => void;
  remotePlayback?: boolean;
  poster_?: string;
  posterImage?: SJSButton;
};

declare class OfflineHandler {
  sourceHandler: SourceHandler_Class;
  plugin: Sardius;
  retrySeconds: number;
  nextRetry: number;
  retryCount: number;
  reDownload: boolean;
  endpoint: string;
  url?: string;
  playlist?: SardiusMappedManifest[];
  manifest?: string;
  isLive?: boolean;

  constructor(SourceHandler: SourceHandler, plugin: Sardius);
  retry(): void;
  test(): void;
  _isLive(): Promise<SardiusMappedManifest[]>;
  _isUpdated(): Promise<SardiusMappedManifest[]>;
  _checkUrl(cb: (playlist: SardiusMappedManifest[]) => void): void;
  handle(): Promise<SardiusMappedManifest[]>;
}

declare class SourceHandler_Class {
  public plugin: Sardius;
  public protocol?: string;
  public sources: PlayerAssetWithLanguage;
  public languages: PlayerAssetWithLanguage['languages'];
  public language: boolean | LanguageCodesUppercase;
  public defaultSrc: SJSSource;
  public attachedMenuItems: KeyValueTyped;
  public options: PlayerManagerRootSettings;
  public autoLoaded: boolean;
  public forcedLastAsset: boolean;
  public captions: Caption[];
  public offlineHandler: OfflineHandler;
  public labels?: KeyValueTyped;
  public currentSource?: SJSSource;

  constructor(plugin: Sardius);
  init(plugin: Sardius): void;
  ready(plugin: Sardius): void;
  isStreamingProtocol(source: SardiusMappedManifest | SJSSource): boolean;
  setSources(passedSource: PlayerAssetWithLanguage): void;
  forcePlay(passedTime: number): void;
  playSrc(aSource: SJSSource, fp?: boolean): void;
  switchSrc(aSource: SJSSource): void;
  switchLanguage(
    language:
      | LanguageMenuItem
      | { code: LanguageCodesUppercase; label: LanguageCodesUppercase },
  ): void;
  switchBitrate(aSource: SJSSource): void;
  switchAudioTrack(track: number): void;
  getBitrateFromSource(aSource: SJSSource): {
    level: number | boolean | SJSSource;
    bitrate: string | number | boolean | undefined;
    levelData?: Level | undefined;
  };
  forcePlayAtTime(time: number): void;
  switchLevel(aSource: SJSSource): void;
}

declare class Sardius {
  public options: PlayerManagerRootSettings;
  public player: SJSPlayerManager;
  public VERSION: string;
  public playerEl: ReturnType<ReturnType<typeof VJSType>['el']>;
  public videoEl: HTMLVideoElement;
  public protocol?: string;
  public streamHandler: StreamHandler;
  public sourceHandler: SourceHandler_Class;

  constructor(options: PlayerManagerRootSettings, player: SJSPlayerManager);
  init: () => void;
  seekToLive: () => void;
  libs: () => void;
  ready: () => void;
}

export declare class PlayerManagerClass {
  public plugin: Sardius;
  public sourceHandler?: SourceHandler_Class;
  constructor(plugin: Sardius);
  setMenuLabels: (labels: string[]) => void;
  setSources: (sources: PlayerAssetWithLanguage) => void;
}

export interface CaptionOptions {
  cueStyle?: string;
  regionStyle?: string;
  iOS?: Omit<CaptionOptions, 'iOS'>;
  align?: 'right' | 'left' | 'center' | 'start' | 'end';
  line?: number;
  position?: number;
  size?: number;
  snapToLines?: boolean;
}

export type PlayerOptions = DynamoPlayerModel & {
  asset?: string;
  assetUID?: string;
  dash?: string;
  endpoint?: string;
  feed?: string;
  guid?: string;
  hls?: string;
  options?: PlayerParams;
  pid?: string;
  rpid?: string;
  simlive?: string;
  simliveFeed?: string;
  token?: string;
  type?: string;
  url?: string;
  yt?: string;
};

export interface SourceHandler {
  options?: PlayerOptions;
  captions?: RemoteCaptionObject[];
  plugin: {
    streamHandler: {
      lib: { hls?: boolean };
      setTextTrackDisplay: (arg: boolean) => void;
      setCurrentTextTrack: (arg: number) => void;
    };
  };
}

export type RemoteCaptionObject = {
  file?: string;
  url?: string;
  fileType?: string;
  id?: number;
  label?: string;
  kind?: TextTrackKind;
  language?: string;
  mode?: TextTrack['mode'];
};
