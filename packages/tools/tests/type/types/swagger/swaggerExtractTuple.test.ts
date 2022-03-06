import type { Expect } from '../../../../src/types/expect';
import type { SwaggerExtractTuple } from '../../../../src/types/swagger/swaggerExtractTuple';

type SwaggerExtractTuple1Value = SwaggerExtractTuple<[{ type: 'boolean' }, { type: 'string' }], ['0']>;
export type SwaggerExtractTuple1Test = Expect<SwaggerExtractTuple1Value, [boolean, string | undefined], true>;
