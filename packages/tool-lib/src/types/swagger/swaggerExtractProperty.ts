/* eslint-disable import/no-cycle -- types have an interdependence */
import { SwaggerExtractItems } from './swaggerExtractItems';
import { SwaggerExtractProperties } from './swaggerExtractProperties';
import { SwaggerExtractPropertyType } from './swaggerExtractPropertyType';
import { SwaggerProperty } from './swaggerProperty';
import { SwaggerPropertyArray } from './swaggerPropertyArray';
import { SwaggerPropertyNumber } from './swaggerPropertyNumber';
import { SwaggerPropertyObject } from './swaggerPropertyObject';
import { SwaggerPropertyString } from './swaggerPropertyString';
import { SwaggerPropertyTuple } from './swaggerPropertyTuple';

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
