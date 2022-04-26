import { CustomAggregateErrorAbstract } from './customAggregateErrorAbstract';
import { isError } from './isError';
import type { CustomAggregateErrorClass } from './types/customAggregateErrorClass';

const isCustomAggregateError = <ErrorName extends string>(
  error: unknown,
  errorType?: CustomAggregateErrorClass<ErrorName, string[] | undefined>,
): error is CustomAggregateErrorAbstract<ErrorName> =>
  isError(error) &&
  error instanceof CustomAggregateErrorAbstract &&
  (errorType === undefined || errorType.code === error.code);

export { isCustomAggregateError };
