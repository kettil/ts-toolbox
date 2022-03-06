import type { SwaggerPropertyTuple } from '../../../../src/types/swagger/swaggerPropertyTuple';

export const testSwaggerPropertyTuple1: SwaggerPropertyTuple = {
  type: 'array',
  items: [{ type: 'number' }],
  minItems: 1,
  maxItems: 1,
};
export const testSwaggerPropertyTuple2: Required<SwaggerPropertyTuple> = {
  type: 'array',
  items: [{ type: 'number' }, { type: 'number' }],
  description: 'description',
  readOnly: false,
  writeOnly: true,
  minItems: 1,
  maxItems: 2,
};
