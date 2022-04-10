import { ExternalServiceError } from './externalServiceError';
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

export { defaultErrors };
