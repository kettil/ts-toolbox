import type { SwaggerPropertyBoolean } from '../../../src/swagger/swaggerPropertyBoolean';

export const testSwaggerPropertyBoolean1: SwaggerPropertyBoolean = { type: 'boolean' };

export const testSwaggerPropertyBoolean2: Required<SwaggerPropertyBoolean> = {
  type: 'boolean',
  description: 'description',
  readOnly: true,
  writeOnly: false,
};
