import { Moment } from 'moment';
import { PlayerAsset, PlayerAssetImage } from './assets';
import { AccountModel } from './accounts';
import { LanguageCode, StringBoolean } from './common';
import { Youbora } from './youbora';
import { SourceObject } from './videojs';
import {
  LanguageCodesUppercase,
  LanguageCodesUppercaseCC,
} from './languageCodes';

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

interface LocationsConfigObject {
  apiKey?: string;
  appId?: string;
  authDomain?: string;
  databaseURL?: string;
  projectId?: string;
}

type PublicCryptEncodedString = string;

export interface PlayerLocations {
  config?: LocationsConfigObject | PublicCryptEncodedString;
  ids?: string[];
}

export interface SardiusAds {
  contribConfig?: {
    contentIsLive?: boolean;
  };
  frequencyEach?: number;
  preroll?: {
    amount?: number;
    skippable?: boolean;
    urls?: string[];
  };
}

type Position =
  | 'bottomCenter'
  | 'bottomLeft'
  | 'bottomRight'
  | 'center'
  | 'left'
  | 'lowerThird'
  | 'middle'
  | 'middleCenter'
  | 'middleLeft'
  | 'middleRight'
  | 'right'
  | 'top'
  | 'topCenter'
  | 'topLeft'
  | 'topRight'
  | 'whole';

interface Logo {
  content?: string;
  link?: string;
  position?: Position;
  title?: string;
  type?: string;
  url?: string;
}

interface GA {
  eventId?: string;
  id?: string;
  trackCaptions?: boolean;
  percentsPlayedInterval?: number;
}

interface FeedSettings {
  accountId?: string;
  feedId?: string;
  feedIndex?: number;
  feedTotalAssets?: number;
  playerHost?: string;
  playerId?: string;
}

interface SPMenuBar {
  items: string[];
}

export interface RedirectSettings {
  add?: {
    format: string;
  };
  delete?: (keyof PlayerParams)[];
  clientside?: boolean;
}

export interface RedirectObject {
  all?: RedirectSettings;
  [key: string]: RedirectSettings | undefined;
}

export interface RedirectSiteSettings {
  [key: string]: RedirectObject;
}

interface Redirects {
  [key: string]: RedirectSiteSettings;
}

interface YoutubeCustomVars extends KeyValueTyped<unknown> {
  title?: string;
  id?: string;
  isLive?: boolean;
}

export interface YoutubeSettings {
  thumbnail?: PlayerAssetImage;
  title?: string;
  showAnnotations?: boolean;
  color?: 'red' | 'white';
  controls?: 0 | 1;
  customVars?: YoutubeCustomVars;
  iv_load_policy?: 1 | 3;
  modestbranding?: 0 | 1;
  rel?: 0 | 1;
  playsinline?: 0 | 1;
  ytControls?: 2;
}

export type Youtube = YoutubeSettings | boolean;
type Sources = SourceObject[] | undefined;
type Ruxit = unknown;
type Peer5 = unknown;
type Vjs = unknown;
type ContextMenu =
  | false
  | {
      copyUserInformation: boolean;
    };

export interface Preroll {
  src?: string;
  allowSkip?: string;
  auto?: boolean;
  href?: string;
}

export interface PlayerPlugins {
  airplay?: boolean;
  airplayButton?: KeyValueAny;
  autoplay?: boolean;
  chromecast?: boolean;
  closedCaptions?: boolean;
  contextMenu?: ContextMenu;
  FeedSettings?: FeedSettings;
  flushOnScrub?: boolean;
  ga?: GA;
  locations?: false | PlayerLocations;
  logo?: Logo;
  MiniPlayer?: boolean;
  peer5?: Peer5;
  preroll?: boolean | Preroll;
  ruxit?: Ruxit;
  sardius?: Partial<SardiusPlayerConfig> | boolean;
  sardiusAds?: false | SardiusAds;
  spAutoplay?: boolean;
  spMenuBar: SPMenuBar;
  spMetadata?: boolean;
  system73?: boolean;
  TheaterMode?: boolean;
  thumbnails?: boolean;
  vjs?: Vjs;
  youbora?: Youbora | boolean;
  youtube?: Youtube;
}

interface ThemeData {
  theme: string;
  styles: KeyValueTyped;
}

export interface ThemeObject {
  newDefault: {
    theme: string;
    // eslint-disable-next-line no-unused-vars
    styles: (defaultStyles?: KeyValueTyped) => string;
  };
  noScrubBar: ThemeData;
  default: ThemeData;
  ignore?: ThemeData;
}

export interface PlayerTheme {
  id?: keyof ThemeObject;
  styles?: KeyValueTyped;
}

interface VolumePanel {
  inline?: boolean;
  vertical?: boolean;
}

interface ControlBar {
  children: string[];
  volumePanel: VolumePanel;
  [key: string]: KeyValueAny | boolean;
}

export interface Setup {
  autoplay?: boolean;
  BigPlayButton?: boolean;
  controlBar: ControlBar;
  controls?: boolean;
  disableRefresh?: boolean;
  fluid?: boolean;
  html5?: { polyNetConfig?: { apiKey?: string }; nativeTextTracks?: boolean };
  locations?: false | PlayerLocations;
  loop?: boolean;
  muted?: boolean;
  playbackRates?: number[];
  plugins?: Omit<PlayerPlugins, 'spMenuBar'> & {
    sardius?: Partial<SardiusPlayerConfig>;
    spMenuBar?: SPMenuBar;
  };
  poster?: string;
  preload?: string;
  sources?: Sources;
  techOrder?: string[];
  version?: string;
  youtube?: Youtube;
  redirects?: Redirects;
}

interface AkamaiEdgeAuth {
  key?: string;
  windowSeconds?: string;
}

interface SecuredData extends KeyValueAny {
  countries?: string[];
  expires?: number;
}

export interface DynamoPlayerModel {
  accountId: string;
  akamaiEdgeAuth?: AkamaiEdgeAuth;
  assetTypeOverride?: Record<AssetTypes, AssetTypes>;
  authKey?: string | false;
  autoplay?: boolean;
  background?: boolean;
  captionOptions?: CaptionOptions;
  controls?: boolean;
  createdBy?: string;
  createdDate?: string;
  doAudioOnlyCheck?: boolean;
  errorHtml?: string;
  favicon?: string;
  flushOnBufferStall?: number;
  flushOnLowBuffer?: number;
  flushOnScrub?: boolean;
  harmonizePlaylists?: number;
  hlsAdvancedSettings?: KeyValueAny; // See https://github.com/video-dev/hls.js/blob/master/docs/API.md#fine-tuning
  hlsjsDebug?: boolean;
  id?: string;
  ignoreLocale?: boolean;
  iOSNativePlayer?: boolean;
  labels?: KeyValueTyped;
  lao?: string;
  liveDelay?: number;
  locale?: string;
  loop?: boolean;
  maxBufferSize?: number;
  menuAttachments?: KeyValueAny;
  muted?: boolean;
  nativeiOSFullscreen?: boolean;
  playbackRates?: number[] | false;
  pLoader?: boolean;
  pLoaderDebug?: boolean;
  plugins: PlayerPlugins;
  redirects?: Redirects;
  resi?: string;
  rewindDuration?: number;
  securedData?: SecuredData;
  securedUrls?: boolean;
  setup: Setup;
  shift?: number;
  showBitrates?: boolean;
  simLiveLiveDelay?: number;
  sources?: Sources;
  startLevel?: number;
  supportEmail?: string;
  techOrder?: string[];
  theme?: PlayerTheme;
  title?: string;
  updatedAt?: string;
  useErrorImage?: boolean;
  version?: string;
  volume?: number;
  youtube?: Youtube;
}

export type DBPlayerModelSansAccountId = Omit<DynamoPlayerModel, 'accountId'>;

const ConstTypes = [
  'asset',
  'assetUID',
  'feed',
  'file',
  'guid',
  'iframe',
  'js',
  'lao',
  'pid',
  'resi',
  'rpid',
  'simlive',
  'simliveFeed',
  'token',
  'yt',
] as const;

export type AssetTypes = (typeof ConstTypes)[number];

export interface PlayerBuiltConfigOptions {
  cdn: string;
  stageUrl: string;
  offlineCdn: string;
  cacheKey: string | undefined;
  localPlugins: string | undefined;
  distFolder?: string;
  srcFolder?: string;
  isOffline?: boolean;
}

export interface PlayerData {
  account: AccountModel;
  accountId: string;
  asset: PlayerAsset;
  assetId: string;
  assetType: string;
  config: PlayerBuiltConfigOptions | string;
  dateToPurgeCache?: Moment;
  end?: number;
  ignore?: string;
  localCssLinks?: string;
  localJsScripts?: string;
  params?: PlayerParams;
  player: DynamoPlayerModel;
  playerConfig?: Setup | string;
  playerHost: string;
  playerId: string;
  query: PlayerParams;
  queryParams?: string;
  start?: number;
  uid?: PlayerParams['uid'];
  version?: string;
  youtubeInfo?: Youtube;
}

export interface PlayerParams {
  accountId: DynamoPlayerModel['accountId'];
  affiliate?: string;
  assetId: DynamoPlayerModel['id'];
  assetType: AssetTypes;
  audioOnly?: StringBoolean;
  auto?: StringBoolean;
  background?: StringBoolean;
  bigPlayButton?: StringBoolean;
  bitrate?: string;
  cacheKey?: string;
  cdn?: string;
  cypress?: StringBoolean;
  debug?: StringBoolean;
  decrypt?: StringBoolean;
  end?: number;
  eventId?: string;
  experienceId?: string;
  feedId?: string;
  feedTotalAssets?: number;
  format?: string;
  height?: number;
  hidecontrols?: StringBoolean;
  isSardius?: boolean;
  item?: number;
  localDev?: string;
  locale?: DynamoPlayerModel['locale'];
  locationId?: string;
  loop?: StringBoolean;
  mimicOnline?: StringBoolean;
  MiniPlayer?: StringBoolean;
  muted?: StringBoolean;
  playerHost?: string;
  playerId: DynamoPlayerModel['id'];
  pLoader?: StringBoolean;
  protocol?: string;
  query: KeyValueTyped;
  refreshAsset?: StringBoolean;
  sardiusOverride?: StringBoolean;
  siteId?: string;
  start?: number;
  stop?: number;
  template?: string;
  TheaterMode?: StringBoolean;
  token?: string;
  uid?: string;
  useErrorImage?: StringBoolean;
  playerElementId?: string;
  usehttps?: StringBoolean;
  version?: string;
  volume?: number;
  width?: number;
  youbora?: StringBoolean;
  makeAvailable?: StringBoolean;
}

export interface SardiusPlayerConfig {
  accountId: PlayerParams['accountId'];
  affiliate?: PlayerParams['affiliate'];
  asset?: PlayerData['asset'];
  auto?: DynamoPlayerModel['autoplay'];
  background?: DynamoPlayerModel['background'];
  bitrate?: PlayerParams['bitrate'];
  captionOptions?: CaptionOptions;
  captions?: PlayerAsset['captions'];
  controls: DynamoPlayerModel['controls'];
  doAudioOnlyCheck?: DynamoPlayerModel['doAudioOnlyCheck'];
  eventId?: PlayerParams['eventId'];
  experienceId?: PlayerParams['experienceId'];
  FeedSettings?: PlayerPlugins['FeedSettings'];
  flushOnBufferStall?: DynamoPlayerModel['flushOnBufferStall'];
  flushOnLowBuffer?: DynamoPlayerModel['flushOnLowBuffer'];
  flushOnScrub?: DynamoPlayerModel['flushOnScrub'];
  harmonizePlaylists?: DynamoPlayerModel['harmonizePlaylists'];
  hlsAdvancedSettings?: DynamoPlayerModel['hlsAdvancedSettings'];
  hlsjsDebug?: DynamoPlayerModel['hlsjsDebug'];
  iOSNativePlayer?: DynamoPlayerModel['iOSNativePlayer'];
  labels: DynamoPlayerModel['labels'];
  liveDelay?: DynamoPlayerModel['liveDelay'];
  locale?: DynamoPlayerModel['locale'];
  maxBufferSize?: DynamoPlayerModel['maxBufferSize'];
  menuAttachments: DynamoPlayerModel['menuAttachments'];
  MiniPlayerCallback?: (settings?: KeyValueBasic) => void;
  nativeiOSFullscreen?: DynamoPlayerModel['nativeiOSFullscreen'];
  playerId: PlayerParams['playerId'];
  pLoader?: DynamoPlayerModel['pLoader'];
  pLoaderDebug?: DynamoPlayerModel['pLoaderDebug'];
  plugins: PlayerPlugins;
  rewindDuration?: DynamoPlayerModel['rewindDuration'];
  shift?: DynamoPlayerModel['shift'];
  showBitrates?: DynamoPlayerModel['showBitrates'];
  simLiveLiveDelay?: DynamoPlayerModel['simLiveLiveDelay'];
  TheaterModeCallback?: (settings?: KeyValueBasic) => void;
  siteId?: PlayerParams['siteId'];
  startLevel?: DynamoPlayerModel['startLevel'];
  uid?: PlayerParams['uid'];
  usehttps?: PlayerParams['usehttps'];
  makeAvailable?: StringBoolean;
}

export interface OEmbedJsonObject {
  type: string;
  version: string;
  title: string;
  author_name: string;
  provider_name: string;
  provider_url: string;
  thumbnail_url?: string;
  thumbnail_width?: number | null;
  thumbnail_height?: number | null;
  html: string;
  width: number;
  height: number;
}

type PlayerManagerCombinedSettings = Setup & DynamoPlayerModel;
// Extended model for the JS player type rather than the iframe player.
// This player lets you pass more things, like callback functions
export interface PlayerManagerRootSettings
  extends PlayerManagerCombinedSettings {
  accountId: string;
  affiliate?: string;
  asset?: LanguageCodesUppercase | LanguageCodesUppercaseCC | PlayerAsset;
  assetUID?: string;
  audioOnlyToggledOn?: boolean;
  bitrate?: 'lowest' | 'heighest' | 'highest' | 'audio' | 'undefined';
  dash?: string;
  endpoint?: string;
  eventId?: string;
  experienceId?: string;
  feed?: string;
  guid?: string;
  hls?: string;
  id?: string;
  isIframe?: boolean;
  lao?: string;
  locale?: string;
  metadata?: PlayerData['asset']['metadata'];
  options?: PlayerParams;
  pid?: string;
  playerId?: string;
  pluginSettings?: PlayerPlugins & {
    affiliate?: string;
    bitrate?: number;
    eventId?: string;
    experienceId?: string;
    locale?: LanguageCode;
    locationId?: string[];
    MiniPlayerCallback?: (settings?: KeyValueBasic) => void;
    pLoader?: boolean;
    siteId?: string;
    TheaterModeCallback?: (settings?: KeyValueBasic) => void;
    usehttps?: boolean;
  };
  resi?: string;
  rpid?: string;
  simlive?: string;
  simliveFeed?: string;
  siteId?: string;
  techOrder?: string[];
  token?: string;
  type?: string;
  url?: string;
  usehttps?: boolean;
  yt?: string;
  content?: never;
  status?: never;
}
