import { splitCase } from './splitCase';
import { uppercaseFirst } from './uppercaseFirst';

const camelCase = (value: string): string => {
  if (value.trim() === '') {
    return '';
  }

  return splitCase(value)
    .map((v, i) => (i === 0 ? v : uppercaseFirst(v)))
    .join('');
};

export { camelCase };
