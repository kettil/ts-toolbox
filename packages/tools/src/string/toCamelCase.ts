import { isString } from '../is/isString';

const toCamelCase = (value: string): string => {
  if (value.trim() === '') {
    return '';
  }

  return value
    .replace(/([A-Z])/gu, ' $1')
    .trim()
    .split(/[^\da-z]/iu)
    .map((v, i) => {
      const firstChar = v.at(0);

      if (!isString(firstChar)) {
        return '';
      }

      return (i === 0 ? firstChar.toLowerCase() : firstChar.toUpperCase()) + v.slice(1).toLowerCase();
    })
    .join('');
};

export { toCamelCase };
