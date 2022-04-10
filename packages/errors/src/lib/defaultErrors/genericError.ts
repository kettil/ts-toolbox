import { customError } from '../customError';

class GenericError extends customError({
  code: 'Generic',
  defaultMessage: 'An unexpected error occurred.',
}) {}

export { GenericError };
