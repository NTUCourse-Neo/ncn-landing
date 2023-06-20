import CourseInfoRow from "@/components/CourseInfoRow";
import mockCourses from "@/data/mockCourses";
import {
  useDisclosure,
  Flex,
  Accordion,
  Spacer,
  Box,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { setHoveredCourseData } from "@/utils/hoverCourse";
import { courseTableScrollBarCss } from "@/components/demo/CourseTable";
import CourseListContainer from "@/components/CourseTable/CourseList";
import { useSelectedCourses } from "@/components/SelectedCourseProvider";

interface ModalWrapperProps {
  children: React.ReactNode;
  title: string;
}
export function ModalWrapper(props: ModalWrapperProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { children, title } = props;
  return (
    <>
      <Button onClick={onOpen} colorScheme="cyan">
        Open {title}
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size="full">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{children}</ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default function GlobalPriorityPanel() {
  const { t, i18n } = useTranslation();
  const { selectedCourses, setSelectedCourses } = useSelectedCourses();

  return (
    <Flex py={10} flexDirection={{ base: "column", lg: "row" }}>
      <Flex
        display={{ base: "inline-block", lg: "none" }}
        w="100%"
        justifyContent={"center"}
        mb={8}
      >
        <ModalWrapper title="Course List">
          <Box overflow="auto" __css={courseTableScrollBarCss}>
            <Flex
              flexDirection="row"
              p={4}
              h="90vh"
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
        overflow="auto"
        w="45%"
        __css={courseTableScrollBarCss}
        h="70vh"
        display={{ base: "none", lg: "inline-block" }}
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
