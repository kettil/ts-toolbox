import { Expect } from '../../../../src/types/expect';
import { SwaggerExtractItems } from '../../../../src/types/swagger/swaggerExtractItems';

type SwaggerExtractItems1Value = SwaggerExtractItems<{ type: 'array'; items: { type: 'string' } }>;
export type SwaggerExtractItems1Test = Expect<SwaggerExtractItems1Value, readonly string[], true>;

type SwaggerExtractItems2Value = SwaggerExtractItems<{
  type: 'array';
  items: [{ type: 'string' }];
  minItems: 1;
  maxItems: 1;
}>;
export type SwaggerExtractItems2Test = Expect<SwaggerExtractItems2Value, [string], true>;
