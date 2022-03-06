import type { SwaggerExtractProperty } from './swaggerExtractProperty';
import type { SwaggerPropertySimple } from './swaggerPropertySimple';
import type { SwaggerPropertyTuple } from './swaggerPropertyTuple';

type SwaggerExtractTuple<Items extends SwaggerPropertyTuple['items'], A extends readonly string[]> = {
  [K in keyof Items]: Items[K] extends SwaggerPropertySimple
    ? SwaggerExtractProperty<Items[K], K extends A[number] ? true : false>
    : never;
};

export type { SwaggerExtractTuple };
