import { assert, _ } from '../../../src/assert';
import type { SwaggerPropertyBoolean } from '../../../src/swagger/swaggerPropertyBoolean';
import type { SwaggerPropertyNull } from '../../../src/swagger/swaggerPropertyNull';
import type { SwaggerPropertyNumber } from '../../../src/swagger/swaggerPropertyNumber';
import type { SwaggerPropertySimple } from '../../../src/swagger/swaggerPropertySimple';
import type { SwaggerPropertyString } from '../../../src/swagger/swaggerPropertyString';

assert(
  _ as SwaggerPropertySimple,
  _ as SwaggerPropertyBoolean | SwaggerPropertyNull | SwaggerPropertyNumber | SwaggerPropertyString,
);
