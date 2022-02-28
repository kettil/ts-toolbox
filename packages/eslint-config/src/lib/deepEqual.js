const isArray = (value) => Array.isArray(value);
const isObject = (value) => typeof value === 'object' && value !== null && !isArray(value);
const intersect = (keysA, keysB) => keysA.filter((key) => keysB.includes(key));

const deepMerge = (a, b, keys) => {
  switch (true) {
    case isObject(a) && isObject(b):
      return intersect(Object.keys(a), Object.keys(b)).reduce(
        (c, key) => Object.assign(c, { [key]: deepMerge(a[key], b[key], [...keys, key]) }),
        { ...a, ...b },
      );

    case isArray(a) && isArray(b):
      return [...new Set([...a, ...b])];

    case isObject(a) || isObject(b):

    case isArray(a) || isArray(b):
      throw new Error(`The types of path "${keys.join('.')}" are different`);

    case a === undefined:
      return b;

    case b === undefined:
      return a;

    case a !== b:
      throw new Error(`The values of path "${keys.join('.')}" are different [${a} !== ${b}]`);

    default:
      return a;
  }
};

module.exports = deepMerge;
