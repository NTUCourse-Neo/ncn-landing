import CourseInfoRow from "@/components/CourseInfoRow";
import mockCourses from "@/data/mockCourses";
import { Flex, Accordion, Spacer, Box } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import CourseTableContainer from "@/components/CourseTable/CourseTable";
import { useMemo } from "react";
import { useSelectedCourses } from "@/components/SelectedCourseProvider";
import { Course } from "@/types/course";
import { parseCoursesToTimeMap, TimeMap } from "@/utils/parseCourseTime";
import { setHoveredCourseData } from "@/utils/hoverCourse";
import { ModalWrapper } from "@/components/demo/GlobalPriority";

export const courseTableScrollBarCss = {
  "&::-webkit-scrollbar": {
    w: "2",
    h: "2",
  },
  "&::-webkit-scrollbar-track": {
    w: "6",
    h: "6",
  },
  "&::-webkit-scrollbar-thumb": {
    borderRadius: "10",
    bg: `gray.300`,
  },
};

export function convertCourseArrayToObject(array: Course[]): {
  [key: string]: Course;
} {
  const courseDict: {
    [key: string]: Course;
  } = {};
  array.forEach((item: Course) => {
    const courseKey = item.id;
    courseDict[courseKey] = item;
  });
  return courseDict;
}

export default function CourseTablePanel() {
  const { t, i18n } = useTranslation();
  const { selectedCourses, setSelectedCourses } = useSelectedCourses();

  const courses: Record<string, Course> = useMemo(
    () => convertCourseArrayToObject(selectedCourses),
    [selectedCourses]
  );
  const courseTimeMap: TimeMap = useMemo(() => {
    return parseCoursesToTimeMap(selectedCourses);
  }, [selectedCourses]);

  return (
    <Flex py={10} flexDirection={{ base: "column", lg: "row" }}>
      <Flex
        display={{ base: "inline-block", lg: "none" }}
        w="100%"
        justifyContent={"center"}
        mb={8}
      >
        <ModalWrapper title="Course Table">
          <Box
            overflow="auto"
            w="100%"
            __css={courseTableScrollBarCss}
            h="90vh"
          >
            <Flex
              flexDirection="row"
              justifyContent="start"
              p={4}
              bg={"#131720"}
              borderRadius={"8px"}
            >
              <Flex
                flexDirection="row"
                justifyContent="start"
                alignItems="center"
                overflowX={"auto"}
                __css={courseTableScrollBarCss}
              >
                <CourseTableContainer
                  courseTimeMap={courseTimeMap}
                  courses={courses}
                />
              </Flex>
            </Flex>
          </Box>
        </ModalWrapper>
      </Flex>
      <Accordion allowToggle gap={2} w={{ base: "100%", lg: "50%" }}>
        {mockCourses[i18n.language == "zh" ? "zh" : "en"].map((c) => (
          <CourseInfoRow
            key={c.id}
            courseInfo={c}
            selected={
              selectedCourses.find((course) => course.id === c.id)
                ? true
                : false
            }
            onClickAddBtn={() => {
              if (selectedCourses.find((course) => course.id === c.id)) {
                setSelectedCourses(
                  selectedCourses.filter((course) => course.id !== c.id)
                );
              } else {
                setSelectedCourses([...selectedCourses, c]);
              }
            }}
            onMouseEnter={() => {
              setHoveredCourseData(c);
            }}
            onMouseLeave={() => {
              setHoveredCourseData(null);
            }}
          />
        ))}
      </Accordion>
      <Spacer />
      <Box
        display={{ base: "none", lg: "inline-block" }}
        overflow="auto"
        w="45%"
        __css={courseTableScrollBarCss}
        h="70vh"
      >
        <Flex
          flexDirection="row"
          justifyContent="start"
          alignItems="center"
          p={4}
          bg={"#131720"}
          borderRadius={"8px"}
        >
          <Flex
            flexDirection="row"
            justifyContent="start"
            alignItems="center"
            overflowX={"auto"}
            __css={courseTableScrollBarCss}
          >
            <CourseTableContainer
              courseTimeMap={courseTimeMap}
              courses={courses}
            />
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
}
