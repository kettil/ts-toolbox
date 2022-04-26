import type { CustomErrorAbstract } from '../customErrorAbstract';
import type { CustomErrorProps } from './customErrorProps';

type CustomErrorClass<
  ErrorCode extends string,
  RequiredDataKeys extends readonly string[] | undefined,
> = RequiredDataKeys extends readonly string[]
  ? {
    new (
      metadata: CustomErrorProps & {
        readonly data: Record<RequiredDataKeys[number], unknown>;
      },
    ): CustomErrorAbstract<ErrorCode>;

    readonly code: ErrorCode;
  }
  : {
    new (): CustomErrorAbstract<ErrorCode>;
    new (message: NonNullable<CustomErrorProps['message']>): CustomErrorAbstract<ErrorCode>;
    new (metadata: CustomErrorProps): CustomErrorAbstract<ErrorCode>;

    readonly code: ErrorCode;
  };

export type { CustomErrorClass };
