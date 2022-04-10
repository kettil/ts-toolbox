import { customError } from '../customError';

class WrongTypeError extends customError({
  code: 'WrongType',
  defaultMessage: 'Value is not of the expected type.',
}) {}

export { WrongTypeError };
