export interface Request extends KeyValueAny {
  /** Query strings from the request are parsed into the object as key: value pairs */
  query: KeyValueAny;
  /** The incoming request body can be found here */
  body: KeyValueAny;
  /** Parsed variables from the request url are here */
  params: KeyValueAny;
  /** Duplicate of params, contains variables from the request url */
  path: KeyValueAny;
  /** Contains headers passed on the request */
  headers: KeyValueAny;
}
