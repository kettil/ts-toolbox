import { SwaggerPropertyObject } from './swaggerPropertyObject';

type SwaggerRequiredValidation<
  Props extends SwaggerPropertyObject,
  K extends number | string | symbol,
> = Props['required'] extends readonly unknown[] ? (K extends Props['required'][number] ? true : false) : false;

export type { SwaggerRequiredValidation };
