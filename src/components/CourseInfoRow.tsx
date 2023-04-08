import {
  Box,
  Flex,
  Heading,
  Badge,
  Spacer,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Tag,
  TagLeftIcon,
  TagLabel,
  Button,
  Tooltip,
  useBreakpointValue,
  Text,
  HStack,
  ButtonGroup,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";
import { CourseInfoMap } from "@/data/CourseMapping";
import { hashToColorHex } from "@/utils/colorAgent";
import openPage from "@/utils/openPage";
import parseCourseSchedule from "@/utils/parseCourseSchedule";
import type { Course } from "@/types/course";
import { DisplayTagName } from "@/components/demo/DisplayTags";
import { useTranslation } from "react-i18next";
import i18n from "@/i18n";

function DeptBadge({ course }: { readonly course: Course }) {
  const { t, i18n } = useTranslation();
  if (course.departments.length === 0) {
    return null;
  }
  const dept_str = course.departments.map((d) => d.name_full).join(", ");
  const isMultipleDepts = course.departments.length > 1;
  return (
    <Tooltip
      hasArrow
      placement="top"
      label={dept_str}
      bg="gray.600"
      color="white"
    >
      <Badge
        colorScheme={isMultipleDepts ? "teal" : "blue"}
        variant="solid"
        maxWidth={"125px"}
        noOfLines={1}
      >
        <Text
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {isMultipleDepts
            ? t("features.courseInfoRow.multipleDepts")
            : course?.departments?.[0]?.name_full ?? ""}
        </Text>
      </Badge>
    </Tooltip>
  );
}

function DrawerDataTag({
  fieldName,
  label,
}: {
  readonly fieldName: string;
  readonly label: string;
}) {
  const textColor = useColorModeValue("text.light", "text.dark");
  if (label === "") {
    return null;
  }
  return (
    <Flex
      flexDirection="row"
      alignItems="center"
      justifyContent="start"
      mr="4"
      minW="10vw"
    >
      <Badge variant="solid" colorScheme="gray">
        {fieldName}
      </Badge>
      <Heading as="h3" color={textColor} fontSize="sm" ml="4px">
        {label}
      </Heading>
    </Flex>
  );
}

function CourseDrawerContainer({
  courseInfo,
}: {
  readonly courseInfo: Course;
}) {
  const { t } = useTranslation();
  return (
    <Flex
      px="1"
      flexDirection="column"
      width="100%"
      alignItems="start"
      justifyContent="space-between"
    >
      <Flex
        ml="2px"
        flexDirection="row"
        alignItems="center"
        justifyContent="start"
        flexWrap="wrap"
        css={{ gap: ".5rem" }}
      >
        <DrawerDataTag
          fieldName={t("features.courseInfoRow.courseIdentifier")}
          label={courseInfo.identifier}
        />
        <DrawerDataTag
          fieldName={t("features.courseInfoRow.courseCode")}
          label={courseInfo.code}
        />
        <DrawerDataTag
          fieldName={t("features.courseInfoRow.courseClass")}
          label={courseInfo?.class ?? t("features.courseInfoRow.unknown")}
        />
        <DrawerDataTag
          fieldName={t("features.courseInfoRow.enrollMethod")}
          label={
            CourseInfoMap.enroll_method.map[
              i18n.language == "zh" ? "zh" : "en"
            ][courseInfo.enroll_method]
          }
        />
        <DrawerDataTag
          fieldName={t("features.courseInfoRow.language")}
          label={
            CourseInfoMap.language.map[i18n.language == "zh" ? "zh" : "en"][
              courseInfo.language
            ]
          }
        />
        <DrawerDataTag
          fieldName={t("features.courseInfoRow.lectureDept")}
          label={courseInfo.provider.toUpperCase()}
        />
      </Flex>
      <Spacer my="2" />
      <Flex
        w="100%"
        flexDirection="row"
        alignItems="start"
        justifyContent="start"
        borderRadius="md"
        border="2px"
        borderColor={useColorModeValue("gray.200", "gray.700")}
        flexWrap="wrap"
        css={{ gap: "4px" }}
      >
        <Flex
          w={{ base: "100%", md: "30%" }}
          flexDirection="column"
          alignItems="start"
          justifyContent="start"
          p="2"
        >
          <Heading
            as="h3"
            color={useColorModeValue("heading.light", "heading.dark")}
            fontSize="lg"
            ml="4px"
            mb="1"
          >
            {t("features.courseInfoRow.limitation")}
          </Heading>
          <Text
            fontSize="sm"
            color={useColorModeValue("text.light", "text.dark")}
            mx="4px"
          >
            {courseInfo?.limitation ?? t("features.courseInfoRow.none")}
          </Text>
        </Flex>
        <Flex
          w={{ base: "100%", md: "60%" }}
          flexDirection="column"
          alignItems="start"
          justifyContent="start"
          p="2"
        >
          <Heading
            as="h3"
            color={useColorModeValue("heading.light", "heading.dark")}
            fontSize="lg"
            ml="4px"
            mb="1"
          >
            {t("features.courseInfoRow.note")}
          </Heading>
          <Text
            fontSize="sm"
            color={useColorModeValue("text.light", "text.dark")}
            mx="4px"
          >
            {courseInfo?.note || t("features.courseInfoRow.none")}
          </Text>
        </Flex>
      </Flex>
      <Spacer my="2" />
      <Flex
        w="100%"
        flexDirection={{ base: "column", md: "row" }}
        alignItems={{ base: "start", md: "center" }}
        justifyContent={{ base: "start", md: "space-between" }}
        flexWrap="wrap"
        css={{ gap: "2px" }}
      >
        <ButtonGroup size="sm" isAttached variant="outline" colorScheme="blue">
          {courseInfo?.cool_url ? (
            <Button
              size="sm"
              mr="-px"
              onClick={() => {
                if (courseInfo?.cool_url) {
                  openPage(courseInfo.cool_url);
                }
              }}
            >
              {"NTU COOL"}
            </Button>
          ) : null}
        </ButtonGroup>
        <ButtonGroup>
          <Button
            variant="ghost"
            colorScheme="blue"
            leftIcon={<FaPlus />}
            size="sm"
            onClick={() => {}}
          >
            {t("features.courseInfoRow.addCourse")}
          </Button>
        </ButtonGroup>
      </Flex>
    </Flex>
  );
}

export interface CourseInfoRowProps {
  readonly courseInfo: Course;
  readonly selected: boolean;
  readonly displayTags?: DisplayTagName[];
}
function CourseInfoRow({
  courseInfo,
  selected,
  displayTags = [],
}: CourseInfoRowProps) {
  const rowColor = useColorModeValue("card.light", "card.dark");
  const textColor = useColorModeValue("text.light", "text.dark");
  const headingColor = useColorModeValue("heading.light", "heading.dark");
  const tooltipBg = useColorModeValue("gray.600", "gray.300");
  const tooltipText = useColorModeValue("white", "black");
  const selectedColor = useColorModeValue(
    hashToColorHex(courseInfo.id, 0.92, 0.3),
    hashToColorHex(courseInfo.id, 0.2, 0.1)
  );
  const { t } = useTranslation();

  return (
    <AccordionItem
      bg={selected ? selectedColor : rowColor}
      borderRadius="md"
      transition="all ease-in-out 500ms"
      border="1px solid #808080"
      mb={1}
    >
      <Flex
        alignItems="center"
        justifyContent="start"
        flexDirection="row"
        w="100%"
        pr="2"
        pl="2"
        py="1"
      >
        <AccordionButton
          flexDirection={{ base: "column", md: "row" }}
          alignItems="start"
        >
          <Flex
            flexDirection={{ base: "column", md: "row" }}
            alignItems={{ base: "start", md: "center" }}
            justifyContent="start"
            flexWrap="wrap"
            css={{ gap: "8px" }}
          >
            <Flex
              w="8vw"
              alignItems="center"
              justifyContent="start"
              display={{ base: "none", md: "flex" }}
            >
              <Tooltip
                hasArrow
                placement="top"
                label={t("features.courseInfoRow.courseSerial")}
                bg={tooltipBg}
                color={tooltipText}
              >
                <Badge variant="outline" mr="4px">
                  {courseInfo.serial}
                </Badge>
              </Tooltip>
              <DeptBadge course={courseInfo} />
            </Flex>
            <HStack>
              <Heading
                as="h3"
                size={useBreakpointValue({ base: "sm", md: "md" }) ?? "sm"}
                color={headingColor}
                textAlign="start"
              >
                {courseInfo.name}
              </Heading>
              <Heading
                as="h3"
                size={useBreakpointValue({ base: "xs", md: "sm" }) ?? "xs"}
                color={textColor}
                fontWeight="500"
                textAlign="start"
                minW={{ base: "42px", md: "auto" }}
                display={{ base: "inline-block", md: "none" }}
              >
                {courseInfo.teacher}
              </Heading>
            </HStack>
            <HStack>
              <Tooltip
                hasArrow
                placement="top"
                label={t("features.courseInfoRow.courseSerial")}
                bg={tooltipBg}
                color={tooltipText}
              >
                <Badge
                  variant="outline"
                  display={{ base: "inline-block", md: "none" }}
                >
                  {courseInfo.serial
                    ? courseInfo.serial
                    : t("features.courseInfoRow.noSerial")}
                </Badge>
              </Tooltip>
              <Tooltip
                hasArrow
                placement="top"
                label={
                  courseInfo.credits + " " + t("features.courseInfoRow.credits")
                }
                bg={tooltipBg}
                color={tooltipText}
              >
                <Badge variant="outline" mx={{ base: 0, md: 4 }}>
                  {courseInfo.credits}
                </Badge>
              </Tooltip>
              <Flex display={{ base: "inline-block", md: "none" }}>
                <DeptBadge course={courseInfo} />
              </Flex>
            </HStack>
            <Heading
              as="h3"
              size="sm"
              color={textColor}
              fontWeight="500"
              display={{ base: "none", md: "flex" }}
            >
              {courseInfo.teacher}
            </Heading>
            <Tooltip
              hasArrow
              placement="top"
              label={parseCourseSchedule(courseInfo, i18n.language) ?? null}
              bg={tooltipBg}
              color={tooltipText}
            >
              <Badge
                variant="outline"
                ml={{ base: 0, md: 4 }}
                px="1"
                size="lg"
                noOfLines={1}
                maxWidth="150px"
              >
                <Text
                  sx={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {parseCourseSchedule(courseInfo, i18n.language)
                    ? parseCourseSchedule(courseInfo, i18n.language)
                    : t("features.courseInfoRow.noTime")}
                </Text>
              </Badge>
            </Tooltip>
          </Flex>
          <Spacer />
          <Flex
            alignItems="start"
            justifyContent="start"
            mt={{ base: 4, md: 0 }}
            flexWrap="wrap"
            css={{ gap: "2px" }}
          >
            {displayTags.map((tag, index) => {
              if (tag === "areas") {
                let display_str = "";
                let tooltip_str = "";
                if (courseInfo.areas.length === 0) {
                  display_str = t("features.courseInfoRow.none");
                  tooltip_str =
                    CourseInfoMap[tag].name +
                    ": " +
                    t("features.courseInfoRow.none");
                } else {
                  display_str = t("features.courseInfoRow.multipleDepts");
                  tooltip_str = courseInfo.areas
                    .map((area) => area.area.name ?? null)
                    .filter((x) => x !== null)
                    .join(", ");
                }
                return (
                  <Tooltip
                    hasArrow
                    placement="top"
                    label={tooltip_str}
                    bg={tooltipBg}
                    color={tooltipText}
                    key={index}
                  >
                    <Tag
                      mx="2px"
                      variant="subtle"
                      colorScheme={CourseInfoMap[tag].color}
                      hidden={!courseInfo[tag]}
                    >
                      <TagLeftIcon
                        boxSize="12px"
                        as={CourseInfoMap[tag].logo}
                      />
                      <TagLabel>{display_str}</TagLabel>
                    </Tag>
                  </Tooltip>
                );
              }
              const tagLabel =
                (tag === "slot"
                  ? courseInfo?.[tag]
                  : CourseInfoMap?.[tag]?.map?.[
                      i18n.language == "zh" ? "zh" : "en"
                    ][courseInfo?.[tag]] ?? courseInfo?.[tag]) ??
                t("features.courseInfoRow.unknown");
              return (
                <Tooltip
                  hasArrow
                  placement="top"
                  label={
                    CourseInfoMap[tag].name[i18n.language == "zh" ? "zh" : "en"]
                  }
                  bg={tooltipBg}
                  color={tooltipText}
                  key={index}
                >
                  <Tag
                    mx="2px"
                    variant="subtle"
                    colorScheme={CourseInfoMap[tag].color}
                    hidden={!courseInfo[tag]}
                  >
                    <TagLeftIcon boxSize="12px" as={CourseInfoMap[tag].logo} />
                    <TagLabel>{tagLabel}</TagLabel>
                  </Tag>
                </Tooltip>
              );
            })}
          </Flex>
        </AccordionButton>
        <Flex
          alignItems="center"
          justifyContent="end"
          flexDirection={{ base: "column", md: "row" }}
        >
          {/* <Button
            size="sm"
            colorScheme="blue"
            variant="ghost"
            onClick={() => {}}
          >
            <HStack>
              <Icon as={FaInfoCircle} boxSize="4" />
              <Text display={{ base: "none", md: "inline-block" }}>詳細</Text>
            </HStack>
          </Button>
          <Button
            size="sm"
            ml={{ base: 0, md: "10px" }}
            variant="ghost"
            colorScheme={"red"}
            onClick={() => {}}
          >
            <Box>
              {<Icon as={isFavorite ? FaHeart : FaRegHeart} boxSize="4" />}
            </Box>
          </Button> */}
          <Button
            size="sm"
            ml={{ base: 0, md: "10px" }}
            colorScheme={selected ? "red" : "blue"}
            onClick={() => {}}
          >
            <Box
              transform={selected ? "rotate(45deg)" : ""}
              transition="all ease-in-out 200ms"
            >
              <FaPlus />
            </Box>
          </Button>
        </Flex>
      </Flex>
      <AccordionPanel>
        <CourseDrawerContainer courseInfo={courseInfo} />
      </AccordionPanel>
    </AccordionItem>
  );
}
export default CourseInfoRow;
