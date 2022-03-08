/* eslint-disable @typescript-eslint/naming-convention -- The naming convention is given by eslint */
interface Environment {
  'jest/globals'?: true;
  // es6?: true;
  es2022?: true;
  jest?: true;
  node?: true;
}

export type { Environment };
