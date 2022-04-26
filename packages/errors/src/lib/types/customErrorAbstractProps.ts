import type { CustomErrorProps } from './customErrorProps';

type CustomErrorAbstractProps<ErrorCode extends string> = Readonly<
  CustomErrorProps & {
    readonly code: ErrorCode;
    readonly statusCode: number;
  }
>;

export type { CustomErrorAbstractProps };
