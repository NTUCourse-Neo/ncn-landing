import type { Course, Interval } from "types/course";
import type { Weekday } from "data/CourseMapping";

export type SingleDayTimeMap = Partial<Record<Interval, string[]>>;
export type TimeMap = Partial<Record<Weekday, SingleDayTimeMap>>;

// parse course object to timeMap object
const parseCourseTime = (course: Course, initTimeMap: TimeMap) => {
  const timeMap = Object.assign({}, initTimeMap);
  course.schedules.forEach((schedule) => {
    const weekday = schedule.weekday;
    const interval = schedule.interval;
    if (!timeMap?.[weekday]) {
      timeMap[weekday] = {};
    }
    if (!timeMap?.[weekday]?.[interval]) {
      (timeMap[weekday] as { [key: string]: string[] })[interval] = [];
    }
    (
      (timeMap[weekday] as { [key: string]: string[] })[interval] as string[]
    ).push(course.id);
  });
  return timeMap;
};

const parseCoursesToTimeMap = (courses: Course[]): TimeMap => {
  const parsed: string[] = [];
  let timeMap: TimeMap = {};
  courses.forEach((c) => {
    if (parsed.includes(c.id)) {
      return;
    }
    timeMap = parseCourseTime(c, timeMap);
    parsed.push(c.id);
  });
  return timeMap;
};

export { parseCourseTime, parseCoursesToTimeMap };
