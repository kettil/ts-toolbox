/* eslint-disable import/no-cycle -- types have an interdependence */
import { ObjectNormalize } from '../object/objectNormalize';
import { SwaggerExtractProperty } from './swaggerExtractProperty';
import { SwaggerPropertyObject } from './swaggerPropertyObject';
import { SwaggerRequiredValidation } from './swaggerRequiredValidation';

type SwaggerExtractProperties<Props extends SwaggerPropertyObject> = ObjectNormalize<{
  readonly [K in keyof Props['properties']]: SwaggerExtractProperty<
    Props['properties'][K],
    SwaggerRequiredValidation<Props, K>
  >;
}>;

export type { SwaggerExtractProperties };
