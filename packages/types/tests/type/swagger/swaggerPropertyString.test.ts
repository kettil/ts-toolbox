import type { SwaggerPropertyString } from '../../../src/swagger/swaggerPropertyString';

export const testSwaggerPropertyString1: SwaggerPropertyString = { type: 'string' };

export const testSwaggerPropertyString2: Required<SwaggerPropertyString> = {
  type: 'string',
  description: 'description',
  readOnly: true,
  writeOnly: false,
  default: 'default',
  minLength: 0,
  maxLength: 10,
  nullable: false,
  enum: ['a', 'b'],
  pattern: 'pattern',
  format: 'date',
} as const;
