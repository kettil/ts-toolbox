import { upperCaseFirst } from '@kettil/tools';

const formatErrorMessage = ({ code }: { code: string }): string => {
  const message = code
    .replace(/([A-Z])/gu, ' $1')
    .replace(/(?<=\D)(?=\d)/gu, ' ')
    .replace(/[^\da-z]+/giu, ' ')
    .toLowerCase()
    .trim();

  return `${upperCaseFirst(message)}.`;
};

export { formatErrorMessage };
