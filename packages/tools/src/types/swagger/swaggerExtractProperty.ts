import type { SwaggerExtractItems } from './swaggerExtractItems';
import type { SwaggerExtractProperties } from './swaggerExtractProperties';
import type { SwaggerExtractPropertyType } from './swaggerExtractPropertyType';
import type { SwaggerProperty } from './swaggerProperty';
import type { SwaggerPropertyArray } from './swaggerPropertyArray';
import type { SwaggerPropertyNumber } from './swaggerPropertyNumber';
import type { SwaggerPropertyObject } from './swaggerPropertyObject';
import type { SwaggerPropertyString } from './swaggerPropertyString';
import type { SwaggerPropertyTuple } from './swaggerPropertyTuple';

type SwaggerExtractProperty<
  Props extends SwaggerProperty,
  Required extends boolean = false,
> = Props['type'] extends 'boolean'
  ? SwaggerExtractPropertyType<boolean, Required>
  : Props extends SwaggerPropertyString
    ? SwaggerExtractPropertyType<string, Props['default'] extends string ? true : Required>
    : Props extends SwaggerPropertyNumber
      ? SwaggerExtractPropertyType<number, Props['default'] extends number ? true : Required>
      : Props extends SwaggerPropertyArray | SwaggerPropertyTuple
        ? SwaggerExtractPropertyType<SwaggerExtractItems<Props>, Required>
        : Props extends SwaggerPropertyObject
          ? SwaggerExtractPropertyType<SwaggerExtractProperties<Props>, Required>
          : never;

export type { SwaggerExtractProperty };
