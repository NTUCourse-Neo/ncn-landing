import _ from "lodash";
import type { Course } from "@/types/course";
import { weekdayMap as numberToDay } from "@/data/CourseMapping";

export default function parseCourseSchedule(
  course: Course,
  language: string
): string {
  const schedules = course.schedules;
  const scheduleGroupByDayAndLocation = _.groupBy(schedules, (schedule) => {
    return `${numberToDay[language == "zh" ? "zh" : "en"][schedule.weekday]}@${
      schedule.location
    }`;
  });

  return Object.entries(scheduleGroupByDayAndLocation)
    .map(([key, scheduleGroup]) => {
      if (key === "") {
        return null;
      }
      const [weekday, location] = key.split("@");
      return `${weekday} ${scheduleGroup
        .map((s) => s?.interval ?? null)
        .filter((x) => x !== null)
        .join(", ")} (${location})`;
    })
    .filter((x) => x !== null)
    .join(", ");
}
