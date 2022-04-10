import { isObject, isString } from '@kettil/tools';
import type { CustomErrorJson } from './types/customErrorJson';

const normalizeErrorInstance = (error: {
  message: string;
  cause?: Error;
  stack?: string;
  code?: string;
  statusCode?: number;
  data?: Record<number | string, unknown>;
}): Readonly<CustomErrorJson> => {
  const { message, cause, stack, code, data } = error;

  const json: CustomErrorJson = {
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

  return json;
};

export { normalizeErrorInstance };
