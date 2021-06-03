import { SwaggerPropertyArray } from '../../../../src/types/swagger/swaggerPropertyArray';

export const testSwaggerPropertyArray1: SwaggerPropertyArray = { type: 'array', items: { type: 'number' } };
export const testSwaggerPropertyArray2: Required<SwaggerPropertyArray> = {
  type: 'array',
  items: { type: 'string' },
  description: 'description',
  readOnly: true,
  writeOnly: false,
  minItems: 0,
  maxItems: 10,
  uniqueItems: true,
};
