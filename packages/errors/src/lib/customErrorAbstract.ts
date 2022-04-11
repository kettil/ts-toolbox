import { normalizeErrorInstance } from './normalizeErrorInstance';
import type { CustomErrorProps } from './types/customErrorProps';
import type { NormalizeErrorObject } from './types/normalizeErrorObject';

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

  toJSON(): Readonly<NormalizeErrorObject> {
    return normalizeErrorInstance(this);
  }
}

export { CustomErrorAbstract };
