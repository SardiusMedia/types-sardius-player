declare global {
  export interface KeyValueAny {
    [key: string]: any;
  }
  export interface KeyValueTyped<T = string> {
    [key: string]: T;
  }

  export interface Window {
    SARDIUSENDPOINT: string;
  }

  export const videojs: typeof videojs;

  export type ObjectKeys<T> = T extends object
    ? (keyof T)[]
    : T extends number
    ? []
    : T extends Array<any> | string
    ? string[]
    : never;

  export interface ObjectConstructor {
    keys<T>(o: T): ObjectKeys<T>;
  }

  export type TargetElement = Element | undefined | null;
}

export {};
