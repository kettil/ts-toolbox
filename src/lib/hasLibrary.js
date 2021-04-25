/* eslint-disable import/no-dynamic-require, node/global-require */

const hasLibrary = (...names) => {
  if (names.length === 0) {
    throw new Error('Module names is missing');
  }

  return names.some((name) => {
    try {
      require(name);

      return true;
    } catch (error) {
      return false;
    }
  });
};

module.exports = hasLibrary;
