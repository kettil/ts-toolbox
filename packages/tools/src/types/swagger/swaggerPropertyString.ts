import { SwaggerPropertyCommon } from './swaggerPropertyCommon';

type SwaggerPropertyString = SwaggerPropertyCommon & {
  type: 'string';

  // Additional possible parameters
  default?: string;
  minLength?: number;
  maxLength?: number;
  nullable?: boolean;
  enum?: readonly string[];
  pattern?: string;
  format?: 'date-time' | 'date' | 'email' | 'hostname' | 'ipv4' | 'ipv6' | 'uri' | 'uuid';
};

export type { SwaggerPropertyString };
