import { customAggregateError } from '../customAggregateError';

class GenericAggregateError extends customAggregateError({
  code: 'Generic',
  defaultMessage: 'Collection of various errors.',
}) {}

export { GenericAggregateError };
