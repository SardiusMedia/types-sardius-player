export interface Youbora {
  accountCode?: string;
  accountId?: string;
}

declare class ChronosTime {
  startTime: number;
  stopTime: number;
  pauseTime: number;
  offset: number;
}

declare class Chronos {
  buffer: ChronosTime;
  join: ChronosTime;
  pause: ChronosTime;
  seek: ChronosTime;
  total: ChronosTime;
  viewedMax: unknown[];
}

declare class Flags {
  isBuffering: boolean;
  isEnded: boolean;
  isJoined: boolean;
  isPaused: boolean;
  isSeeking: boolean;
  isStarted: boolean;
  isStopped: boolean;
  isVideoStateBuffering: boolean;
  lastQuartileSent: number;
}

declare class Undeclared {}

interface Listeners {
  'buffer-begin': () => void;
  'buffer-end': () => void;
  error: () => void;
  join: () => void;
  pause: () => void;
  resume: () => void;
  'seek-begin': () => void;
  'seek-end': () => void;
  start: () => void;
  stop: () => void;
  'video-event': () => void;
}

export declare class YouboraPlugin<T> {
  adsAdapterListeners?: Listeners;
  backgroundDetector: Undeclared;
  browserLoadTimes: Undeclared;
  contentAdapterListeners: Undeclared;
  deviceDetector: Undeclared;
  hybridNetwork: Undeclared;
  infinity: Undeclared;
  initChrono: Undeclared;
  isAdsManifestSent: boolean;
  isBreakStarted: boolean;
  isInitiated: boolean;
  lastEventTime: null | number;
  offlineStorage: Undeclared;
  options: Undeclared;
  playedPostrolls: number;
  requestBuilder: Undeclared;
  resizeScrollDetector: Undeclared;
  resourceTransform: Undeclared;
  sessionExpire: number;
  storage: Undeclared;
  uuidGenerator: Undeclared;
  viewTransform: Undeclared;
  _adapter: YouboraAdapter<T>;
  _adsAdapter: null;
  _beat: Undeclared;
  _listeners: Record<string, any>;
  _ping: Undeclared;
  _refreshData: Undeclared;
}

export declare class YouboraAdapter<PlayerModel> {
  _isAdsAdapter: null | boolean;
  _listeners?: Listeners;
  chronos: Chronos;
  fireEventsStruct: { buffer: unknown[]; seek: unknown[] };
  flags: Flags;
  hlsMediaReference: () => void;
  hlsReference: () => void;
  mediaFound: boolean;
  monitor: null;
  player: PlayerModel;
  plugin: YouboraPlugin<PlayerModel>;
  references: {
    ended: () => boolean;
    error: () => boolean;
    pause: () => boolean;
    play: () => boolean;
    playing: () => boolean;
    progress: () => boolean;
    seeking: () => boolean;
    waiting: () => boolean;
  };
  tag: HTMLVideoElement;
}
