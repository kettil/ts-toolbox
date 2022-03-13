import type { SwaggerPropertyCommon } from './swaggerPropertyCommon';
import type { SwaggerPropertySimple } from './swaggerPropertySimple';

type SwaggerPropertyTuple = SwaggerPropertyCommon & {
  type: 'array';
  items: readonly SwaggerPropertySimple[];
  minItems: number;
  maxItems: number;
};

export type { SwaggerPropertyTuple };
