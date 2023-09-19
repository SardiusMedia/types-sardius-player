import Hls, { Events, ErrorData } from 'hls.js';
import { PlayerAssetWithLanguage } from './assets';
import { LanguageCodesUppercase } from './languageCodes';
import {
  DynamoPlayerModel,
  PlayerManagerRootSettings,
  PlayerParams,
  PlayerPlugins,
} from './player';
import { SJSPlayer, SJSSource, VJSTech } from './videojs';

interface SJSTech extends VJSTech {
  name_?: string;
  hlsProvider?: SardiusHLS;
}

declare class SardiusEvents {
  plugin: Sardius;
  events: KeyValueTyped;

  constructor(plugin: Sardius);
  triggerEvent: <T>(code: string, data: T) => void;
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
}

declare class StreamHandler {
  plugin: Sardius;
  public protocol?: string;
  public isIOS: boolean;
  public lib?: SardiusHLS;

  constructor(plugin: Sardius);
  setLocale: (locale: string) => void;
}

type SJSPlayerManager = SJSPlayer & {
  playerManager: PlayerManagerClass;
  originalError?: SJSPlayer['error'];
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
};

export declare class Sardius {
  public options: PlayerManagerRootSettings;
  public player: SJSPlayerManager;
  public VERSION: string;
  public playerEl: ReturnType<ReturnType<typeof VJSType>['el']>;
  public videoEl: HTMLVideoElement;
  public protocol?: string;
  public streamHandler: StreamHandler;
  public sourceHandler: SourceHandler;

  constructor(options: PlayerManagerRootSettings, player: SJSPlayerManager);
  init: () => void;
  seekToLive: () => void;
  libs: () => void;
  ready: () => void;
}

export declare class PlayerManagerClass {
  public plugin: Sardius;
  public sourceHandler?: SourceHandler;
  constructor(plugin: Sardius);
  setMenuLabels: (labels: string[]) => void;
  setSources: (
    sources: LanguageCodesUppercase | PlayerAssetWithLanguage,
  ) => void;
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
