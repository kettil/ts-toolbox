import compareAsc from './compareAsc';
import { SortValue } from './types';

const compareDesc = <T extends SortValue>(a: T, b: T) => compareAsc(b, a);

export default compareDesc;
