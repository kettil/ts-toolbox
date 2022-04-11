import { normalizeErrorInstance } from './normalizeErrorInstance';
import type { CustomAggregateErrorProps } from './types/customAggregateErrorProps';
import type { NormalizeErrorObject } from './types/normalizeErrorObject';

abstract class CustomAggregateErrorAbstract<ErrorCode extends string> extends AggregateError {
  readonly code: CustomAggregateErrorProps<ErrorCode>['code'];

  readonly statusCode: CustomAggregateErrorProps<ErrorCode>['statusCode'];

  readonly data?: CustomAggregateErrorProps<ErrorCode>['data'];

  override readonly errors: CustomAggregateErrorProps<ErrorCode>['errors'];

  constructor({ code, data, message, errors, statusCode }: CustomAggregateErrorProps<ErrorCode>) {
    super(message);

    this.code = code;
    this.data = data;
    this.errors = errors;
    this.statusCode = statusCode;
  }

  toJSON(): Readonly<NormalizeErrorObject> {
    return normalizeErrorInstance(this);
  }
}

export { CustomAggregateErrorAbstract };
