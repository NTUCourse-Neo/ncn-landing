import { MdDragHandle } from "react-icons/md";
import {
  Flex,
  Text,
  Badge,
  Spacer,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { hashToColorHex } from "@/utils/colorAgent";
import { FaTrashAlt } from "react-icons/fa";
import React from "react";
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

interface SortableElementProps {
  readonly course: Course;
  readonly prepareToRemoveCourseId: string[];
  readonly handlePrepareToDelete: (courseId: string) => void;
}

function SortableElement(props: SortableElementProps) {
  const { course, prepareToRemoveCourseId, handlePrepareToDelete } = props;
  const badgeColor = useColorModeValue(
    hashToColorHex(course.id ?? "", 0.9, 0.8),
    hashToColorHex(course.id ?? "", 0.3, 0.3)
  );
  const textColor = useColorModeValue("gray.500", "gray.200");
  const removeColor = useColorModeValue("red.700", "red.300");
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
  return (
    <Flex
      alignItems="center"
      my="1"
      bg={useColorModeValue("white", "gray.700")}
      borderRadius="lg"
      sx={style}
      ref={setNodeRef}
      {...attributes}
    >
      <div
        style={{
          touchAction: "manipulation",
        }}
        {...listeners}
      >
        <MdDragHandle cursor="row-resize" size="20" color="gray" />
      </div>
      <Badge ml="2" mr="1" variant="solid" bg={badgeColor} color={textColor}>
        {course.serial}
      </Badge>
      <Text
        as={prepareToRemoveCourseId.includes(course.id) ? "del" : undefined}
        fontSize="sm"
        color={
          prepareToRemoveCourseId.includes(course.id) ? removeColor : textColor
        }
        mx="1"
        fontWeight="700"
        noOfLines={1}
      >
        {course.name}
      </Text>
      <Spacer />
      <IconButton
        aria-label="Delete"
        variant={
          prepareToRemoveCourseId.includes(course.id) ? "solid" : "outline"
        }
        icon={<FaTrashAlt />}
        size="sm"
        colorScheme="red"
        onClick={() => {
          handlePrepareToDelete(course.id);
        }}
      />
    </Flex>
  );
}

function SortablePopover(props: {
  readonly courseData: {
    readonly [key: string]: Course;
  };
  readonly courseList: string[];
  readonly prepareToRemoveCourseId: string[];
  readonly setCourseList: React.Dispatch<React.SetStateAction<string[]>>;
  readonly handlePrepareToDelete: (courseId: string) => void;
}) {
  const {
    courseData,
    courseList,
    prepareToRemoveCourseId,
    setCourseList,
    handlePrepareToDelete,
  } = props;
  const sensors = useSensors(
    useSensor(MouseSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );
  return (
    <div>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        modifiers={[restrictToParentElement, restrictToVerticalAxis]}
        onDragEnd={(event) => {
          const { active, over } = event;
          if (active.id !== over?.id) {
            setCourseList((courseList) => {
              const oldIndex = courseList.indexOf(String(active.id));
              const newIndex = courseList.indexOf(String(over?.id));

              return arrayMove(courseList, oldIndex, newIndex);
            });
          }
        }}
      >
        <SortableContext
          items={courseList}
          strategy={verticalListSortingStrategy}
        >
          {courseList.map((courseId) => {
            const course = courseData?.[courseId];
            if (!course) {
              return <></>;
            }
            return (
              <SortableElement
                key={courseId}
                course={course}
                prepareToRemoveCourseId={prepareToRemoveCourseId}
                handlePrepareToDelete={handlePrepareToDelete}
              />
            );
          })}
        </SortableContext>
      </DndContext>
    </div>
  );
}

export default SortablePopover;
