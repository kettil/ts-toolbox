/* eslint-disable node/global-require -- tests if the package exists */
/* eslint-disable import/no-dynamic-require -- tests if the package exists */
/* eslint-disable @typescript-eslint/no-require-imports -- tests if the package exists */

const hasLibrary = (...names: string[]): boolean => {
  if (names.length === 0) {
    throw new Error('Module names is missing');
  }

  return names.some((name) => {
    try {
      require(name);

      return true;
    } catch (error: unknown) {
      return false;
    }
  });
};

export { hasLibrary };
