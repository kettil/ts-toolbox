import { isString } from '@kettil/tools';
import type { CustomErrorProps } from './types/customErrorProps';

const getErrorMessage = <ErrorCode extends string>({
  metadata,
  defaultMessage,
}: {
  metadata: Partial<CustomErrorProps<ErrorCode>>;
  defaultMessage: string;
}): string => {
  const { message } = metadata;

  if (isString(message) && message.trim() !== '') {
    return message;
  }

  return defaultMessage;
};

export { getErrorMessage };
