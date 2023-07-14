/* eslint-disable no-unused-vars */
export interface ReqResError {
  statusCode: number;
  error: Error;
}

interface EndCallbackObject {
  /** Ends execution of the function */
  end: () => void;
}

export interface Response extends KeyValueAny {
  /** Headers to send on the response */
  headers: (key: string | KeyValueAny, value?: string) => KeyValueAny;
  /** Ends execution of the function */
  end: () => void;
  /** Sends back a raw response */
  send: (
    statusCodeOrBody: number | string | KeyValueAny,
    body?: string | KeyValueAny,
  ) => EndCallbackObject | ReqResError;
  /** Sends a redirect response */
  redirect: (URL: string) => EndCallbackObject;
  /** Sends a json response */
  json: <T = number | KeyValueAny>(
    statusCodeOrBody: T,
    body?: KeyValueAny,
  ) => EndCallbackObject | ReqResError;
  jsonp: (
    statusCodeOrBody: number | KeyValueAny,
    body?: string | KeyValueAny,
    callback?: string,
  ) => EndCallbackObject | ReqResError;
  /** Sends an error response */
  error: (
    statusCodeOrError: unknown | number | Error | KeyValueAny,
    error?: Error | KeyValueAny,
  ) => ReqResError;
  raw: (object: string | KeyValueAny) => EndCallbackObject;
  handle: (promise: Promise<unknown>) => EndCallbackObject | ReqResError;
}
