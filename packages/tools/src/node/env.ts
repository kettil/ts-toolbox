type EnvironmentType = {
  (): NodeJS.ProcessEnv;
  (key: string): string;
  (key: string, defaultValue: string | (() => string)): string;
  (key: string, defaultValue: number | (() => number)): number;
};

/* eslint-disable-next-line @typescript-eslint/no-explicit-any -- the typing is overwritten. */
const env: EnvironmentType = (key?: string, defaultValue?: unknown): any => {
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

export { env };
