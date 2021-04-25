const defaultObject = require('../lib/defaultObject');
const hasLibrary = require('../lib/hasLibrary');

const rules = {
  'react-hooks/exhaustive-deps': ['warn'],
  'react-hooks/rules-of-hooks': ['error'],
};

if (hasLibrary('react')) {
  module.exports = { ...defaultObject, plugins: ['react-hooks'], rules };
} else {
  module.exports = defaultObject;
}
