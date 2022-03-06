import type { Expect } from '../../../../src/types/expect';
import type { SwaggerPropertyBoolean } from '../../../../src/types/swagger/swaggerPropertyBoolean';
import type { SwaggerPropertyNull } from '../../../../src/types/swagger/swaggerPropertyNull';
import type { SwaggerPropertyNumber } from '../../../../src/types/swagger/swaggerPropertyNumber';
import type { SwaggerPropertySimple } from '../../../../src/types/swagger/swaggerPropertySimple';
import type { SwaggerPropertyString } from '../../../../src/types/swagger/swaggerPropertyString';

export type SwaggerPropertySimple1Test = Expect<
  SwaggerPropertySimple,
  SwaggerPropertyBoolean | SwaggerPropertyNull | SwaggerPropertyNumber | SwaggerPropertyString,
  true
>;
