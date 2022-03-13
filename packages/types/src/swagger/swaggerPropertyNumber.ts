import type { SwaggerPropertyCommon } from './swaggerPropertyCommon';

type SwaggerPropertyNumber = SwaggerPropertyCommon & {
  type: 'integer' | 'number';

  // Additional possible parameters
  default?: number;
  minimum?: number;
  maximum?: number;
  exclusiveMinimum?: boolean;
  exclusiveMaximum?: boolean;
  multipleOf?: number;
};

export type { SwaggerPropertyNumber };
