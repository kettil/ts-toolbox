import { customError } from '../customError';

class WrongTypeError extends customError({
  code: 'WrongType',
  defaultMessage: 'Value is not of the expected type.',
  requiredDataKeys: ['valueType'] as const,
}) {}

export { WrongTypeError };
