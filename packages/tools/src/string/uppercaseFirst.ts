import { isString } from '../is';

const uppercaseFirst = (value: string, lowercaseRest = false): string => {
  const [firstChar, ...restChars] = value;

  if (!isString(firstChar)) {
    return '';
  }

  return firstChar.toUpperCase() + (lowercaseRest ? restChars.join('').toLowerCase() : restChars.join(''));
};

export { uppercaseFirst };
