import { customError } from '../customError';

class ExternalServiceError extends customError({
  code: 'ExternalService',
  defaultMessage: 'An external service error has occurred.',
  requiredDataKeys: ['serviceName'] as const,
}) {}

export { ExternalServiceError };
