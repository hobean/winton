import { compile } from "path-to-regexp";

export const toUrl = (path: string, params?: object) =>
  compile(path, { encode: encodeURIComponent })(params);
