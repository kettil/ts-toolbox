import type { SwaggerPropertyNumber } from '../../../src/swagger/swaggerPropertyNumber';

export const testSwaggerPropertyNumber1: SwaggerPropertyNumber = { type: 'integer' };

export const testSwaggerPropertyNumber2: SwaggerPropertyNumber = { type: 'number' };

export const testSwaggerPropertyNumber3: Required<SwaggerPropertyNumber> = {
  type: 'integer',
  description: 'description',
  readOnly: true,
  writeOnly: false,
  default: 5,
  minimum: 0,
  maximum: 10,
  exclusiveMinimum: true,
  exclusiveMaximum: true,
  multipleOf: 2,
};
