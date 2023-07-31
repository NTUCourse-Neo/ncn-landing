import {
  Flex,
  FlexProps,
  Stat,
  StatLabel,
  StatNumber,
  Text,
  HStack,
  Tag,
  Divider,
  VStack,
  Tabs,
  TabPanels,
  TabList,
  Icon,
  TabPanel,
  Tab,
} from "@chakra-ui/react";
import { Course } from "@/types/course";
import { useTranslation } from "react-i18next";
import { CourseInfoMap } from "@/data/CourseMapping";
import parseCourseSchedule from "@/utils/parseCourseSchedule";
import { FaCircle } from "react-icons/fa";
import {
  EnrollStatusPanel,
  GradePolicyPanel,
  PTTExamPanel,
  PTTReviewPanel,
  SignUpPanel,
  SyllabusPanel,
} from "@/components/Panels";

function Block({ children, ...restProps }: FlexProps) {
  return (
    <Flex
      flexGrow={1}
      sx={{
        backgroundColor: "gray.700",
        m: 3,
        borderRadius: "md",
        p: 4,
        flexDirection: "column",
      }}
      {...restProps}
    >
      {children}
    </Flex>
  );
}

export default function DashboardPanel({
  course,
}: {
  readonly course: Course;
}) {
  const { t, i18n } = useTranslation();
  const course_codes_1 = [
    {
      title: t("features.courseInfoRow.courseSerial"),
      value: course.serial,
    },
    { title: t("features.courseInfoRow.courseCode"), value: course.code },
    {
      title: t("features.courseInfoRow.courseIdentifier"),
      value: course.identifier,
    },
    {
      title: t("features.courseInfoRow.courseClass"),
      value: course?.class ?? "無",
    },
  ];
  const course_codes_2 = [
    { title: t("features.courseInfoRow.slot"), value: course.slot },
    {
      title: t("features.courseInfoRow.requirement"),
      value:
        CourseInfoMap.requirement.map[i18n.language === "en" ? "en" : "zh"][
          course.requirement
        ],
    },
    { title: t("features.courseInfoRow.semester"), value: course.semester },
    {
      title: t("features.courseInfoRow.language"),
      value:
        CourseInfoMap.language.map[i18n.language === "en" ? "en" : "zh"][
          course.language
        ],
    },
  ];

  const headingColor = "#E2E8F0";

  return (
    <Flex
      justifyContent={"center"}
      flexDirection={{ base: "column", lg: "row" }}
    >
      <Flex flexDirection={"column"} w={{ base: "100%", lg: "33%" }}>
        <Block>
          <Text fontSize="2xl" fontWeight="800" color={headingColor}>
            {t("features.dashboard.basicInfo")}
          </Text>
          <Flex
            mt="4"
            justifyContent="start"
            alignItems="start"
            flexWrap="wrap"
          >
            <Flex mr="8" flexDirection="column" flexWrap="wrap">
              {course_codes_1.map((item, index) => {
                if (!item.value) {
                  return null;
                }
                return (
                  <Stat key={"code_stats_1" + index}>
                    <StatLabel color={"gray.500"} mb="-1">
                      {item.title}
                    </StatLabel>
                    <StatNumber mb="2">{item.value}</StatNumber>
                  </Stat>
                );
              })}
            </Flex>
            <Flex mr="4" flexDirection="column" flexWrap="wrap">
              {course_codes_2.map((item, index) => {
                if (!item.value) {
                  return null;
                }
                return (
                  <Stat key={"code_stats_2" + index}>
                    <StatLabel color={"gray.500"} mb="-1">
                      {item.title}
                    </StatLabel>
                    <StatNumber mb="2">{item.value}</StatNumber>
                  </Stat>
                );
              })}
            </Flex>
            <Flex flexDirection="column" flexWrap="wrap">
              <Stat>
                <StatLabel color={"gray.500"} mb="-1">
                  {t("features.courseInfoRow.departments")}
                </StatLabel>
                <StatNumber mb="1">
                  <HStack spacing="2">
                    {course.departments.length === 0 ? (
                      <Tag colorScheme="blackAlpha" size="lg">
                        {t("features.courseInfoRow.unknown")}
                      </Tag>
                    ) : (
                      <Flex flexDirection={"row"} flexWrap="wrap">
                        {course.departments.map((department, index) => {
                          return (
                            <Tag
                              key={"department_" + index}
                              colorScheme="blue"
                              size="lg"
                              m={1}
                            >
                              {department.name_full}
                            </Tag>
                          );
                        })}
                      </Flex>
                    )}
                  </HStack>
                </StatNumber>
              </Stat>
              <Stat>
                <StatLabel color={"gray.500"} mb="-1">
                  {t("features.courseInfoRow.credits")}
                </StatLabel>
                <StatNumber mb="2">{course.credits}</StatNumber>
              </Stat>
              {course.enroll_method ? (
                <Stat>
                  <StatLabel color={"gray.500"} mb="-1">
                    {t("features.courseInfoRow.enrollMethod")}
                  </StatLabel>
                  <StatNumber mb="2">
                    <HStack spacing="2">
                      <Tag
                        colorScheme="blue"
                        size="md"
                        fontWeight="800"
                        fontSize="lg"
                      >
                        {course.enroll_method}
                      </Tag>
                      <Text>
                        {
                          CourseInfoMap.enroll_method.map[
                            i18n.language === "en" ? "en" : "zh"
                          ][course.enroll_method]
                        }
                      </Text>
                    </HStack>
                  </StatNumber>
                </Stat>
              ) : null}
              <Stat>
                <StatLabel color={"gray.500"} mb="-1">
                  {t("features.courseInfoRow.lectureDept")}
                </StatLabel>
                <StatNumber>{course.provider.toUpperCase()}</StatNumber>
              </Stat>
            </Flex>
          </Flex>
          <Divider mt="4" mb="4" borderColor="gray.300" />
          {course?.limitation && (
            <VStack mt="2" align="start">
              <Text
                fontSize="md"
                textAlign="center"
                color={headingColor}
                fontWeight="700"
              >
                {t("features.courseInfoRow.limitation")}
              </Text>
              <Text fontSize="sm" color={"#CBD5E0"} align="start">
                {course.limitation}
              </Text>
            </VStack>
          )}
          {course?.note && (
            <VStack mt="2" align="start">
              <Text
                fontSize="md"
                textAlign="center"
                color={headingColor}
                fontWeight="700"
              >
                {t("features.courseInfoRow.note")}
              </Text>
              <Text fontSize="sm" color={"#CBD5E0"} align="start">
                {course.note}
              </Text>
            </VStack>
          )}
          <Divider mt="4" mb="4" borderColor="gray.300" />
          <Text mb="2" fontSize="lg" color={headingColor} fontWeight="700">
            {t("features.courseInfoRow.timeLoc")}
          </Text>
          <Text fontSize="sm" color={"#CBD5E0"}>
            {parseCourseSchedule(course, i18n.language) ?? "無資訊"}
          </Text>
        </Block>
        <Block>
          <Tabs variant="soft-rounded" size="sm">
            <HStack spacing="4">
              <Text fontSize="2xl" fontWeight="800" color={headingColor}>
                {t("features.dashboard.enrollStatus")}
              </Text>
              <TabList>
                <Tab>
                  <Icon mr="2" w="2" as={FaCircle} color="red.600" />
                  {t("features.dashboard.realtime")}
                </Tab>
              </TabList>
            </HStack>
            <TabPanels my="3">
              <TabPanel>
                <EnrollStatusPanel courseSerial={course.serial} />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Block>
      </Flex>
      <Flex flexDirection={"column"} w={{ base: "100%", lg: "43%" }}>
        <Block>
          <Text fontSize="2xl" fontWeight="800" color={headingColor}>
            {t("features.dashboard.signUpInfo")}
          </Text>
          <SignUpPanel courseId={course.id} />
        </Block>
        <Block>
          <Text fontSize="2xl" fontWeight="800" color={headingColor}>
            {t("features.dashboard.review")}
          </Text>
          <PTTReviewPanel />
        </Block>
        <Block>
          <Text fontSize="2xl" fontWeight="800" color={headingColor}>
            {t("features.dashboard.pastExam")}
          </Text>
          <PTTExamPanel />
        </Block>
      </Flex>
      <Flex flexDirection={"column"} w={{ base: "100%", lg: "33%" }}>
        <Block>
          <Text fontSize="2xl" fontWeight="800" color={headingColor}>
            {t("features.dashboard.syllabus")}
          </Text>
          <SyllabusPanel />
        </Block>
        <Block>
          <Text fontSize="2xl" fontWeight="800" color={headingColor}>
            {t("features.dashboard.gradingPolicy")}
          </Text>
          <GradePolicyPanel />
        </Block>
      </Flex>
    </Flex>
  );
}
