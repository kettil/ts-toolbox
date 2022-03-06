import type { Range } from '../tupel/range';
import type { SwaggerExtractProperty } from './swaggerExtractProperty';
import type { SwaggerExtractTuple } from './swaggerExtractTuple';
import type { SwaggerPropertyArray } from './swaggerPropertyArray';
import type { SwaggerPropertyTuple } from './swaggerPropertyTuple';

type SwaggerExtractItems<Props extends SwaggerPropertyArray | SwaggerPropertyTuple> = Props extends SwaggerPropertyArray
  ? ReadonlyArray<SwaggerExtractProperty<Props['items'], true>>
  : Props extends SwaggerPropertyTuple
    ? SwaggerExtractTuple<Props['items'], Range<Props['minItems']>>
    : never;

export type { SwaggerExtractItems };
