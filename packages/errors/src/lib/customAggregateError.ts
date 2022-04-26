import { isArray } from '@kettil/tools';
import { CustomAggregateErrorAbstract } from './customAggregateErrorAbstract';
import { InternalCustomError } from './customError';
import { formatErrorMessage } from './formatErrorMessage';
import { getErrorMessage } from './getErrorMessage';
import type { CustomAggregateErrorClass } from './types/customAggregateErrorClass';
import type { CustomAggregateErrorProps } from './types/customAggregateErrorProps';

const customAggregateError = <
  ErrorCode extends string,
  RequiredDataKeys extends readonly string[] | undefined = undefined,
>({
  code,
  statusCode = 500,
  defaultMessage = formatErrorMessage({ code }),
  requiredDataKeys,
}: {
  code: ErrorCode;
  statusCode?: number;
  defaultMessage?: string;
  requiredDataKeys?: RequiredDataKeys;
}): CustomAggregateErrorClass<ErrorCode, RequiredDataKeys> =>
  class CustomAggregateError extends CustomAggregateErrorAbstract<ErrorCode> {
    // is needed for isCustomAggregateError
    static readonly code = code;

    constructor(metadata: CustomAggregateErrorProps | CustomAggregateErrorProps['errors']) {
      if (isArray(metadata)) {
        super({
          code,
          statusCode,
          errors: metadata,
          message: getErrorMessage({ metadata: { message: undefined }, defaultMessage }),
        });

        if (Array.isArray(requiredDataKeys) && requiredDataKeys.length > 0) {
          throw new InternalCustomError({
            message: 'An object must be passed because the data field is required.',
            data: { requiredDataKeys },
            cause: this,
          });
        }
      } else {
        super({ ...metadata, code, statusCode, message: getErrorMessage({ metadata, defaultMessage }) });

        if (Array.isArray(requiredDataKeys) && requiredDataKeys.length > 0) {
          const isAllKeysDefined = requiredDataKeys.every((key: string) => typeof metadata.data?.[key] !== 'undefined');

          if (!isAllKeysDefined) {
            throw new InternalCustomError({
              message: 'Not all required data keys were defined.',
              data: { requiredDataKeys },
              cause: this,
            });
          }
        }
      }
    }
  } as unknown as CustomAggregateErrorClass<ErrorCode, RequiredDataKeys>;

export { customAggregateError };
