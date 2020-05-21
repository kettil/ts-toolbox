/* eslint-disable unicorn/prevent-abbreviations */
type EnvType = {
  (key: string, defaultValue: string | (() => string)): string;
  (key: string, defaultValue: number | (() => number)): number;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const env: EnvType = (key: string, defaultValue: any): any => {
  const value = process.env[key.toUpperCase()];

  if (value === undefined) {
    return typeof defaultValue === 'function' ? defaultValue() : defaultValue;
  }

  if (typeof defaultValue === 'number') {
    return Number.parseInt(value, 10);
  }

  return value;
};

export default env;
