const node = require('./node');

const environment = {
  ...node.env,

  browser: true,
  commonjs: true,
  serviceworker: true,
  'shared-node-browser': true,
  worker: true,
};

module.exports = { ...node, env: environment };
