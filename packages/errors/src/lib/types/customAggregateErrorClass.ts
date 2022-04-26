import type { CustomAggregateErrorAbstract } from '../customAggregateErrorAbstract';
import type { CustomAggregateErrorProps } from './customAggregateErrorProps';

type CustomAggregateErrorClass<
  ErrorCode extends string,
  RequiredDataKeys extends readonly string[] | undefined,
> = RequiredDataKeys extends readonly string[]
  ? {
    new (
      metadata: CustomAggregateErrorProps & {
        readonly data: Record<RequiredDataKeys[number], unknown>;
      },
    ): CustomAggregateErrorAbstract<ErrorCode>;

    readonly code: ErrorCode;
  }
  : {
    new (errors: CustomAggregateErrorProps['errors']): CustomAggregateErrorAbstract<ErrorCode>;
    new (metadata: CustomAggregateErrorProps): CustomAggregateErrorAbstract<ErrorCode>;

    readonly code: ErrorCode;
  };

export type { CustomAggregateErrorClass };
