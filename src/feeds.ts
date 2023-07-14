import { AssetResponse } from './assets';

interface QueryObject {
  sort?: string;
  sortData?: {
    direction?: string;
    key?: string;
    title?: string;
  };
}

interface FilesObject {
  height?: number;
  id?: string;
  isDefault?: boolean;
  mimeType?: string;
  title?: string;
  types?: string[];
  url?: string;
  width?: number;
}

interface QueryFormArray {
  value?: string;
  key?: string;
  operand?: string;
}

export interface Feed {
  accountId?: string;
  id?: string;
  title: string;
  description: string;
  createdAt?: string;
  createdBy?: string;
  updatedAt?: string;
  updatedBy?: string;
  releaseDate?: number | string | null;
  approved?: boolean;
  prepend?: {
    ids?: string[];
  };
  bios?: {
    bios?: string[];
  };
  queryForm?: Array<QueryFormArray>;
  tags?: string[];
  topics?: string[];
  query?: QueryObject;
  files?: Array<FilesObject>;
  metadata?: KeyValueAny;
  private?: {
    accessKey?: string;
    enabled?: boolean;
    viewerSegments?: string[];
  };
  _id?: string;
  _score?: string;
}

export interface FeedsResponse {
  readonly total: number;
  readonly hits: Required<AssetResponse>[];
}
