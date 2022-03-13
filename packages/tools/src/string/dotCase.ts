import { splitCase } from './splitCase';

const dotCase = (value: string): string => {
  if (value.trim() === '') {
    return '';
  }

  return splitCase(value).join('.');
};

export { dotCase };
