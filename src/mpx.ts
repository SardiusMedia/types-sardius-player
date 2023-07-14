import { PlayerCategory } from './assets';

interface Releases {
  delivery?: string;
  guid?: string;
  id?: string;
  pid?: string;
  url?: string;
}

export interface MPXAssetContent {
  assetTypes?: string[];
  availableDate?: number;
  bitrate?: number | 'auto';
  contentType?: string;
  downloadUrl?: string;
  duration?: number;
  expirationDate?: number;
  expression?: string;
  format?: string;
  height?: number;
  isDefault?: boolean;
  language?: string;
  releases?: Releases[];
  streamingUrl?: string;
  url?: string;
  width?: number;
}

export interface MPXAsset {
  added?: string;
  adPolicyId?: string;
  airDate?: string;
  categories?: PlayerCategory[];
  content: MPXAssetContent[];
  countries?: string[];
  defaultThumbnailUrl?: string;
  description: string;
  excludeCountries?: boolean;
  guid: string;
  id: string;
  keywords?: string;
  ownerId?: string;
  pid: string;
  pubDate?: string;
  publicUrl?: string;
  ratings?: string[];
  text?: string;
  thumbnails: MPXAssetContent[];
  title: string;
}

export interface MPXQueryParams extends KeyValueAny {
  schema: string;
  form: string;
  token: string;
  byApproved: boolean;
  count: number;
  byOwnerId?: string;
  pid?: string;
  title?: string;
}
