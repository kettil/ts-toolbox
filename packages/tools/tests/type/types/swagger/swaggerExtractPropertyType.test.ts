import type { Expect } from '../../../../src/types/expect';
import type { SwaggerExtractPropertyType } from '../../../../src/types/swagger/swaggerExtractPropertyType';

type SwaggerExtractPropertyType1Value = SwaggerExtractPropertyType<string, true>;
export type SwaggerExtractPropertyType1Test = Expect<SwaggerExtractPropertyType1Value, string, true>;

type SwaggerExtractPropertyType2Value = SwaggerExtractPropertyType<number, false>;
export type SwaggerExtractPropertyType2Test = Expect<SwaggerExtractPropertyType2Value, number | undefined, true>;
