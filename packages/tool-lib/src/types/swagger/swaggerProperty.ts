/* eslint-disable import/no-cycle -- types have an interdependence */
import { SwaggerPropertyArray } from './swaggerPropertyArray';
import { SwaggerPropertyObject } from './swaggerPropertyObject';
import { SwaggerPropertySimple } from './swaggerPropertySimple';
import { SwaggerPropertyTuple } from './swaggerPropertyTuple';

type SwaggerProperty = SwaggerPropertyArray | SwaggerPropertyObject | SwaggerPropertySimple | SwaggerPropertyTuple;

export type { SwaggerProperty };
