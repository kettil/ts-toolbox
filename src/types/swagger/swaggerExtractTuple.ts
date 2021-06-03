/* eslint-disable import/no-cycle */
import { SwaggerExtractProperty } from './swaggerExtractProperty';
import { SwaggerPropertySimple } from './swaggerPropertySimple';
import { SwaggerPropertyTuple } from './swaggerPropertyTuple';

type SwaggerExtractTuple<Items extends SwaggerPropertyTuple['items'], A extends readonly string[]> = {
  [K in keyof Items]: Items[K] extends SwaggerPropertySimple
    ? SwaggerExtractProperty<Items[K], K extends A[number] ? true : false>
    : never;
};

export type { SwaggerExtractTuple };
