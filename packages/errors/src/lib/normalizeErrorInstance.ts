import { isArray, isObject, isString } from '@kettil/tools';
import type { NormalizeErrorObject } from './types/normalizeErrorObject';

const normalizeErrorInstance = (error: {
  message: string;
  errors?: Array<AggregateError | Error>;
  cause?: AggregateError | Error;
  stack?: string;
  code?: string;
  statusCode?: number;
  data?: Record<number | string, unknown>;
}): Readonly<NormalizeErrorObject> => {
  const { message, cause, errors, stack, code, data } = error;

  const json: NormalizeErrorObject = {
    code: code ?? 'Error',
    message,
  };

  if (isObject(data)) {
    json.data = data;
  }

  // istanbul ignore else
  if (isString(stack)) {
    json.stack = stack
      .split('\n')
      .slice(1)
      .map((v) => v.trim());
  }

  if (cause instanceof Error) {
    json.cause = normalizeErrorInstance(cause);
  }

  if (isArray(errors) && errors.length > 0) {
    json.errors = errors.map((v) => normalizeErrorInstance(v));
  }

  return json;
};

export { normalizeErrorInstance };
