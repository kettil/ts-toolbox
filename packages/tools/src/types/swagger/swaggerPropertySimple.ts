import type { SwaggerPropertyBoolean } from './swaggerPropertyBoolean';
import type { SwaggerPropertyNull } from './swaggerPropertyNull';
import type { SwaggerPropertyNumber } from './swaggerPropertyNumber';
import type { SwaggerPropertyString } from './swaggerPropertyString';

type SwaggerPropertySimple =
  | SwaggerPropertyBoolean
  | SwaggerPropertyNull
  | SwaggerPropertyNumber
  | SwaggerPropertyString;

export type { SwaggerPropertySimple };
