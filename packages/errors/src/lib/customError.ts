import { isString } from '@kettil/tools';
import { CustomErrorAbstract } from './customErrorAbstract';
import { formatErrorMessage } from './formatErrorMessage';
import { getErrorMessage } from './getErrorMessage';
import type { CustomErrorClass } from './types/customErrorClass';
import type { CustomErrorProps } from './types/customErrorProps';

const customError = <ErrorCode extends string>({
  code,
  statusCode = 500,
  defaultMessage = formatErrorMessage({ code }),
}: {
  code: ErrorCode;
  statusCode?: number;
  defaultMessage?: string;
}): CustomErrorClass<ErrorCode> =>
  class CustomError extends CustomErrorAbstract<ErrorCode> {
    // is needed for isCustomError
    static readonly code = code;

    constructor(metadata: Partial<Omit<CustomErrorProps<ErrorCode>, 'code'>> | string = {}) {
      if (isString(metadata)) {
        super({ code, statusCode, message: metadata });
      } else {
        super({ ...metadata, code, statusCode, message: getErrorMessage({ metadata, defaultMessage }) });
      }
    }
  };

export { customError };
