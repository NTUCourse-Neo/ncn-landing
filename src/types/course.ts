import { SocialUser } from "@/data/CourseMapping";

export interface Course {
  id: string;
  serial: string | null;
  code: string;
  identifier: string;
  name: string;
  semester: string;
  teacher: string | null;
  limitation: string | null;
  note: string | null;
  cool_url: string | null;
  credits: number | null;
  can_be_selective: boolean;
  is_half_year: boolean;
  slot: number;
  enroll_method: number;
  intensive_weeks: readonly number[];
  departments_raw: readonly string[];
  class: string | null;
  syllabus_url: string | null;
  requirement: "preassign" | "required" | "elective" | "other";
  language: "zh_TW" | "en_US";
  provider: "ntu" | "ntust" | "ntnu" | "other";
  areas: readonly Area[];
  departments: readonly Department[];
  schedules: readonly Schedule[];
}

export interface Area {
  area_id: string;
  area: {
    name: string;
  };
}

export interface Department {
  id: string;
  college_id: string | null;
  name_alt: string | null;
  name_full: string;
  name_short: string | null;
}

export interface CourseSpecialty {
  id: string;
  name: string;
}

export type Interval =
  | "0"
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "A"
  | "B"
  | "C"
  | "D";

export interface Schedule {
  weekday: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  interval: Interval;
  location: string;
}

export type PTTData = PTTArticle[];
interface PTTArticle {
  aid?: string;
  author: string;
  date: string;
  title: string;
  url: string;
}
export const syllabusFieldSource = {
  intro: { zh: "概述", en: "Introduction" },
  objective: { zh: "目標", en: "Objective" },
  requirement: { zh: "要求", en: "Requirement" },
  office_hour: { zh: "Office Hour", en: "Office Hour" },
  material: { zh: "參考書目", en: "Reference" },
  specify: { zh: "指定閱讀", en: "Reading Materials" },
};
export type SyllabusFieldName = keyof typeof syllabusFieldSource;
export const syllabusFields = Object.keys(
  syllabusFieldSource
) as SyllabusFieldName[];
export type CourseSyllabus = {
  grade: {
    color: string | null;
    comment: string;
    title: string;
    value: number;
  }[];
  syllabus: Record<SyllabusFieldName, string>;
};
export type CourseEnrollStatus = {
  enrolled: string;
  enrolled_other: string;
  fetch_ts?: number;
  registered: string;
  remain: string;
};

export interface SignUpPost {
  content: {
    amount: number;
    comment: string;
    rule: string;
    when: string;
    _id: string;
  };
  course_id: string;
  create_ts: number;
  is_owner: boolean;
  self_vote_status: number;
  type: string;
  upvotes: number;
  downvotes: number;
  user_type: SocialUser;
  _id: string;
}
