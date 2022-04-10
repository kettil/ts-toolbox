import { customError } from '../customError';

class UndefinedSwitchCaseError extends customError({
  code: 'UndefinedSwitchCase',
  defaultMessage: 'The switch case is not defined.',
}) {}

export { UndefinedSwitchCaseError };
