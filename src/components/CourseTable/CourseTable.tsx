import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Flex,
  Center,
  Box,
  Text,
  Skeleton,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import * as React from "react";
import { useCallback } from "react";
import CourseTableCard from "@/components/CourseTable/CourseTableCard/index";
import { weekdayMap, Weekday } from "@/data/CourseMapping";
import { hashToColorHex } from "@/utils/colorAgent";
import { hoverCourseState } from "@/utils/hoverCourse";
import { useSnapshot } from "valtio";
import { TimeMap } from "@/utils/parseCourseTime";
import { Course, Interval } from "@/types/course";
import { intervals } from "@/data/constant";
import { useTranslation } from "react-i18next";

function HoverCourseIndicator({
  hoveredCourse,
}: {
  readonly hoveredCourse: Course;
}) {
  const course = hoveredCourse;
  return (
    <div
      style={{
        width: "100%",
        boxSizing: "border-box",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button
        borderRadius="lg"
        boxShadow="lg"
        w="100%"
        p={2}
        h="3vh"
        border="2px"
        borderColor={hashToColorHex(course.id, 0.8)}
        borderStyle="dashed"
      >
        <Text fontSize="xs" width={"100%"} align="center" noOfLines={1}>
          {course.name}
        </Text>
      </Button>
    </div>
  );
}

function CourseTableContainer(props: {
  readonly courses: {
    readonly [key: string]: Course;
  };
  readonly loading?: boolean;
  readonly courseTimeMap: TimeMap;
}) {
  const { i18n } = useTranslation();
  const { courses, loading = false, courseTimeMap } = props;
  const days: Weekday[] = ["1", "2", "3", "4", "5"];
  const intervalTextColor = useColorModeValue("gray.300", "gray.600");

  const { hoveredCourse, hoveredCourseTimeMap } = useSnapshot(hoverCourseState);
  const renderIntervalContent = useCallback(
    (days: Weekday[], interval: Interval, i: number) => {
      const fullWidth = days.length === 1;
      return days.map((day, j) => {
        const intervalCourseIds = courseTimeMap?.[day]?.[interval];
        const intervalHoveredCourseIds =
          hoveredCourse && hoveredCourseTimeMap?.[day]?.[interval];
        // hover course has been in courseTable already, show solid border in this case
        const isOverlapped = intervalCourseIds
          ? (courseTimeMap?.[day]?.[interval] ?? []).includes(
              hoveredCourseTimeMap?.[day]?.[interval]?.[0] ?? ""
            )
          : false;
        if (loading) {
          return (
            <Td key={`${day}-${i}-${j}`}>
              <Skeleton borderRadius="lg" speed={1 + (i + j) * 0.1}>
                <Box h="12" w="4vw" />
              </Skeleton>
            </Td>
          );
        }
        // no courses & hoverCourse
        if (!intervalCourseIds && !intervalHoveredCourseIds) {
          return (
            <Td key={`${day}-${i}-${j}`}>
              <Flex
                w={
                  fullWidth ? "100%" : { base: "70px", md: "110px", lg: "4vw" }
                }
                h="4vh"
                mb="1"
                justifyContent="center"
                alignItems="center"
              >
                <Text color={intervalTextColor} fontSize="5xl" fontWeight="700">
                  {" "}
                  {interval}
                </Text>
              </Flex>
            </Td>
          );
        }
        return (
          <Td key={`${day}-${i}-${j}`}>
            <Flex
              w={fullWidth ? "100%" : { base: "70px", md: "110px", lg: "4vw" }}
              minH="4vh"
              mb="1"
              direction={"column"}
              justifyContent="center"
              alignItems="center"
            >
              {intervalHoveredCourseIds && !isOverlapped ? (
                <HoverCourseIndicator hoveredCourse={hoveredCourse} />
              ) : null}
              {intervalCourseIds ? (
                <CourseTableCard
                  courseInitialOrder={courseTimeMap?.[day]?.[interval] ?? []}
                  courseData={courses}
                  interval={interval}
                  day={weekdayMap[i18n.language == "zh" ? "zh" : "en"][day]}
                  hoverId={
                    isOverlapped
                      ? hoveredCourseTimeMap?.[day]?.[interval]?.[0] ?? ""
                      : ""
                  }
                />
              ) : null}
            </Flex>
          </Td>
        );
      });
    },
    [
      courseTimeMap,
      courses,
      hoveredCourse,
      hoveredCourseTimeMap,
      loading,
      intervalTextColor,
      i18n.language,
    ]
  );

  return (
    <Table variant="simple" colorScheme="blue" borderRadius="lg" w="100%">
      <Thead>
        <Tr>
          {days.map((day, j) => {
            return (
              <Th key={`${day}-${j}`}>
                <Center w={{ base: "70px", md: "110px", lg: "4vw" }}>
                  {weekdayMap[i18n.language == "zh" ? "zh" : "en"][day]}
                </Center>
              </Th>
            );
          })}
        </Tr>
      </Thead>
      <Tbody>
        {intervals.map((interval, i) => {
          return (
            <Tr key={`${interval}-${i}`}>
              {renderIntervalContent(days, interval, i)}
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  );
}

export default CourseTableContainer;
