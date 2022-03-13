import { assert, _ } from '../../../src/assert';
import type { SwaggerRequiredValidation } from '../../../src/swagger/swaggerRequiredValidation';

type TypeWithRequiredValidation1 = SwaggerRequiredValidation<
  { type: 'object'; properties: { a: { type: 'boolean' } }; required: ['a'] },
  'a'
>;

assert(_ as TypeWithRequiredValidation1, _ as true);

type TypeWithRequiredValidation2 = SwaggerRequiredValidation<
  { type: 'object'; properties: { a: { type: 'boolean' } }; required: ['b'] },
  'a'
>;

assert(_ as TypeWithRequiredValidation2, _ as false);

type TypeWithRequiredValidation3 = SwaggerRequiredValidation<
  { type: 'object'; properties: { a: { type: 'boolean' } } },
  'a'
>;

assert(_ as TypeWithRequiredValidation3, _ as false);
