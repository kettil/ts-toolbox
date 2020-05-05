/* eslint-disable import/no-dynamic-require, global-require, no-restricted-syntax */

const hasLibrary = (...names) => {
  if (names.length === 0) {
    throw new Error('Module names is missing');
  }

  for (const name of names) {
    try {
      require(name);
    } catch (error) {
      return false;
    }
  }

  return true;
};

module.exports = hasLibrary;
