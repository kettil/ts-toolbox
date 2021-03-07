type EqualType1<T, S> = [T] extends [S] ? ([S] extends [T] ? true : false) : false;

type EqualType2<T, S> = (<X>() => X extends T ? 1 : 2) extends <X>() => X extends S ? 1 : 2 ? true : false;

export type EqualType<T, S, R extends never | false = never> = EqualType1<T, S> extends true
  ? EqualType2<T, S> extends true
    ? true
    : R
  : R;

export type Expect<Value, Expected, Result extends EqualType<Value, Expected, false>> = Result;
