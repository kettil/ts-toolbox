import { splitCase } from './splitCase';

const kebabCase = (value: string): string => {
  if (value.trim() === '') {
    return '';
  }

  return splitCase(value).join('-');
};

export { kebabCase };
