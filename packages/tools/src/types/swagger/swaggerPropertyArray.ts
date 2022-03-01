/* eslint-disable import/no-cycle -- types have an interdependence */
import { SwaggerProperty } from './swaggerProperty';
import { SwaggerPropertyCommon } from './swaggerPropertyCommon';

type SwaggerPropertyArray = SwaggerPropertyCommon & {
  // Array
  type: 'array';
  items: SwaggerProperty;

  // Additional possible parameters
  minItems?: number;
  maxItems?: number;
  uniqueItems?: boolean;
};

export type { SwaggerPropertyArray };
