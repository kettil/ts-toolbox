import { normalizeErrorInstanceToObject } from './normalizeErrorInstanceToObject';
import type { CustomErrorAbstractProps } from './types/customErrorAbstractProps';
import type { NormalizeErrorObject } from './types/normalizeErrorObject';

abstract class CustomErrorAbstract<ErrorCode extends string> extends Error {
  readonly code: CustomErrorAbstractProps<ErrorCode>['code'];

  readonly statusCode: CustomErrorAbstractProps<ErrorCode>['statusCode'];

  readonly data?: CustomErrorAbstractProps<ErrorCode>['data'];

  constructor({ code, data, message, cause, statusCode }: CustomErrorAbstractProps<ErrorCode>) {
    super(message, { cause });

    this.code = code;
    this.data = data;
    this.statusCode = statusCode;
  }

  toJSON(): Readonly<NormalizeErrorObject> {
    return normalizeErrorInstanceToObject(this);
  }
}

export { CustomErrorAbstract };
