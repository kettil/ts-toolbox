/* eslint-disable import/no-cycle -- types have an interdependence */
import { SwaggerProperty } from './swaggerProperty';
import { SwaggerPropertyCommon } from './swaggerPropertyCommon';

type SwaggerPropertyObject = SwaggerPropertyCommon & {
  type: 'object';
  properties: Record<string, SwaggerProperty>;

  // Additional possible parameters
  required?: readonly string[];
};

export type { SwaggerPropertyObject };
