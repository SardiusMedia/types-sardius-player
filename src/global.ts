import VJS from 'video.js';

declare global {
  export interface KeyValueAny {
    [key: string]: any;
  }
  export interface KeyValueTyped<T = string> {
    [key: string]: T;
  }
  export interface KeyValueBasic {
    [key: string]: BasicObjectTypes;
  }

  export interface Window {
    SARDIUSENDPOINT: string;
  }

  export const VJSType: typeof VJS;

  export type ObjectKeys<T> = T extends object
    ? string[]
    : T extends number
    ? []
    : T extends Array<any> | string
    ? string[]
    : never;

  export interface ObjectConstructor {
    keys<T>(o: T): ObjectKeys<T>;
  }

  export type BasicObjectTypes = string | number | boolean | undefined;
}

export {};
