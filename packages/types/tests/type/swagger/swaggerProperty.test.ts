import { _, assert } from '../../../src/assert';
import type { SwaggerProperty } from '../../../src/swagger/swaggerProperty';
import type { SwaggerPropertyArray } from '../../../src/swagger/swaggerPropertyArray';
import type { SwaggerPropertyObject } from '../../../src/swagger/swaggerPropertyObject';
import type { SwaggerPropertySimple } from '../../../src/swagger/swaggerPropertySimple';
import type { SwaggerPropertyTuple } from '../../../src/swagger/swaggerPropertyTuple';

assert(
  _ as SwaggerProperty,
  _ as SwaggerPropertyArray | SwaggerPropertyObject | SwaggerPropertySimple | SwaggerPropertyTuple,
);
