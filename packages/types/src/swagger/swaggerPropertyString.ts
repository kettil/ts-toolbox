import type { SwaggerPropertyCommon } from './swaggerPropertyCommon';

type SwaggerPropertyString = SwaggerPropertyCommon & {
  readonly type: 'string';

  // Additional possible parameters
  readonly default?: string;
  readonly minLength?: number;
  readonly maxLength?: number;
  readonly nullable?: boolean;
  readonly enum?: readonly string[];
  readonly pattern?: string;
  readonly format?: 'date-time' | 'date' | 'email' | 'hostname' | 'ipv4' | 'ipv6' | 'uri' | 'uuid';
};

export type { SwaggerPropertyString };
