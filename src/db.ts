import dynogels from 'dynogels';
import { DynamoPlayerModel } from './player';

export interface Index {
  name: string;
  hashKey: Pk;
  rangeKey?: Sk;
  type?: string;
}

export type Pk = string | number;

export type Sk = string | number | boolean | Filter;

export interface Filter {
  key?: string;
  operation:
    | '='
    | '=='
    | '==='
    | 'equals'
    | '<='
    | '<'
    | '>'
    | '>='
    | 'begins'
    | 'beginsWith'
    | 'between'
    | 'exist'
    | 'exists'
    | 'contains';
  value: QueryableTypes;
  value2?: QueryableTypes;
}

export type QueryableTypes = string | number | boolean;

export type GSIName = string | null;

interface Transforms {
  query: dynogels.Query;
  limit: number;
  loadAll: boolean;
  startKey: dynogels.AWS.DynamoDB.Key;
  ascending: boolean;
  exactLimit: number;
}

export interface QueryArguments {
  pk: Pk;
  gsiName?: GSIName;
  sk?: Sk;
  attributes?: string[];
  filters?: Filter[];
  transforms?: Partial<Transforms>;
}

export interface UpdateOptions {
  expected: { [key: Pk]: { Exists: boolean } };
}

export interface DynamoResponse<T = DynamoPlayerModel> {
  Items: T[];
  Count?: number;
  LastEvaluatedKey?: dynogels.AWS.DynamoDB.Key;
  ScannedCount: number;
}

interface RawDynamoItem<T> {
  attrs: T;
}

export interface DynamoResponseRaw<T = DynamoPlayerModel> {
  Items: RawDynamoItem<T>[];
  Count?: number;
  LastEvaluatedKey?: dynogels.AWS.DynamoDB.Key;
  ScannedCount: number;
}

export interface DynogelsIndex {
  hashKey?: dynogels.ModelConfiguration['hashKey'];
  rangeKey?: dynogels.ModelConfiguration['rangeKey'];
  name: string;
}
