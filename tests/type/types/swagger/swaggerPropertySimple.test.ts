import { Expect } from '../../../../src/types/expect';
import { SwaggerPropertyBoolean } from '../../../../src/types/swagger/swaggerPropertyBoolean';
import { SwaggerPropertyNull } from '../../../../src/types/swagger/swaggerPropertyNull';
import { SwaggerPropertyNumber } from '../../../../src/types/swagger/swaggerPropertyNumber';
import { SwaggerPropertySimple } from '../../../../src/types/swagger/swaggerPropertySimple';
import { SwaggerPropertyString } from '../../../../src/types/swagger/swaggerPropertyString';

export type SwaggerPropertySimple1Test = Expect<
  SwaggerPropertySimple,
  SwaggerPropertyBoolean | SwaggerPropertyNull | SwaggerPropertyNumber | SwaggerPropertyString,
  true
>;
