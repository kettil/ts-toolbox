import { SwaggerPropertyNull } from '../../../../src/types/swagger/swaggerPropertyNull';

export const testSwaggerPropertyNull1: SwaggerPropertyNull = { type: 'null' };
export const testSwaggerPropertyNull2: Required<SwaggerPropertyNull> = {
  type: 'null',
  description: 'description',
  readOnly: true,
  writeOnly: false,
};
