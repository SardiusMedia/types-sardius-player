import { types } from 'hls-parser';
import { AssetTypes, Preroll } from './player';
import { SJSSource, SJSSourceOptions } from './videojs';
import {
  LanguageCodesUppercase,
  LanguageCodesUppercaseCC,
} from './languageCodes';

export interface AssetFile {
  altUrl?: string;
  approved?: boolean;
  availableDate?: Date;
  bitrate?: number | 'auto';
  categories?: string[];
  checksum?: string;
  copywrite?: string;
  copywriteUrl?: string;
  description?: string;
  expirationDate?: Date;
  file?: string;
  height?: number | null;
  id?: number | string;
  isDefault?: boolean;
  language?: string;
  localization?: Record<string, unknown>;
  location?: string;
  metadata?: Record<string, unknown>;
  mimeType?: string;
  moreInfo?: string;
  options?: Record<string, unknown>;
  order?: number;
  publishState?: string;
  raw?: string;
  shortDescription?: string;
  sizeKb?: number;
  subTitle?: string;
  tags?: string[];
  thumbnail?: string;
  title?: string;
  type?: string;
  types?: string[];
  url?: string | string[];
  width?: number | null;
}

interface AssetResponseMetadata {
  duration: number;
  genres: string[];
  isPreview: boolean;
  mood: string[];
  prayerLeaders: string[];
  previewId: string;
  relatedArtists: string[];
  setType: string[];
  themes: string[];
}

interface AssetResponseBios {
  actors?: string[];
  announcers?: string[];
  artists?: string[];
  attendees?: string[];
  bios?: string[];
  guests?: string[];
  hosts?: string[];
  performers?: string[];
  speakers?: string[];
  specials?: string[];
  worshipLeaders?: string[];
}

export interface AssetResponse {
  airDate?: Date;
  album?: string;
  approved?: boolean;
  availableDate?: string;
  bios?: AssetResponseBios;
  bitrates?: AssetFile[];
  categories?: string[];
  description?: string;
  duration?: number;
  episode?: string;
  expirationDate?: string;
  files?: AssetFile[];
  id: string;
  languages?: string[];
  media: AssetFile;
  metadata?: AssetResponseMetadata;
  pid: string;
  restricted?: boolean;
  series?: string;
  tags?: string[];
  title?: string;
  topics?: string[];
  types?: string[];
}

export interface PlayerAssetImage {
  height?: number | null;
  isDefault?: boolean;
  url?: string;
  width?: number | null;
}

export interface PlayerAssetStream {
  fileType?: string;
  playlist?: SardiusMappedManifest[];
  url?: string;
  src?: string;
}

export interface MappedPlayerAsset {
  audio?: SJSSource[];
  filmstrip?: string;
  images?: PlayerAssetImage[];
  stream?: PlayerAssetStream[];
  video?: SJSSource[];
  duration?: number;
}

export interface Caption {
  file?: string;
  fileType: string;
  label?: string;
  url?: string;
}

export interface PlayerCategory {
  name?: string;
  label?: string;
}

interface Metadata {
  bios?: AssetResponse['bios'];
  categories: PlayerCategory[];
  originalAsset?: AssetResponse;
  title: string;
  description?: string;
  isLive?: boolean;
  assetId?: string;
}

type AkamaiEdgeAuth = unknown;

interface AssetPreroll {
  canSkip?: Preroll['allowSkip'];
  format?: string;
  url?: Preroll['src'];
}

export interface PlayerAdPolicy {
  preroll: AssetPreroll;
}

export interface PlayerAsset extends MappedPlayerAsset {
  accountId: string;
  adPolicy?: PlayerAdPolicy;
  akamaiEdgeAuth?: AkamaiEdgeAuth;
  assets: MappedPlayerAsset;
  assetType: AssetTypes;
  captions: Caption[];
  createdDate?: string;
  duration?: number;
  id: string;
  isLive?: boolean;
  metadata: Metadata;
  protocol?: string;
  segmentType?: string;
  ttl?: number;
  updatedAt?: string;
  url?: string;
}

export interface PlayerAssetWithLanguage extends PlayerAsset {
  language?: LanguageCodesUppercase | LanguageCodesUppercaseCC;
  languages?: Partial<
    Record<LanguageCodesUppercase | LanguageCodesUppercaseCC, PlayerAsset>
  >;
}

export interface SardiusMappedManifest extends AssetFile {
  isLive?: boolean;
  isMasterPlaylist?: boolean;
  playlists?: (Partial<types.Variant> & SardiusMappedManifest)[];
  qualityLabel?: string;
  segmentType?: string;
  fileType?: SardiusMappedManifest['mimeType'];
  options?: SJSSourceOptions,
}

export interface ManifestLevel {
  url: string;
  bitrate: number;
  height?: number;
  width?: number;
  qualityLabel?: string;
}
