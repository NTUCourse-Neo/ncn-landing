import {
  Flex,
  Text,
  Stat,
  StatLabel,
  StatNumber,
  HStack,
  Icon,
  Box,
  VStack,
  StatHelpText,
  Divider,
  Spacer,
  FlexProps,
  Badge,
  IconButton,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { PieChart } from "react-minimal-pie-chart";
import {
  FaCircle,
  FaExclamationTriangle,
  FaQuestionCircle,
  FaChevronRight,
  FaChevronLeft,
} from "react-icons/fa";
import { IoMdOpen } from "react-icons/io";
import SignUpCard from "@/components/SignUpCard";
import SignUpSubmitForm from "@/components/SignUpSubmitForm";
import {
  CourseEnrollStatus,
  CourseSyllabus,
  syllabusFields,
  syllabusFieldSource as syllabusTitle,
} from "@/types/course";
import type { PTTData, SignUpPost } from "@/types/course";
import { hashToColorHexWithHue } from "@/utils/colorAgent";
import { useTranslation } from "react-i18next";

export interface PTTContentRowContainerProps extends FlexProps {
  readonly info: PTTData;
}
function PTTContentRowContainer(props: PTTContentRowContainerProps) {
  const { info, ...restProps } = props;
  const rowColor = "#2B6CB030";
  const textColor = "#CBD5E0";
  return (
    <Flex w="100%" mb="0" overflow="auto" flexDirection="column" {...restProps}>
      <VStack>
        {info.map((data) => (
          <Flex
            key={data.url}
            as="button"
            px="2"
            my="1"
            w="100%"
            h="10"
            bg={rowColor}
            justifyContent="start"
            alignItems="center"
            borderRadius="lg"
            onClick={() => {
              window.open(data.url, "_blank");
            }}
          >
            <Badge key={data.url + "Badge"} mr="1" colorScheme="blue">
              {data.date}
            </Badge>
            <Text
              key={data.url + "Title"}
              w="50%"
              mr="2"
              fontSize="md"
              color={textColor}
              fontWeight="500"
              textAlign="start"
              noOfLines={1}
            >
              {data.title}
            </Text>
            <Text
              key={data.url + "Author"}
              w="20%"
              as="i"
              fontSize="xs"
              color="gray.400"
              fontWeight="500"
              textAlign="start"
              noOfLines={1}
            >
              - {data.author}
            </Text>
            <Spacer />
            <Icon
              key={data.url + "Icon"}
              as={IoMdOpen}
              color="gray.400"
              size="20px"
            />
          </Flex>
        ))}
      </VStack>
    </Flex>
  );
}

interface LoadingPanelProps extends FlexProps {
  readonly title: string;
}
function LoadingPanel({ title, ...restProps }: LoadingPanelProps) {
  return (
    <Flex
      w="100%"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      {...restProps}
    >
      <VStack>
        <Text
          fontSize="lg"
          fontWeight="800"
          color="gray.500"
          textAlign="center"
        >
          {title}
        </Text>
      </VStack>
    </Flex>
  );
}

interface PanelPlaceholderProps extends FlexProps {
  readonly title: string;
  readonly isEmpty?: boolean;
}
function PanelPlaceholder({
  title = "暫無資訊",
  isEmpty = true,
  ...restProps
}: PanelPlaceholderProps) {
  return (
    <Flex
      w="100%"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      {...restProps}
    >
      <Icon
        as={isEmpty ? FaQuestionCircle : FaExclamationTriangle}
        boxSize="32px"
        color="gray.500"
      />
      <Text
        mt="2"
        fontSize="lg"
        fontWeight="800"
        color="gray.500"
        textAlign="center"
      >
        {title}
      </Text>
    </Flex>
  );
}

interface PanelWrapperProps {
  readonly children: JSX.Element;
  readonly isLoading?: boolean;
  readonly loadingFallback?: JSX.Element;
}
function PanelWrapper({
  isLoading = false,
  loadingFallback = <LoadingPanel title="載入中..." height="100%" />,
  children,
}: PanelWrapperProps): JSX.Element {
  if (isLoading) {
    return loadingFallback;
  }
  return <>{children}</>;
}

export function SignUpPanel({ courseId }: { readonly courseId: string }) {
  const { i18n } = useTranslation();
  const [signUpPostData, setSignUpPostData] = useState<SignUpPost[]>([
    {
      content: {
        amount: 10,
        comment:
          i18n.language === "en"
            ? "Randomly select student ID cards in the second week"
            : "第二週抽學生證加簽",
        rule: i18n.language === "en" ? "Random selection" : "抽籤",
        when: i18n.language === "en" ? "2nd week" : "第二週",
        _id: "0",
      },
      course_id: courseId,
      is_owner: false,
      self_vote_status: 0,
      create_ts: Date.now(),
      type: "???",
      upvotes: 10,
      downvotes: 5,
      user_type: "teacher",
      _id: "0",
    },
  ]);
  const [signUpCardIdx, setSignUpCardIdx] = useState(0);
  const textColor = "#CBD5E0";

  return (
    <PanelWrapper
      loadingFallback={
        <LoadingPanel title="努力跑加簽大地中..." height="100%" />
      }
    >
      {!signUpPostData ? (
        <PanelPlaceholder title="無加簽相關資訊" height="100%" />
      ) : signUpPostData.length === 0 ? (
        <Flex
          w="100%"
          h="100%"
          mt="4"
          flexDirection="column"
          justifyContent="center"
          alignItems={{ base: "start", lg: "center" }}
        >
          <PanelPlaceholder title="無加簽相關資訊" h="100%" pt="0" />
          <HStack w="100%" pr="8" mt="8" justify="end">
            <SignUpSubmitForm
              courseId={courseId}
              haveSubmitted={signUpPostData.some((obj) => obj.is_owner)}
              setSignUpPostData={setSignUpPostData}
            />
          </HStack>
        </Flex>
      ) : (
        <Flex
          w="100%"
          h="100%"
          mt="4"
          flexDirection="column"
          justifyContent="center"
          alignItems={{ base: "start", lg: "center" }}
        >
          <SignUpCard
            setSignUpPostData={setSignUpPostData}
            setSignUpCardIdx={setSignUpCardIdx}
            post={signUpPostData[signUpCardIdx]}
          />
          <HStack w="100%" pr="8" mt="8">
            <HStack>
              <IconButton
                aria-label="prev"
                size="md"
                variant="ghost"
                icon={<FaChevronLeft />}
                onClick={() =>
                  setSignUpCardIdx(
                    signUpCardIdx === 0
                      ? signUpPostData.length - 1
                      : signUpCardIdx - 1
                  )
                }
              />
              <Text
                fontSize="sm"
                fontWeight="800"
                color={textColor}
                textAlign="center"
              >
                {signUpCardIdx + 1}/{signUpPostData.length}
              </Text>
              <IconButton
                aria-label="next"
                size="md"
                variant="ghost"
                icon={<FaChevronRight />}
                onClick={() =>
                  setSignUpCardIdx((signUpCardIdx + 1) % signUpPostData.length)
                }
              />
            </HStack>
            <Spacer />
            <SignUpSubmitForm
              setSignUpPostData={setSignUpPostData}
              haveSubmitted={signUpPostData.some((obj) => obj.is_owner)}
              courseId={courseId}
            />
          </HStack>
        </Flex>
      )}
    </PanelWrapper>
  );
}

export function EnrollStatusPanel({
  courseSerial,
}: {
  readonly courseSerial: string | null;
}) {
  const courseEnrollStatus: CourseEnrollStatus = {
    enrolled: "30",
    enrolled_other: "10",
    registered: "100",
    remain: "80",
  };
  const { t } = useTranslation();
  return (
    <PanelWrapper
      loadingFallback={
        <LoadingPanel title="努力取得資訊中..." height="100%" pt={8} />
      }
    >
      <Flex
        w="100%"
        mt="4"
        flexDirection="row"
        justifyContent="center"
        alignItems={{ base: "start", lg: "center" }}
        flexWrap="wrap"
      >
        <Stat>
          <StatLabel>{t("features.dashboard.enrolled")}</StatLabel>
          <StatNumber>{courseEnrollStatus.enrolled}</StatNumber>
          <StatHelpText>{t("features.dashboard.people")}</StatHelpText>
        </Stat>
        {/* <Stat>
          <StatLabel>選上外系</StatLabel>
          <StatNumber>{courseEnrollStatus.enrolled_other}</StatNumber>
          <StatHelpText>{t("features.dashboard.people")}</StatHelpText>
        </Stat> */}
        <Stat>
          <StatLabel>{t("features.dashboard.registered")}</StatLabel>
          <StatNumber>{courseEnrollStatus.registered}</StatNumber>
          <StatHelpText>{t("features.dashboard.people")}</StatHelpText>
        </Stat>
        <Stat>
          <StatLabel>{t("features.dashboard.remain")}</StatLabel>
          <StatNumber>{courseEnrollStatus.remain}</StatNumber>
          <StatHelpText>{t("features.courseInfoRow.slot")}</StatHelpText>
        </Stat>
      </Flex>
    </PanelWrapper>
  );
}

export function PTTReviewPanel() {
  const pttReviewData: PTTData | null = [
    {
      author: "fpsamuraig",
      title: "[評價] 105-2 黃鐘揚 Ric's Web Programming",
      date: "2017-07-02",
      url: "https://www.ptt.cc/bbs/NTUcourse/M.1498960083.A.05D.html",
    },
    {
      author: "hahaismela",
      url: "https://www.ptt.cc/bbs/NTUcourse/M.1630048724.A.1EE.html",
      date: "2021-08-27",
      title: "[評價] 109-2 黃鐘揚 網路服務程式設計",
    },
  ];
  return (
    <PanelWrapper
      loadingFallback={
        <LoadingPanel title="努力爬文中..." height="100%" pt={8} />
      }
    >
      {!pttReviewData || !Array.isArray(pttReviewData) ? (
        <PanelPlaceholder title="無相關貼文資訊" h="100%" pt="8" />
      ) : (
        <PTTContentRowContainer info={pttReviewData} height="150px" />
      )}
    </PanelWrapper>
  );
}

export function PTTExamPanel() {
  const { i18n } = useTranslation();
  const isEnglish = i18n.language === "en";
  const pttExamData: PTTData | null = null;
  return (
    <PanelWrapper
      loadingFallback={
        <LoadingPanel title="努力爬文中..." height="100%" pt={8} />
      }
    >
      {!pttExamData || !Array.isArray(pttExamData) ? (
        <PanelPlaceholder
          title={isEnglish ? "Can't find any information" : "無相關貼文資訊"}
          h="100%"
          pt="8"
        />
      ) : (
        <PTTContentRowContainer info={pttExamData} height="150px" />
      )}
    </PanelWrapper>
  );
}

export function SyllabusPanel() {
  const { t, i18n } = useTranslation();
  const isEnglish = i18n.language === "en";
  const syllabusData: Pick<CourseSyllabus, "syllabus"> = {
    syllabus: {
      intro: t("features.dashboard.fakeSyllabus.intro"),
      objective: t("features.dashboard.fakeSyllabus.objective"),
      requirement: isEnglish ? "None" : "無",
      office_hour: "Mon 10:00-12:00",
      material: isEnglish ? "None" : "無",
      specify: isEnglish
        ? "The maximum capacity is 120 people."
        : "總人數上限：120人 ",
    },
  };
  const headingColor = "#E2E8F0";
  const textColor = "#CBD5E0";

  return (
    <PanelWrapper>
      {!syllabusData || !syllabusData?.syllabus ? (
        <PanelPlaceholder title="無課程大綱資訊" h="100%" pt="8" />
      ) : (
        <Flex
          w="100%"
          my="4"
          flexDirection="column"
          justifyContent="start"
          alignItems="start"
          wordBreak="break-all"
          overflow="auto"
        >
          {syllabusFields.map((key) => {
            const line = syllabusData.syllabus[key].split("\n");
            const content = line.map((item, index) => {
              return (
                <Text
                  key={syllabusTitle[key] + "content" + index}
                  mb="0.5"
                  fontSize="md"
                  fontWeight="400"
                  color={textColor}
                >
                  {item.trim()}
                </Text>
              );
            });

            return (
              <React.Fragment key={syllabusTitle[key][isEnglish ? "en" : "zh"]}>
                <Text
                  flexBasis="20%"
                  mb="1"
                  fontSize="lg"
                  fontWeight="600"
                  color={headingColor}
                >
                  {syllabusTitle[key][isEnglish ? "en" : "zh"]}
                </Text>
                {syllabusData.syllabus[key] !== "" ? (
                  content
                ) : (
                  <Text
                    key={syllabusTitle[key] + "content"}
                    fontSize="md"
                    fontWeight="400"
                    color="gray.500"
                  >
                    None
                  </Text>
                )}
                <Divider my="4" />
              </React.Fragment>
            );
          })}
        </Flex>
      )}
    </PanelWrapper>
  );
}

export function GradePolicyPanel() {
  const syllabusData: Pick<CourseSyllabus, "grade"> = {
    grade: [
      {
        comment: "",
        title: "Final Project",
        value: 50,
      },
      {
        comment: "",
        title: "Quiz",
        value: 30,
      },
      {
        comment: "",
        title: "Attendance",
        value: 20,
      },
    ].map((g) => ({
      ...g,
      color: hashToColorHexWithHue(g.title, {
        min: 180,
        max: 200,
      }),
    })),
  };
  const headingColor = "#E2E8F0";
  const pieChartData = syllabusData?.grade.filter((g) => g.color !== null) as {
    title?: string | number;
    color: string;
    value: number;
    key?: string | number;
    [key: string]: unknown;
  }[]; // Type def: https://github.com/toomuchdesign/react-minimal-pie-chart/blob/master/src/commonTypes.ts
  return (
    <PanelWrapper
      loadingFallback={
        <LoadingPanel title="查看配分中..." height="100%" pt={8} />
      }
    >
      {!syllabusData || !syllabusData.grade ? (
        <PanelPlaceholder title="無評分相關資訊" h="100%" pt="8" />
      ) : (
        <Flex
          my="4"
          flexDirection={{ base: "column", lg: "row" }}
          justifyContent="space-evenly"
          alignItems="center"
        >
          <Box w="200px" h="200px">
            <PieChart
              lineWidth={50}
              label={({ dataEntry }) => dataEntry.value + "%"}
              labelPosition={75}
              data={pieChartData}
              labelStyle={() => ({
                fill: "white",
                fontSize: "10px",
                fontFamily: "sans-serif",
              })}
            />
          </Box>
          <VStack mt={{ base: 4, lg: 0 }} align="start">
            {syllabusData.grade.map((item) => {
              return (
                <HStack justify="start" cursor="pointer" key={`${item.title}`}>
                  <Icon
                    as={FaCircle}
                    size="20px"
                    color={item.color ?? "current"}
                  />
                  <Text
                    fontSize="lg"
                    fontWeight="800"
                    color={item.color ?? "current"}
                  >
                    {item.value}%
                  </Text>
                  <Text fontSize="md" fontWeight="600" color={headingColor}>
                    {item.title}
                  </Text>
                </HStack>
              );
            })}
          </VStack>
        </Flex>
      )}
    </PanelWrapper>
  );
}
