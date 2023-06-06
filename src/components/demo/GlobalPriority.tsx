import CourseInfoRow from "@/components/CourseInfoRow";
import mockCourses from "@/data/mockCourses";
import { Flex, Accordion, Spacer, Box } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { setHoveredCourseData } from "@/utils/hoverCourse";
import { courseTableScrollBarCss } from "@/components/demo/CourseTable";
import CourseListContainer from "@/components/CourseTable/CourseList";
import { useSelectedCourses } from "@/components/SelectedCourseProvider";

export default function GlobalPriorityPanel() {
  const { t, i18n } = useTranslation();
  const { selectedCourses, setSelectedCourses } = useSelectedCourses();

  return (
    <Flex py={10}>
      <Accordion allowToggle gap={2} w="50%">
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
      <Box overflow="auto" w="45%" __css={courseTableScrollBarCss} h="70vh">
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
            w="100%"
            minH="50vh"
          >
            <CourseListContainer />
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
}
