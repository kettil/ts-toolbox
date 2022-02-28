import { Expect } from '../../../../src/types/expect';
import { SwaggerProperty } from '../../../../src/types/swagger/swaggerProperty';
import { SwaggerPropertyArray } from '../../../../src/types/swagger/swaggerPropertyArray';
import { SwaggerPropertyObject } from '../../../../src/types/swagger/swaggerPropertyObject';
import { SwaggerPropertySimple } from '../../../../src/types/swagger/swaggerPropertySimple';
import { SwaggerPropertyTuple } from '../../../../src/types/swagger/swaggerPropertyTuple';

export type SwaggerProperty1Test = Expect<
  SwaggerProperty,
  SwaggerPropertyArray | SwaggerPropertyObject | SwaggerPropertySimple | SwaggerPropertyTuple,
  true
>;
