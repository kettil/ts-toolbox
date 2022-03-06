import type { ObjectNormalize } from '../object/objectNormalize';
import type { SwaggerExtractProperty } from './swaggerExtractProperty';
import type { SwaggerPropertyObject } from './swaggerPropertyObject';
import type { SwaggerRequiredValidation } from './swaggerRequiredValidation';

type SwaggerExtractProperties<Props extends SwaggerPropertyObject> = ObjectNormalize<{
  readonly [K in keyof Props['properties']]: SwaggerExtractProperty<
    Props['properties'][K],
    SwaggerRequiredValidation<Props, K>
  >;
}>;

export type { SwaggerExtractProperties };
