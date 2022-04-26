import { normalizeErrorInstanceToObject } from './normalizeErrorInstanceToObject';
import type { CustomAggregateErrorAbstractProps } from './types/customAggregateErrorAbstractProps';
import type { NormalizeErrorObject } from './types/normalizeErrorObject';

abstract class CustomAggregateErrorAbstract<ErrorCode extends string> extends AggregateError {
  readonly code: CustomAggregateErrorAbstractProps<ErrorCode>['code'];

  readonly statusCode: CustomAggregateErrorAbstractProps<ErrorCode>['statusCode'];

  readonly data?: CustomAggregateErrorAbstractProps<ErrorCode>['data'];

  // In the context of the Aggregate Error the "cause" variable should not be used.
  override readonly cause: undefined = undefined;

  constructor({ code, data, message, errors, statusCode }: CustomAggregateErrorAbstractProps<ErrorCode>) {
    super(errors, message);

    this.code = code;
    this.data = data;
    this.statusCode = statusCode;
  }

  toJSON(): Readonly<NormalizeErrorObject> {
    return normalizeErrorInstanceToObject(this);
  }
}

export { CustomAggregateErrorAbstract };
