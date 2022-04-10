import { CustomErrorAbstract } from './customErrorAbstract';
import { isError } from './isError';
import type { CustomErrorClass } from './types/customErrorClass';

const isCustomError = <ErrorName extends string>(
  error: unknown,
  errorType?: CustomErrorClass<ErrorName>,
): error is CustomErrorAbstract<ErrorName> =>
  isError(error) && error instanceof CustomErrorAbstract && (errorType === undefined || errorType.code === error.code);

export { isCustomError };
