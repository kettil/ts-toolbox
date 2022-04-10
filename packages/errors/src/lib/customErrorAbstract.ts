import { isObject, isString } from '@kettil/tools';
import type { CustomErrorJson } from './types/customErrorJson';
import type { CustomErrorProps } from './types/customErrorProps';

abstract class CustomErrorAbstract<ErrorCode extends string> extends Error {
  readonly code: CustomErrorProps<ErrorCode>['code'];

  readonly statusCode: CustomErrorProps<ErrorCode>['statusCode'];

  readonly data?: CustomErrorProps<ErrorCode>['data'];

  override readonly cause?: Error['cause'];

  constructor({ code, data, message, cause, statusCode }: CustomErrorProps<ErrorCode>) {
    super(message);

    this.code = code;
    this.data = data;
    this.cause = cause;
    this.statusCode = statusCode;
  }

  #normalize(error: CustomErrorAbstract<string> | Error): Readonly<CustomErrorJson> {
    const { message, cause, stack } = error;

    const json: CustomErrorJson = {
      code: 'Error',
      message,
    };

    if (error instanceof CustomErrorAbstract) {
      const { code, data } = error;

      json.code = code;

      if (isObject(data)) {
        json.data = data;
      }
    }

    // istanbul ignore else
    if (isString(stack)) {
      json.stack = stack
        .split('\n')
        .slice(1)
        .map((v) => v.trim());
    }

    if (cause instanceof Error) {
      json.cause = this.#normalize(cause);
    }

    return json;
  }

  toJSON(): Readonly<CustomErrorJson> {
    return this.#normalize(this);
  }
}

export { CustomErrorAbstract };
