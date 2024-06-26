import React, { useState, useMemo, useEffect } from "react";
import {
  Flex,
  Text,
  Button,
  IconButton,
  Badge,
  Tag,
  ScaleFade,
  TagLeftIcon,
  Spacer,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaTrash, FaExclamationTriangle } from "react-icons/fa";
import { FadeLoader } from "react-spinners";
import { MdDragHandle } from "react-icons/md";
import { hashToColorHex } from "@/utils/colorAgent";
import { Course } from "@/types/course";
import {
  useSortable,
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import {
  restrictToVerticalAxis,
  restrictToParentElement,
} from "@dnd-kit/modifiers";
import { convertCourseArrayToObject } from "@/components/demo/CourseTable";
import { useSelectedCourses } from "@/components/SelectedCourseProvider";
import { useTranslation } from "react-i18next";
interface SortableElementProps {
  readonly course: Course;
  readonly courseIdx: number;
  readonly handleDelete: (courseId: string) => void;
  readonly prepareToRemoveCourseId: string[];
}

function SortableRowElement(props: SortableElementProps) {
  const { course, courseIdx, prepareToRemoveCourseId, handleDelete } = props;
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: course.id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    position: "relative",
    zIndex: isDragging ? 1000 : undefined,
  };
  const textColor = useColorModeValue("heading.light", "heading.dark");
  const removeColor = useColorModeValue("red.700", "red.300");
  return (
    <Flex
      flexDirection="row"
      justifyContent="start"
      alignItems="center"
      h="100%"
      w="100%"
      py="2"
      px="2"
      bg={useColorModeValue(
        hashToColorHex(course.id, 0.92, 0.3),
        hashToColorHex(course.id, 0.2, 0.2)
      )}
      my="1"
      borderRadius="lg"
      zIndex="1000"
      sx={style}
      ref={setNodeRef}
      {...attributes}
    >
      <Flex
        flexDirection="row"
        justifyContent="start"
        alignItems="center"
        h="100%"
        w="100%"
      >
        <div
          style={{
            touchAction: "manipulation",
          }}
          {...listeners}
        >
          <MdDragHandle cursor="row-resize" size="20" color="gray" />
        </div>
        <Text fontWeight="800" color={textColor} mx="2" fontSize="xl">
          {courseIdx + 1}
        </Text>
        <Flex
          direction={{ base: "column", md: "row" }}
          alignItems={{ base: "start", md: "center" }}
          ml={{ base: 2, md: 0 }}
          flexShrink={{ lg: 1 }}
        >
          <Badge
            colorScheme="blue"
            size={useBreakpointValue({ base: "md", md: "lg" }) ?? "md"}
            mx={{ base: 0, md: 2 }}
          >
            {course.serial}
          </Badge>
          <Text
            as={prepareToRemoveCourseId.includes(course.id) ? "del" : undefined}
            color={
              prepareToRemoveCourseId.includes(course.id)
                ? removeColor
                : textColor
            }
            fontSize={{ base: "lg", md: "md" }}
            fontWeight="bold"
            noOfLines={1}
            maxW={{ base: "100%", lg: "16vw" }}
          >
            {course.name}
          </Text>
        </Flex>
      </Flex>
      <Flex
        ml={{ base: 0, md: 4 }}
        flexDirection="row"
        justifyContent="end"
        alignItems="center"
      >
        <IconButton
          aria-label="Delete"
          variant={
            prepareToRemoveCourseId.includes(course.id) ? "solid" : "outline"
          }
          icon={<FaTrash />}
          size="sm"
          colorScheme="red"
          onClick={() => {
            handleDelete(course.id);
          }}
        />
      </Flex>
    </Flex>
  );
}

function CourseListContainer(props: { readonly loading?: boolean }) {
  const { t, i18n } = useTranslation();
  const { selectedCourses, setSelectedCourses } = useSelectedCourses();
  const { loading = false } = props;
  const [courseListForSort, setCourseListForSort] = useState<string[]>(
    selectedCourses.map((c, i) => c.id)
  );
  const [prepareToRemoveCourseId, setPrepareToRemoveCourseId] = useState<
    string[]
  >([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setCourseListForSort(selectedCourses.map((c, i) => c.id));
  }, [selectedCourses]);

  const courses: Record<string, Course> = useMemo(
    () => convertCourseArrayToObject(selectedCourses),
    [selectedCourses]
  );

  const handleDelete = (courseId: string) => {
    if (prepareToRemoveCourseId.includes(courseId)) {
      setPrepareToRemoveCourseId(
        prepareToRemoveCourseId.filter((id) => id !== courseId)
      );
    } else {
      setPrepareToRemoveCourseId([...prepareToRemoveCourseId, courseId]);
    }
  };

  const handleSaveCourseTable = async () => {
    setIsLoading(true);
    setTimeout(() => {
      const newSelectedCourses = courseListForSort
        .map((cid, i) => courses[cid])
        .filter((c) => !prepareToRemoveCourseId.includes(c.id));
      setPrepareToRemoveCourseId([]);
      setSelectedCourses(newSelectedCourses);
      setIsLoading(false);
    }, 500);
  };
  const isEdited = useMemo(() => {
    return (
      !courseListForSort.every(
        (course, index) => course === selectedCourses?.[index]?.id
      ) || prepareToRemoveCourseId.length > 0
    );
  }, [courseListForSort, prepareToRemoveCourseId, selectedCourses]);

  const sensors = useSensors(
    useSensor(MouseSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  if (loading) {
    return (
      <Flex h="60vh" w="100%" justify="center" align="center">
        <FadeLoader
          margin="8px"
          radius="5px"
          height="20px"
          width="8px"
          color="teal"
        />
      </Flex>
    );
  }

  return (
    <>
      <Flex
        flexDirection="row"
        justifyContent="start"
        alignItems="center"
        w="100%"
        py="2"
        px="2"
      >
        <Text fontSize="md" fontWeight="bold" color="gray.600">
          {t("features.courseTable.alreadyAdded")} {courseListForSort.length}{" "}
          {t("features.courseTable.course")}
          {i18n.language === "en" && courseListForSort.length > 1 && "s"}
        </Text>
        <Spacer />
        <ScaleFade initialScale={0.9} in={isEdited}>
          <Tag colorScheme="yellow" variant="solid">
            <TagLeftIcon boxSize="12px" as={FaExclamationTriangle} />
            {t("features.courseTable.changesNotSaved")}
          </Tag>
        </ScaleFade>
        <Button
          ml="2"
          size="sm"
          variant="ghost"
          colorScheme="blue"
          disabled={!isEdited}
          onClick={() => {
            setCourseListForSort(selectedCourses.map((c, i) => c.id));
            setPrepareToRemoveCourseId([]);
          }}
        >
          {t("features.courseTable.reset")}
        </Button>
        <Button
          ml="2"
          size="sm"
          variant="solid"
          colorScheme="teal"
          disabled={!isEdited}
          onClick={() => {
            handleSaveCourseTable();
          }}
          isLoading={isLoading}
        >
          {t("features.courseTable.save")}
        </Button>
      </Flex>
      <div>
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          modifiers={[restrictToParentElement, restrictToVerticalAxis]}
          onDragEnd={(event) => {
            const { active, over } = event;
            if (active.id !== over?.id) {
              setCourseListForSort((courseListForSort) => {
                const oldIndex = courseListForSort.indexOf(String(active.id));
                const newIndex = courseListForSort.indexOf(String(over?.id));

                return arrayMove(courseListForSort, oldIndex, newIndex);
              });
            }
          }}
        >
          <SortableContext
            items={courseListForSort}
            strategy={verticalListSortingStrategy}
          >
            {courseListForSort.map((key, index) => {
              const course = courses?.[key];
              if (!course) {
                return null;
              }
              return (
                <SortableRowElement
                  key={key}
                  course={course}
                  courseIdx={index}
                  handleDelete={handleDelete}
                  prepareToRemoveCourseId={prepareToRemoveCourseId}
                />
              );
            })}
          </SortableContext>
        </DndContext>
      </div>
    </>
  );
}

export default CourseListContainer;
