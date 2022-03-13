import type { SwaggerProperty } from './swaggerProperty';
import type { SwaggerPropertyCommon } from './swaggerPropertyCommon';

type SwaggerPropertyObject = SwaggerPropertyCommon & {
  type: 'object';
  properties: Record<string, SwaggerProperty>;

  // Additional possible parameters
  required?: readonly string[];
};

export type { SwaggerPropertyObject };
