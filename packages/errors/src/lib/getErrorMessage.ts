import { isString } from '@kettil/tools';
import type { CustomErrorProps } from './types/customErrorProps';

const getErrorMessage = ({
  metadata,
  defaultMessage,
}: {
  metadata: CustomErrorProps;
  defaultMessage: string;
}): string => {
  const { message } = metadata;

  if (isString(message) && message.trim() !== '') {
    return message;
  }

  return defaultMessage;
};

export { getErrorMessage };
