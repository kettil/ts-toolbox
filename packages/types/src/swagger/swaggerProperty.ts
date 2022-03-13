import type { SwaggerPropertyArray } from './swaggerPropertyArray';
import type { SwaggerPropertyObject } from './swaggerPropertyObject';
import type { SwaggerPropertySimple } from './swaggerPropertySimple';
import type { SwaggerPropertyTuple } from './swaggerPropertyTuple';

type SwaggerProperty = SwaggerPropertyArray | SwaggerPropertyObject | SwaggerPropertySimple | SwaggerPropertyTuple;

export type { SwaggerProperty };
