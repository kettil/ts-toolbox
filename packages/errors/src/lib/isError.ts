import { isObject } from '@kettil/tools';

const isError = (error: unknown): error is Error => isObject(error) && error instanceof Error;

export { isError };
