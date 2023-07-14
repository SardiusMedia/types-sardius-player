export interface KeyValueAny {
  [key: string]: any;
}
export interface KeyValueTyped<T = string> {
  [key: string]: T;
}
