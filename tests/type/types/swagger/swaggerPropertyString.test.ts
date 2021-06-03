import { SwaggerPropertyString } from '../../../../src/types/swagger/swaggerPropertyString';

export const testSwaggerPropertyString1: SwaggerPropertyString = { type: 'string' };
export const testSwaggerPropertyString2: Required<SwaggerPropertyString> = {
  type: 'string',
  description: 'description',
  readOnly: true,
  writeOnly: false,
  default: 'default',
  minLength: 0,
  maxLength: 10,
  nullable: true,
  enum: ['a', 'b'],
  pattern: 'pattern',
  format: 'date',
};
