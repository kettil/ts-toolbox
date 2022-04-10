import { customError } from '../customError';

class NotImplementedError extends customError({
  code: 'NotImplemented',
  defaultMessage: 'Feature is not implemented yet.',
}) {}

export { NotImplementedError };
