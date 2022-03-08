import { isNumber } from '../is';

const milliseconds = {
  seconds: 1000,
  minutes: 60_000,
  hours: 3_600_000,
  days: 86_400_000,
  weeks: 604_800_000, // 7 days
  years: 31_557_600_000, // 365.25 days - with leap year
} as const;

const ms = (props: Partial<Record<keyof typeof milliseconds, number>>): number =>
  (Object.entries(props) as Array<[keyof typeof milliseconds, number | undefined]>).reduce(
    (value, [key, factor]) => (isNumber(factor) ? value + factor * milliseconds[key] : value),
    0,
  );

export { ms };
