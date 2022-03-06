import type { Expect } from '../../../../src/types/expect';
import type { SwaggerProperty } from '../../../../src/types/swagger/swaggerProperty';
import type { SwaggerPropertyArray } from '../../../../src/types/swagger/swaggerPropertyArray';
import type { SwaggerPropertyObject } from '../../../../src/types/swagger/swaggerPropertyObject';
import type { SwaggerPropertySimple } from '../../../../src/types/swagger/swaggerPropertySimple';
import type { SwaggerPropertyTuple } from '../../../../src/types/swagger/swaggerPropertyTuple';

export type SwaggerProperty1Test = Expect<
  SwaggerProperty,
  SwaggerPropertyArray | SwaggerPropertyObject | SwaggerPropertySimple | SwaggerPropertyTuple,
  true
>;
