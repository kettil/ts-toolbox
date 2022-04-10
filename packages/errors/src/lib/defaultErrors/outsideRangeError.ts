import { customError } from '../customError';

class OutsideRangeError extends customError({
  code: 'OutsideRange',
  defaultMessage: 'Value is not in the set or range of allowed values.',
}) {}

export { OutsideRangeError };
