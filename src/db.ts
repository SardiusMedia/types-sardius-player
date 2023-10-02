import Joi from 'joi';
import dynogels from 'dynogels';
import { DynamoPlayerModel } from './player';

export interface Index {
  name: string;
  hashKey: Pk;
  rangeKey?: Sk;
  type?: string;
}

export type Pk = string | number;

export interface Sk {
  operation: FilterOperations;
  value: Pk;
}

export type Operations =
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
  | 'between';

export type FilterOperations =
  | Operations
  | 'contains'
  | 'exist'
  | 'exists'
  | 'null'
  | null;

export type QueryableTypes = string | number | boolean;

export type GSIName = string | null;

export interface DBOptions {
  ascending: boolean;
  attributes: string[];
  exactLimit: number;
  filters: FilterOperations[];
  limit: number;
  loadAll: boolean;
  query: dynogels.Query;
  rawResults: boolean;
  sort: 'ascending' | 'descending';
  startKey: dynogels.AWS.DynamoDB.Key;
}

export interface QueryArguments {
  pk: Pk;
  gsiName?: GSIName;
  sk?: Sk;
  transforms?: Partial<DBOptions>;
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

export interface DynamoDbTable<T> {
  hashKey: string;
  rangeKey: string;
  timestamps: boolean;
  tableName: string;
  indexes: Index[];
  schema: Joi.Schema<T>;
}
