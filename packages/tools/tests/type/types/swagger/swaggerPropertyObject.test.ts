import type { SwaggerPropertyObject } from '../../../../src/types/swagger/swaggerPropertyObject';

export const testSwaggerPropertyObject1: SwaggerPropertyObject = { type: 'object', properties: {} };
export const testSwaggerPropertyObject2: Required<SwaggerPropertyObject> = {
  type: 'object',
  properties: {
    valueNull: { type: 'null' },
    valueBoolean: { type: 'boolean' },
    valueString: { type: 'string' },
    valueNumber: { type: 'number' },
    valueObject: { type: 'object', properties: {} },
    valueArray: { type: 'array', items: { type: 'integer' } },
  },
  description: 'description',
  readOnly: true,
  writeOnly: false,
  required: ['number'],
};
