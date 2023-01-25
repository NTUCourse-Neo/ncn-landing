import { useState } from "react";
import { CourseInfoMap } from "@/data/CourseMapping";
import CourseInfoRow from "@/components/CourseInfoRow";
import mockCourses from "@/data/mockCourses";
import {
  Box,
  Flex,
  Accordion,
  Spacer,
  Center,
  Tag,
  TagLeftIcon,
} from "@chakra-ui/react";
import { FaFilter, FaPlus, FaMinus } from "react-icons/fa";

export type DisplayTagName = "requirement" | "slot" | "enroll_method" | "areas";
export const availableTags: DisplayTagName[] = [
  "requirement",
  "slot",
  "enroll_method",
  "areas",
];
export default function DisplayTagsPanel() {
  const [displayTags, setDisplayTags] = useState<DisplayTagName[]>([]);
  return (
    <Flex py={10}>
      <Accordion allowToggle gap={2} w="75%">
        {mockCourses.map((c) => (
          <CourseInfoRow
            key={c.id}
            courseInfo={c}
            selected={false}
            displayTags={displayTags}
          />
        ))}
      </Accordion>
      <Spacer />
      <Box
        sx={{
          bg: "#2b2b2b",
          borderRadius: "8px",
          p: 8,
          w: "22%",
          h: "fit-content",
        }}
      >
        <Flex mb="3" gap="10px">
          <Center>
            <FaFilter />
          </Center>
          <Flex
            sx={{
              fontWeight: "600",
              fontSize: "22px",
            }}
          >
            Display Tags
          </Flex>
        </Flex>
        <Flex
          sx={{
            flexWrap: "wrap",
            gap: "2px",
          }}
        >
          {availableTags.map((tag) => {
            const selected = displayTags.includes(tag);
            return (
              <Tag
                key={tag}
                as="button"
                m="1"
                variant={selected ? "solid" : "subtle"}
                onClick={
                  selected
                    ? () => {
                        setDisplayTags([
                          ...displayTags.filter((t) => t !== tag),
                        ]);
                      }
                    : () => {
                        setDisplayTags([...displayTags, tag]);
                      }
                }
                transition="all 200ms ease-in-out"
              >
                <TagLeftIcon
                  key={tag + "-Icon"}
                  boxSize="12px"
                  as={selected ? FaMinus : FaPlus}
                />
                {CourseInfoMap[tag].name}
              </Tag>
            );
          })}
        </Flex>
      </Box>
    </Flex>
  );
}
