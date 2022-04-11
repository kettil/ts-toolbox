import { isArray } from '@kettil/tools';
import { CustomAggregateErrorAbstract } from './customAggregateErrorAbstract';
import { formatErrorMessage } from './formatErrorMessage';
import { getErrorMessage } from './getErrorMessage';
import type { CustomAggregateErrorClass } from './types/customAggregateErrorClass';
import type { CustomAggregateErrorParameter } from './types/customAggregateErrorParameter';

const customAggregateError = <ErrorCode extends string>({
  code,
  statusCode = 500,
  defaultMessage = formatErrorMessage({ code }),
}: {
  code: ErrorCode;
  statusCode?: number;
  defaultMessage?: string;
}): CustomAggregateErrorClass<ErrorCode> =>
  class CustomAggregateError extends CustomAggregateErrorAbstract<ErrorCode> {
    // is needed for isCustomAggregateError
    static readonly code = code;

    constructor(metadata: CustomAggregateErrorParameter | CustomAggregateErrorParameter['errors']) {
      if (isArray(metadata)) {
        super({
          code,
          statusCode,
          errors: metadata,
          message: getErrorMessage({ metadata: { message: undefined }, defaultMessage }),
        });
      } else {
        super({ ...metadata, code, statusCode, message: getErrorMessage({ metadata, defaultMessage }) });
      }
    }
  };

export { customAggregateError };
