import { isString } from '../is';

const lowercaseFirst = (value: string): string => {
  const [firstChar, ...restChars] = value;

  if (!isString(firstChar)) {
    return '';
  }

  return firstChar.toLowerCase() + restChars.join('');
};

export { lowercaseFirst };
