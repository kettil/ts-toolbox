type Equal1Type<T, S> = [T] extends [S] ? ([S] extends [T] ? true : false) : false;

type Equal2Type<T, S> = (<X>() => X extends T ? 1 : 2) extends <X>() => X extends S ? 1 : 2 ? true : false;

type EqualType<T, S, R extends never | false = never> = Equal1Type<T, S> extends true
  ? Equal2Type<T, S> extends true
    ? true
    : R
  : R;

export type { EqualType };
