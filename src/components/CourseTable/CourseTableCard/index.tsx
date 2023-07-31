import React, { useState, useMemo } from "react";
import {
  Flex,
  Text,
  Button,
  useDisclosure,
  Tooltip,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  Badge,
  PopoverFooter,
  Spacer,
  Tag,
  TagLeftIcon,
  ScaleFade,
  useColorModeValue,
} from "@chakra-ui/react";
import { hashToColorHex } from "@/utils/colorAgent";
import { FaExclamationTriangle } from "react-icons/fa";
import SortablePopover from "@/components/CourseTable/CourseTableCard/SortablePopover";
import { Interval, Course } from "@/types/course";
import { useSelectedCourses } from "@/components/SelectedCourseProvider";
import { convertCourseArrayToObject } from "@/components/demo/CourseTable";
import { useTranslation } from "react-i18next";

function CourseBox(props: {
  readonly courseId: string;
  readonly courseData: {
    readonly [key: string]: Course;
  };
  readonly hoverId: string;
}) {
  const { courseId, courseData, hoverId } = props;
  const course = courseData?.[courseId];
  const bgColor = useColorModeValue(
    hashToColorHex(course.id, 0.8, 0.6),
    hashToColorHex(course.id, 0.2, 0.3)
  );
  if (!course) {
    return null;
  }

  return (
    <Tooltip label={course.name} placement="top" hasArrow>
      <Button
        bg={bgColor}
        borderRadius="md"
        boxShadow="lg"
        mb="1"
        p="2"
        w="100%"
        h="3vh"
        border={"2px"}
        borderColor={
          hoverId === courseId ? hashToColorHex(course.id, 0.8) : "transparent"
        }
      >
        <Text fontSize="xs" noOfLines={1}>
          {` ${course.name} `}
        </Text>
      </Button>
    </Tooltip>
  );
}

function CourseTableCard(props: {
  readonly courseInitialOrder: string[];
  readonly courseData: { readonly [key: string]: Course };
  readonly interval: Interval;
  readonly day: string;
  readonly hoverId: string;
}) {
  const {
    courseInitialOrder: courseOrder, // initial order
    courseData,
    day,
    interval,
    hoverId = "",
  } = props;
  const { t, i18n } = useTranslation();
  const { selectedCourses, setSelectedCourses } = useSelectedCourses();
  const { isOpen, onOpen, onClose } = useDisclosure();
  // temp state (buffer), used for decide the NEW course order / dispatch to server, when press "save"
  const [courseList, setCourseList] = useState<string[]>([]);
  const [prepareToRemoveCourseId, setPrepareToRemoveCourseId] = useState<
    string[]
  >([]);

  const handleDelete = (courseId: string) => {
    if (prepareToRemoveCourseId.includes(courseId)) {
      setPrepareToRemoveCourseId(
        prepareToRemoveCourseId.filter((id) => id !== courseId)
      );
    } else {
      setPrepareToRemoveCourseId([...prepareToRemoveCourseId, courseId]);
    }
  };

  const courses: Record<string, Course> = useMemo(
    () => convertCourseArrayToObject(selectedCourses),
    [selectedCourses]
  );

  const isEdited = useMemo(() => {
    // return true if the popup data is different from the original data.
    return (
      !courseOrder.every((course, index) => course === courseList[index]) ||
      prepareToRemoveCourseId.length > 0
    );
  }, [courseOrder, courseList, prepareToRemoveCourseId]);

  const saveChanges = async () => {
    const indices: number[] = [];
    const courseIdSet = new Set(courseList);
    selectedCourses.forEach((course, index) => {
      if (courseIdSet.has(course.id)) {
        indices.push(index);
      }
    });
    const newSelectedCourses = [...selectedCourses];
    indices.forEach((targetPosition, i) => {
      const targetCourseId = courseList[i];
      const course = courses[targetCourseId];
      newSelectedCourses[targetPosition] = course;
    });
    setSelectedCourses(
      newSelectedCourses.filter(
        (c, i) => !prepareToRemoveCourseId.includes(c.id)
      )
    );
    leavePopover();
  };

  const leavePopover = () => {
    onClose();
    // set buffer states to initial state
    // use Timeout to avoid the popover close weird animation
    setTimeout(() => {
      setPrepareToRemoveCourseId([]);
      setCourseList([]);
    }, 100);
  };

  return (
    <>
      <Popover
        onOpen={onOpen}
        onClose={() => {
          leavePopover();
        }}
        isOpen={isOpen}
        closeOnBlur={false}
        placement="auto"
        flip
      >
        <PopoverTrigger>
          <Flex
            w={"100%"}
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            onClick={() => {
              setCourseList(courseOrder);
              setPrepareToRemoveCourseId([]);
            }}
          >
            {courseOrder.map((courseId, index) => (
              <React.Fragment key={index}>
                <CourseBox
                  courseId={courseId}
                  courseData={courseData}
                  hoverId={hoverId}
                />
              </React.Fragment>
            ))}
          </Flex>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader>
            <Flex
              flexDirection="row"
              alignItems="center"
              justifyContent="start"
              mb="2"
            >
              {t("features.courseTable.intervalInfo")}
              <Badge key={day} ml="2" size="sm">
                {i18n.language === "zh" && "週"}
                {day}
              </Badge>
              <Badge key={interval} ml="2" size="sm">
                {i18n.language === "zh" && "第"}
                {interval}
                {i18n.language === "en"
                  ? parseInt(interval) === 1
                    ? "st"
                    : parseInt(interval) === 2
                    ? "nd"
                    : parseInt(interval) === 3
                    ? "rd"
                    : "th"
                  : null}
                {t("features.courseTable.interval")}
              </Badge>
            </Flex>
          </PopoverHeader>
          <PopoverBody>
            <Flex flexDirection="column" justifyContent="center">
              <SortablePopover
                courseData={courseData}
                courseList={courseList}
                prepareToRemoveCourseId={prepareToRemoveCourseId}
                setCourseList={setCourseList}
                handlePrepareToDelete={handleDelete}
              />
            </Flex>
          </PopoverBody>
          <PopoverFooter>
            <Flex justifyContent="end" alignItems="center">
              <ScaleFade initialScale={0.9} in={isEdited}>
                <Tag colorScheme="yellow" variant="solid">
                  <TagLeftIcon boxSize="12px" as={FaExclamationTriangle} />
                  {t("features.courseTable.changesNotSaved")}
                </Tag>
              </ScaleFade>
              <Spacer />
              <Button
                colorScheme="gray"
                variant="ghost"
                onClick={() => {
                  leavePopover();
                }}
              >
                {t("features.courseTable.cancel")}
              </Button>
              <Button
                colorScheme="teal"
                onClick={() => {
                  saveChanges();
                }}
                disabled={!isEdited}
              >
                {t("features.courseTable.save")}
              </Button>
            </Flex>
          </PopoverFooter>
        </PopoverContent>
      </Popover>
    </>
  );
}
export default CourseTableCard;
