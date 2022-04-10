import type { CustomErrorAbstract } from '../customErrorAbstract';
import type { CustomErrorProps } from './customErrorProps';

type CustomErrorClass<ErrorCode extends string = string> = {
  new (): CustomErrorAbstract<ErrorCode>;
  new (message: string): CustomErrorAbstract<ErrorCode>;
  new (metadata: Partial<Omit<CustomErrorProps<ErrorCode>, 'code'>>): CustomErrorAbstract<ErrorCode>;

  readonly code: ErrorCode;
};

export type { CustomErrorClass };
