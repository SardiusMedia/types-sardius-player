import videojs, {
  VideoJsPlayer as VJSPlayer,
  VideoJsPlayerOptions as VJSPlayerOptions,
} from 'video.js';

import {
  PlayerManagerClass,
  PlayerOptions,
  RemoteCaptionObject,
} from './sardius';
import { DynamoPlayerModel } from './player';
import {
  LanguageCodeAny,
  LanguageCodesUppercase,
  LanguageCodesUppercaseCC,
} from './languageCodes';
import { YouboraPlugin } from './youbora';

export type VJSTech = videojs.Tech;
export type TextTrackOptions = videojs.TextTrackOptions;
export type VJSEventTarget = videojs.EventTarget;
export type VJSEventListener = videojs.EventTarget.EventListener;
export type VJSEvent = videojs.EventTarget.Event;
export type VJSError = VJSPlayer['error'];

interface MenuCommonOptions {
  callback?: (data: SJSSource, button: any) => void;
  classes?: string;
  data?: SJSSource;
  error?: Error;
  isActive?: boolean | undefined;
  minItems?: number;
  order?: number;
  selectable?: boolean;
  playerOptions?: PlayerOptions;
  label?: string;
  bitrate?: string | number;
  height?: () => number;
  width?: () => number;
}

export interface SJSSourceOptions {
  end: number;
  start: number;
  [key: string]: unknown | number | string | boolean;
}

export interface SJSSource {
  audioCodec?: string;
  autoselect?: boolean;
  bitrate?: number | 'auto';
  code?: LanguageCodeAny;
  fileType?: string;
  force?: boolean;
  groupId?: string;
  height?: number | null;
  id?: number | string;
  instreamId?: string;
  label?: string;
  lang?: string;
  language?: string;
  name?: string;
  options?: SJSSourceOptions;
  qualityLabel?: string;
  selected?: boolean;
  src?: string;
  type?: string;
  url?: string | string[];
  width?: number | null;
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

export type SJSMenuItem = MenuCommonOptions & videojs.MenuItem;
export type SJSMenu = MenuCommonOptions & videojs.Menu;
export type SJSMenuItemOptions = MenuCommonOptions & videojs.MenuItemOptions;
export type SJSMenuOptions = MenuCommonOptions &
  Omit<videojs.MenuOptions, 'menuButton'> &
  Partial<videojs.MenuOptions>;
export type SJSComponent = MenuCommonOptions & videojs.Component;

export interface LanguageMenuItem extends SJSMenuItem {
  code?: LanguageCodesUppercase | LanguageCodesUppercaseCC;
}

export type SourceObject = videojs.Tech.SourceObject & SJSMenuItemOptions;

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

export interface SardiusObject {
  libs: {
    MenuMaker: typeof SPMenu;
    GroupMaker: typeof SPGroup;
    ButtonMaker: typeof SJSButton;
    Component: videojs.Component;
  };
  menu: <T>(pluginName: string, plugin: T) => void;
}

export declare class SPItem extends videojs.MenuItem {
  constructor(player: VJSPlayer, options: VJSPlayerOptions);
  init: () => void;
  active: () => void;
  handleClick: () => void;
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

export interface SJSPlayer extends VJSPlayer {
  controlBar: SardiusControlBar;
  bitratesMenu: SPGroup;
  audioTracksMenu: SPGroup;
  textTracks: () => SardiusTextTrackList;
  playerManager: PlayerManagerClass;
  options_: videojs.PlayerOptions & DynamoPlayerModel & { isIframe?: boolean };
  id_?: string;
  youboraplugin?: YouboraPlugin<SJSPlayer>;
}

interface ControlBarPlugin {
  addClass: (className: string) => void;
  removeClass: (className: string) => void;
  children_: (SPMenu & { contentEl_: HTMLUListElement })[];
}

interface SardiusControlBar extends videojs.ControlBar {
  settingsMenuLegacy: ControlBarPlugin;
  closedCaptions: { el_: HTMLTrackElement };
  progressControl: SJSButton;
  playToggle: SJSButton;
  LiveDisplay: ControlBarPlugin;
  LiveToggle: ControlBarPlugin;
}
