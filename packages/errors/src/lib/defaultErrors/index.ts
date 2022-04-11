import { ExternalServiceError } from './externalServiceError';
import { GenericAggregateError } from './genericAggregateError';
import { GenericError } from './genericError';
import { NotImplementedError } from './notImplementedError';
import { OutsideRangeError } from './outsideRangeError';
import { UndefinedSwitchCaseError } from './undefinedSwitchCaseError';
import { WrongTypeError } from './wrongTypeError';

const defaultErrors = {
  ExternalServiceError,

  GenericError,
  NotImplementedError,
  OutsideRangeError,
  UndefinedSwitchCaseError,
  WrongTypeError,
} as const;

const defaultAggregateErrors = {
  GenericAggregateError,
} as const;

export { defaultErrors, defaultAggregateErrors };
