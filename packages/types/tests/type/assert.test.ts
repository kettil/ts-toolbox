/* eslint-disable @typescript-eslint/no-unsafe-argument -- testing of any */
import { _, assert } from '../../src/assert';

// @ts-expect-error -- never is not unknown
assert(_ as never, _ as unknown);
// @ts-expect-error -- unknown is not never
assert(_ as unknown, _ as never);
// @ts-expect-error -- never is not any
assert(_ as never, _);
// @ts-expect-error -- any is not never
assert(_, _ as never);
// @ts-expect-error -- any is not unknown
assert(_, _ as unknown);
// @ts-expect-error -- unknown is not any
assert(_ as unknown, _);

// Objects

assert(_ as { a: string }, _ as { a: string });
assert(_ as { readonly a: string }, _ as { readonly a: string });

// @ts-expect-error -- key "b" is missing
assert(_ as { a: string; b: string }, _ as { a: string });
// @ts-expect-error -- key "a" is not readonly
assert(_ as { readonly a: string }, _ as { a: string });
