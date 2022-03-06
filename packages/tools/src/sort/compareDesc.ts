/* e1slint-disable @typescript-eslint/no-unused-vars */
import { compareAsc } from './compareAsc';
import type { SortValue } from './types';

const compareDesc = <T extends SortValue>(a: T, b: T): number => compareAsc(b, a);

export { compareDesc };
