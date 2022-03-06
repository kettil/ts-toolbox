import type { Expect } from '../../../../src/types/expect';
import type { SwaggerRequiredValidation } from '../../../../src/types/swagger/swaggerRequiredValidation';

type SwaggerRequiredValidation1Value = SwaggerRequiredValidation<
  { type: 'object'; properties: { a: { type: 'boolean' } }; required: ['a'] },
  'a'
>;
export type SwaggerRequiredValidation1Test = Expect<SwaggerRequiredValidation1Value, true, true>;

type SwaggerRequiredValidation2Value = SwaggerRequiredValidation<
  { type: 'object'; properties: { a: { type: 'boolean' } }; required: ['b'] },
  'a'
>;
export type SwaggerRequiredValidation2Test = Expect<SwaggerRequiredValidation2Value, true, false>;

type SwaggerRequiredValidation3Value = SwaggerRequiredValidation<
  { type: 'object'; properties: { a: { type: 'boolean' } } },
  'a'
>;
export type SwaggerRequiredValidation3Test = Expect<SwaggerRequiredValidation3Value, true, false>;
