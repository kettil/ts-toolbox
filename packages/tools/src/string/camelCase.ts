import { splitCase } from './splitCase';
import { upperCaseFirst } from './upperCaseFirst';

const camelCase = (value: string): string => {
  if (value.trim() === '') {
    return '';
  }

  return splitCase(value)
    .map((v, i) => (i === 0 ? v : upperCaseFirst(v)))
    .join('');
};

export { camelCase };
