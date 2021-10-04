/* eslint-disable import/no-cycle -- types have an interdependence */
import { Range } from '../tupel/range';
import { SwaggerExtractProperty } from './swaggerExtractProperty';
import { SwaggerExtractTuple } from './swaggerExtractTuple';
import { SwaggerPropertyArray } from './swaggerPropertyArray';
import { SwaggerPropertyTuple } from './swaggerPropertyTuple';

type SwaggerExtractItems<Props extends SwaggerPropertyArray | SwaggerPropertyTuple> = Props extends SwaggerPropertyArray
  ? ReadonlyArray<SwaggerExtractProperty<Props['items'], true>>
  : Props extends SwaggerPropertyTuple
    ? SwaggerExtractTuple<Props['items'], Range<Props['minItems']>>
    : never;

export type { SwaggerExtractItems };
