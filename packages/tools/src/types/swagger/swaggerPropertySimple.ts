import { SwaggerPropertyBoolean } from './swaggerPropertyBoolean';
import { SwaggerPropertyNull } from './swaggerPropertyNull';
import { SwaggerPropertyNumber } from './swaggerPropertyNumber';
import { SwaggerPropertyString } from './swaggerPropertyString';

type SwaggerPropertySimple =
  | SwaggerPropertyBoolean
  | SwaggerPropertyNull
  | SwaggerPropertyNumber
  | SwaggerPropertyString;

export type { SwaggerPropertySimple };
