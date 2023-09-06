import { DynamoPlayerModel, PlayerParams } from './player';

export declare class PlayerManagerClass {}

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
