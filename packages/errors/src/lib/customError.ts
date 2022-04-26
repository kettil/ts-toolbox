// eslint-disable-next-line max-classes-per-file -- see below for the initialization of InternalCustomError
import { isString } from '@kettil/tools';
import { CustomErrorAbstract } from './customErrorAbstract';
import { formatErrorMessage } from './formatErrorMessage';
import { getErrorMessage } from './getErrorMessage';
import type { CustomErrorClass } from './types/customErrorClass';
import type { CustomErrorProps } from './types/customErrorProps';

const customError = <ErrorCode extends string, RequiredDataKeys extends readonly string[] | undefined = undefined>({
  code,
  statusCode = 500,
  defaultMessage = formatErrorMessage({ code }),
  requiredDataKeys,
}: {
  code: ErrorCode;
  statusCode?: number;
  defaultMessage?: string;
  requiredDataKeys?: RequiredDataKeys;
}): CustomErrorClass<ErrorCode, RequiredDataKeys> =>
  class CustomError extends CustomErrorAbstract<ErrorCode> {
    // is needed for isCustomError
    static readonly code = code;

    constructor(metadata: CustomErrorProps | string = {}) {
      if (isString(metadata)) {
        super({ code, statusCode, message: metadata });

        if (Array.isArray(requiredDataKeys) && requiredDataKeys.length > 0) {
          // eslint-disable-next-line @typescript-eslint/no-use-before-define -- see below
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
            // eslint-disable-next-line @typescript-eslint/no-use-before-define -- see below
            throw new InternalCustomError({
              message: 'Not all required data keys were defined.',
              data: { requiredDataKeys },
              cause: this,
            });
          }
        }
      }
    }
  } as unknown as CustomErrorClass<ErrorCode, RequiredDataKeys>;

// The class must be defined in this file, otherwise a cycle problem may occur.
class InternalCustomError extends customError({ code: 'InternalCustomError' }) {}

export { customError, InternalCustomError };
