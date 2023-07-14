/* eslint-disable @typescript-eslint/no-explicit-any */
export interface KeyValueAny {
  [key: string]: any;
}
export interface KeyValueTyped<T = string> {
  [key: string]: T;
}

declare global {
  export interface KeyValueAny {
    [key: string]: any;
  }
  export interface KeyValueTyped<T = string> {
    [key: string]: T;
  }
}

export {};
