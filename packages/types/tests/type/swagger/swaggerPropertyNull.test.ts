import type { SwaggerPropertyNull } from '../../../src/swagger/swaggerPropertyNull';

export const testSwaggerPropertyNull1: SwaggerPropertyNull = { type: 'null' };

export const testSwaggerPropertyNull2: Required<SwaggerPropertyNull> = {
  type: 'null',
  description: 'description',
  readOnly: true,
  writeOnly: false,
};
