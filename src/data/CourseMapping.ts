import {
  FaUserGraduate,
  FaCheckSquare,
  FaPuzzlePiece,
  FaLanguage,
  FaFileImport,
} from "react-icons/fa";
import { IconType } from "react-icons/lib";

interface CourseInfoBaseType {
  name: {
    en: string;
    zh: string;
  };
  logo: IconType;
  color: string;
}

interface CourseInfoType<T> extends CourseInfoBaseType {
  map: {
    en: Record<string, T>;
    zh: Record<string, T>;
  };
}

export interface CourseInfoTranslateMap {
  requirement: CourseInfoType<string>;
  slot: CourseInfoBaseType;
  areas: CourseInfoType<{
    id: string;
    code: string;
    full_name: string;
  }>;
  enroll_method: CourseInfoType<string>;
  language: CourseInfoType<string>;
}

const CourseInfoMap: CourseInfoTranslateMap = {
  requirement: {
    name: {
      en: "Requirement",
      zh: "課程必選修",
    },
    logo: FaCheckSquare,
    color: "blue",
    map: {
      en: {
        preassign: "Preassign",
        required: "Required",
        elective: "Elective",
        other: "Other",
      },
      zh: {
        preassign: "必帶",
        required: "必修",
        elective: "選修",
        other: "其他",
      },
    },
  },
  slot: {
    name: {
      en: "Slot",
      zh: "修課人數上限",
    },
    logo: FaUserGraduate,
    color: "blue",
  },
  areas: {
    name: {
      en: "Areas",
      zh: "課程領域",
    },
    logo: FaPuzzlePiece,
    color: "blue",
    map: {
      en: {},
      zh: {
        chinese: {
          id: "chinese",
          code: "共",
          full_name: "國文領域",
        },
        english: {
          id: "english",
          code: "共",
          full_name: "英文領域",
        },
        english_adv: {
          id: "english_adv",
          code: "共",
          full_name: "進階英文",
        },
        foreign: {
          id: "foreign",
          code: "共",
          full_name: "外文領域",
        },
        foreign_like: {
          id: "foreign_like",
          code: "共",
          full_name: "可充當外文領域",
        },
        shared_selective: {
          id: "shared_selective",
          code: "共",
          full_name: "共同選修課程",
        },
        g_ax: {
          id: "g_ax",
          code: "AX",
          full_name: "不分領域通識課程",
        },
        g_a1: {
          id: "g_a1",
          code: "A1",
          full_name: "A1 文學與藝術領域",
        },
        g_a2: {
          id: "g_a2",
          code: "A2",
          full_name: "A2 歷史思維領域",
        },
        g_a3: {
          id: "g_a3",
          code: "A3",
          full_name: "A3 世界文明領域",
        },
        g_a4: {
          id: "g_a4",
          code: "A4",
          full_name: "A4 哲學與道德思考領域",
        },
        g_a5: {
          id: "g_a5",
          code: "A5",
          full_name: "A5 公民意識與社會分析領域",
        },
        g_a6: {
          id: "g_a6",
          code: "A6",
          full_name: "A6 量化分析與數學素養領域",
        },
        g_a7: {
          id: "g_a7",
          code: "A7",
          full_name: "A7 物質科學領域",
        },
        g_a8: {
          id: "g_a8",
          code: "A8",
          full_name: "A8 生命科學領域",
        },
        freshman: {
          id: "freshman",
          code: "新",
          full_name: "新生專題/新生講座課程",
        },
        basic: {
          id: "basic",
          code: "基",
          full_name: "基本能力課程",
        },
        military: {
          id: "millitary",
          code: "軍",
          full_name: "軍訓課程",
        },
        pe_1: {
          id: "pe_1",
          code: "體",
          full_name: "健康體適能",
        },
        pe_2: {
          id: "pe_2",
          code: "體",
          full_name: "專項運動學群",
        },
        pe_3: {
          id: "pe_3",
          code: "體",
          full_name: "選修體育",
        },
        pe_4: {
          id: "pe_4",
          code: "體",
          full_name: "校隊班",
        },
        pe_5: {
          id: "pe_5",
          code: "體",
          full_name: "進修學士班",
        },
        frequent: {
          id: "frequent",
          code: "密",
          full_name: "密集課程",
        },
      },
    },
  },
  enroll_method: {
    name: {
      en: "Enroll Method",
      zh: "加簽方式",
    },
    logo: FaFileImport,
    color: "blue",
    map: {
      zh: {
        1: "無限制",
        2: "授權碼",
        3: "登記分發",
      },
      en: {
        1: "No Limit",
        2: "Auth. Code",
        3: "Registration",
      },
    },
  },
  language: {
    name: {
      en: "Language",
      zh: "授課語言",
    },
    logo: FaLanguage,
    color: "blue",
    map: {
      zh: {
        zh_TW: "中文",
        en_US: "英文",
      },
      en: {
        zh_TW: "Traditional Chinese",
        en_US: "English",
      },
    },
  },
};

export type Weekday = "1" | "2" | "3" | "4" | "5" | "6" | "7";
const weekdayMap: { en: Record<Weekday, string>; zh: Record<Weekday, string> } =
  {
    en: {
      1: "Mon",
      2: "Tue",
      3: "Wed",
      4: "Thu",
      5: "Fri",
      6: "Sat",
      7: "Sun",
    },
    zh: {
      1: "一",
      2: "二",
      3: "三",
      4: "四",
      5: "五",
      6: "六",
      7: "日",
    },
  };

const socialUserTypeMap = {
  student: { zh: "學生", en: "Student" },
  teacher: { zh: "教師", en: "Teacher" },
  course_teacher: { zh: "此課程講師", en: "Course Teacher" },
  course_assistant: { zh: "此課程助教", en: "Course Assistant" },
  others: { zh: "其他", en: "Others" },
};

export type SocialUser = keyof typeof socialUserTypeMap;
const socialUserTypes = Object.keys(socialUserTypeMap) as SocialUser[];

export { CourseInfoMap, weekdayMap, socialUserTypes, socialUserTypeMap };
