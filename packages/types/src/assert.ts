/* eslint-disable @typescript-eslint/naming-convention -- needed for test cases */
/* eslint-disable @typescript-eslint/no-explicit-any -- needed for test cases */
/* eslint-disable @typescript-eslint/no-unsafe-assignment -- needed for test cases */
/* eslint-disable id-denylist -- needed for test cases */
class Any {
  // @ts-expect-error -- needed for test cases
  private any: true;
}

const _ = false as any;
/* eslint-enable @typescript-eslint/naming-convention -- needed for test cases */
/* eslint-enable @typescript-eslint/no-explicit-any -- needed for test cases */
/* eslint-enable @typescript-eslint/no-unsafe-assignment -- needed for test cases */
/* eslint-enable id-denylist -- needed for test cases */

type TestAny<T> = Any extends T ? ([T] extends [Any] ? 1 : 0) : 0;

type TestExact<Left, Right> = (<U>() => U extends Left ? 1 : 0) extends <U>() => U extends Right ? 1 : 0 ? Any : never;

type Test<Left, Right, Exact extends boolean = true> = TestAny<Left> extends 1
  ? TestAny<Right> extends 1
    ? 1
    : '❌ - only left has any'
  : TestAny<Right> extends 1
    ? '❌ - only right has any'
    : [Left] extends [Right]
      ? [Right] extends [Left]
        ? Any extends TestExact<Left, Right>
          ? 1
          : Exact extends true
            ? '❌ - unexpected property'
            : 1
        : '❌ - right not equal'
      : '❌ - left not equal';

type Assert<T, U> = U extends 1 ? T : TestAny<T> extends 1 ? never : U;

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function -- type option */
const assert = <Left, Right, Exact extends boolean = true>(
  left: Assert<Left, Test<Left, Right, Exact>>,
  right: Assert<Right, Test<Left, Right, Exact>>,
  excat?: Exact,
): void => {};
/* eslint-enable @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function -- type option */

export { _, assert };
