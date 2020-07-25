/* eslint-disable unicorn/prevent-abbreviations */
type EnvType = {
  (): NodeJS.ProcessEnv;
  (key: string): string;
  (key: string, defaultValue: string | (() => string)): string;
  (key: string, defaultValue: number | (() => number)): number;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const env: EnvType = (key?: string, defaultValue?: any): any => {
  if (key === undefined) {
    return process.env;
  }

  const upperKey = key.toUpperCase();
  const value = process.env[upperKey];

  if (typeof value === 'undefined') {
    if (typeof defaultValue === 'undefined') {
      throw new TypeError(`The ENV variable "${upperKey}" is not defined`);
    }

    return typeof defaultValue === 'function' ? defaultValue() : defaultValue;
  }

  if (typeof defaultValue === 'number') {
    return Number.parseInt(value, 10);
  }

  return value;
};

export default env;