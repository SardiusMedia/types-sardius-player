import videojs, {
  VideoJsPlayer as VJSPlayer,
  VideoJsPlayerOptions as VJSPlayerOptions,
} from 'video.js';
import { DynamoPlayerModel, PlayerParams, Youtube } from './player';
import { LanguageCode } from './common';
import { LanguageCodesUppercase } from './languageCodes';

export type VJSType = typeof videojs;

export interface SardiusTextTrack extends TextTrack {
  label: string;
  name: string;
  language: string;
  default?: boolean;
  autoselect?: boolean;
  forced?: boolean;
}

export interface SardiusTextTrackList
  extends ReturnType<VJSPlayer['textTracks']> {
  mode?: TextTrack['mode'];
  [index: number]: SardiusTextTrack;
}

interface SardiusControlBar extends videojs.ControlBar {
  settingsMenuLegacy: KeyValueAny;
  closedCaptions: { el_: HTMLTrackElement };
  progressControl: SJSButton;
  playToggle: SJSButton;
}

declare class PlayerManager {}

export interface SJSPlayer extends VJSPlayer {
  controlBar: SardiusControlBar;
  bitratesMenu: SPGroup;
  audioTracksMenu: SPGroup;
  textTracks: () => SardiusTextTrackList;
  playerManager: PlayerManager;
  options_: videojs.PlayerOptions & { youtube: Youtube };
  id_?: string;
}

export type TextTrackOptions = videojs.TextTrackOptions;

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

export interface SJSSource {
  audioCodec?: string;
  autoselect?: boolean;
  bitrate?: number;
  code?: LanguageCode;
  force?: boolean;
  groupId?: string;
  height?: number;
  id?: number;
  instreamId?: string;
  label?: string;
  lang?: string;
  language?: string;
  name?: string;
  options?: undefined;
  selected?: boolean;
  src: string;
  type?: string;
  url?: string | string[];
  width?: number;
}

export type SJSPlayerOptions = VJSPlayerOptions & {
  callback: (data: SJSSource, button: any) => void;
  classes?: string;
  data?: SJSSource;
  id?: string;
  isActive?: boolean | undefined;
  label?: string;
  options?: SJSSource;
  playerOptions?: PlayerOptions;
};

interface MenuCommonOptions {
  callback?: (data: SJSSource, button: any) => void;
  classes?: string;
  data?: SJSSource;
  error?: Error;
  isActive?: boolean | undefined;
  minItems?: number;
  order?: number;
  playerOptions?: PlayerOptions;
  label?: string;
  bitrate?: string | number;
  height?: () => number;
  width?: () => number;
}

export type SJSMenuItem = MenuCommonOptions & videojs.MenuItem;
export type SJSMenu = MenuCommonOptions & videojs.Menu;
export type SJSMenuItemOptions = MenuCommonOptions & videojs.MenuItemOptions;
export type SJSMenuOptions = MenuCommonOptions & videojs.MenuOptions;
export type SJSComponent = MenuCommonOptions & videojs.Component;

export interface LanguageMenuItem extends SJSMenuItem {
  code?: LanguageCodesUppercase;
}

export type SourceObject = videojs.Tech.SourceObject & SJSMenuItemOptions;

type VJSButton = videojs.Button;

interface SPButtonT extends VJSButton {
  isSelected_: boolean;
}

export declare class SJSButton extends videojs.Button implements SPButtonT {
  constructor(player: VJSPlayer, options: VJSPlayerOptions);
  createEl: () => HTMLButtonElement;
  label: (label: string) => void;
  onClick: (callback: () => void) => void;
  handleClick: () => void;
  isSelected_: boolean;
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

export interface SPItemObject {
  classes?: string;
  label?: string;
  language?: string;
  selectable?: boolean;
  isActive?: boolean;
  id?: string;
  order?: number;
  data?: RemoteCaptionObject | TextTrack;
  callback?: (data: Required<RemoteCaptionObject>, button: SJSButton) => void;
  options_?: MenuCommonOptions;
}

export declare class SPItem extends videojs.MenuItem {
  constructor(player: VJSPlayer, options: VJSPlayerOptions);
  init: () => void;
  active: () => void;
  handleClick: () => void;
}

export declare class SPGroup extends videojs.Menu {
  constructor(player: VJSPlayer, options: VJSPlayerOptions);
  sortOrder: (a: number, b: number) => number;
  addItems: (items: SPItemObject[]) => void;
  setActiveItem: (item: SJSButton | SPItemObject | undefined) => void;
  clearGroup: () => void;
  items?: SPItemObject[];
}

export declare class SPMenu extends videojs.MenuButton {
  constructor(
    player: VJSPlayer,
    options: VJSPlayerOptions,
    onClick?: () => void,
  );
  addGroup: (settings: {
    classes?: string;
    id?: string;
    title?: string;
    minItems?: number;
  }) => SPGroup;
  toggleMenuBarControls: () => void;
  handleTouch: (event: Event | MouseEvent, keepHover?: boolean) => void;
}

export interface SardiusObject {
  libs: {
    MenuMaker: typeof SPMenu;
    GroupMaker: typeof SPGroup;
    ButtonMaker: typeof SJSButton;
    Component: videojs.Component;
  };
  menu: <T>(pluginName: string, plugin: T) => void;
}

export type SardiusVJS = typeof videojs & {
  getComponent: (componentName: string) => videojs.Component;
  // registerPlugin: (
  //   componentName: string,
  //   func: typeof videojs.Component,
  // ) => videojs.Component;
  extend: (
    component: videojs.Component,
    options: {
      constructor: (player: VJSPlayer, options: VJSPlayerOptions) => SPMenu;
    },
  ) => videojs.Component;
};
