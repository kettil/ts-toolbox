export type Weekday = 'friday' | 'monday' | 'saturday' | 'sunday' | 'thursday' | 'tuesday' | 'wednesday';

const weekdays: Record<Weekday, number> = {
  sunday: 0,
  monday: 1,
  tuesday: 2,
  wednesday: 3,
  thursday: 4,
  friday: 5,
  saturday: 6,
};

const isWeekday = (day: Weekday, date: Date): boolean => date.getDay() === weekdays[day];

export default isWeekday;
