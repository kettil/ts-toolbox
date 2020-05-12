/* eslint-disable import/no-unused-modules, global-require */

// export modified jest config
module.exports = {
  ...require('./jest.json'),
  coverageReporters: ['text-summary'],
};
