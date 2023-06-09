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

function StatBox({
  label,
  value,
}: {
  readonly label: string;
  readonly value: string;
}) {
  return (
    <Stat>
      <StatLabel
        sx={{
          fontSize: "sm",
          color: "#CBD5E090",
        }}
      >
        {label}
      </StatLabel>
      <StatNumber
        sx={{
          fontSize: "md",
        }}
      >
        {value}
      </StatNumber>
    </Stat>
  );
}

export default function DashboardPanel({
  course,
}: {
  readonly course: Course;
}) {
  const { t, i18n } = useTranslation();
  const course_codes_1 = [
    { title: "流水號", value: course.serial },
    { title: "課號", value: course.code },
    { title: "課程識別碼", value: course.identifier },
    { title: "班次", value: course?.class ?? "無" },
  ];
  const course_codes_2 = [
    { title: "人數上限", value: course.slot },
    {
      title: "必選修",
      value:
        CourseInfoMap.requirement.map[i18n.language === "en" ? "en" : "zh"][
          course.requirement
        ],
    },
    { title: "開課學期", value: course.semester },
    {
      title: "授課語言",
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
      <Flex flexDirection={"column"} w={{ base: "100%", lg: "44%" }}>
        <Block>
          <Text fontSize="2xl" fontWeight="800" color={headingColor}>
            詳細資料
          </Text>
          <Flex
            mt="4"
            justifyContent="start"
            alignItems="start"
            flexWrap="wrap"
          >
            <Flex mr="4" flexDirection="column" flexWrap="wrap">
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
                  系所
                </StatLabel>
                <StatNumber mb="1">
                  <HStack spacing="2">
                    {course.departments.length === 0 ? (
                      <Tag colorScheme="blackAlpha" size="lg">
                        無資訊
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
                  學分
                </StatLabel>
                <StatNumber mb="2">{course.credits}</StatNumber>
              </Stat>
              {course.enroll_method ? (
                <Stat>
                  <StatLabel color={"gray.500"} mb="-1">
                    加簽方式
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
                  開課單位
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
                修課限制
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
                備註
              </Text>
              <Text fontSize="sm" color={"#CBD5E0"} align="start">
                {course.note}
              </Text>
            </VStack>
          )}
          <Divider mt="4" mb="4" borderColor="gray.300" />
          <Text mb="2" fontSize="lg" color={headingColor} fontWeight="700">
            節次資訊
          </Text>
          <Text fontSize="sm" color={"#CBD5E0"}>
            {parseCourseSchedule(course, i18n.language) ?? "無資訊"}
          </Text>
        </Block>
        <Block>
          <Tabs variant="soft-rounded" size="sm">
            <HStack spacing="4">
              <Text fontSize="2xl" fontWeight="800" color={headingColor}>
                選課資訊
              </Text>
              <TabList>
                <Tab>
                  <Icon mr="2" w="2" as={FaCircle} color="red.600" />
                  即時
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
      <Flex flexDirection={"column"} w={{ base: "100%", lg: "33%" }}>
        <Block>
          <Text fontSize="2xl" fontWeight="800" color={headingColor}>
            加簽資訊
          </Text>
          <SignUpPanel />
        </Block>
        <Block>
          <Text fontSize="2xl" fontWeight="800" color={headingColor}>
            評價
          </Text>
          <PTTReviewPanel />
        </Block>
        <Block>
          <Text fontSize="2xl" fontWeight="800" color={headingColor}>
            考古題資訊
          </Text>
          <PTTExamPanel />
        </Block>
      </Flex>
      <Flex flexDirection={"column"} w={{ base: "100%", lg: "33%" }}>
        <Block>
          <Text fontSize="2xl" fontWeight="800" color={headingColor}>
            課程大綱
          </Text>
          <SyllabusPanel />
        </Block>
        <Block>
          <Text fontSize="2xl" fontWeight="800" color={headingColor}>
            評分方式
          </Text>
          <GradePolicyPanel />
        </Block>
      </Flex>
    </Flex>
  );
}
