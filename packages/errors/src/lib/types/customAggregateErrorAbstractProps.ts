import type { CustomAggregateErrorProps } from './customAggregateErrorProps';

type CustomAggregateErrorAbstractProps<ErrorCode extends string> = Readonly<
  CustomAggregateErrorProps & {
    readonly code: ErrorCode;
    readonly statusCode: number;
  }
>;

export type { CustomAggregateErrorAbstractProps };
