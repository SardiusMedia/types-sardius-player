declare global {
  type ObjectKeys<T> = T extends object
    ? (keyof T)[]
    : T extends number
    ? []
    : T extends Array<any> | string
    ? string[]
    : never;

  interface ObjectConstructor {
    keys<T>(o: T): ObjectKeys<T>;
  }
}

declare module 'serverless-req-res' {
  type KeyValueAny = Record<string, any>;
  type VoidReqResFunction<T = KeyValueAny, S = KeyValueAny> = (
    req: T,
    res: S,
    raw: KeyValueAny,
  ) => void;

  interface ReqResStatic {
    before: (callback: VoidReqResFunction) => ReqResStatic;
    plugins: (array: Plugin[]) => ReqResStatic;
    cors: (value: boolean) => ReqResStatic;
    run: () => KeyValueAny;
  }

  function reqRes<T, S>(callback: VoidReqResFunction<T, S>): ReqResStatic;

  export = reqRes;
}

declare type StringBoolean = 'true' | 'false';

declare module 'akamai-edgeauth' {
  interface Options {
    key: string;
    windowSeconds: string;
    tokenName: string;
    startTime: string;
  }

  declare class EdgeAuthClass {
    public options: Options;
    public generateACLToken(data: string): string;
    constructor(options: Options);
  }

  export = EdgeAuthClass;
}

declare module 'handlebars';

declare module '*.html' {
  const value: string;
  export default value;
}
