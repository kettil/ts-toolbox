const hasLibrary = (...names) => {
  if (names.length === 0) {
    throw new Error('Module names is missing');
  }

  return names.some((name) => {
    try {
      // eslint-disable-next-line node/global-require, import/no-dynamic-require -- tests if the package exists
      require(name);

      return true;
    } catch (error) {
      return false;
    }
  });
};

module.exports = hasLibrary;
