import { SwaggerPropertyBoolean } from '../../../../src/types/swagger/swaggerPropertyBoolean';

export const testSwaggerPropertyBoolean1: SwaggerPropertyBoolean = { type: 'boolean' };
export const testSwaggerPropertyBoolean2: Required<SwaggerPropertyBoolean> = {
  type: 'boolean',
  description: 'description',
  readOnly: true,
  writeOnly: false,
};
