import { useState } from "react";
import { CourseInfoMap, CourseInfoTranslateMap } from "@/data/CourseMapping";
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
import { useTranslation } from "react-i18next";

export type DisplayTagName = Exclude<keyof CourseInfoTranslateMap, "language">;
export const availableTags: DisplayTagName[] = [
  "requirement",
  "slot",
  "enroll_method",
  "areas",
];
export default function DisplayTagsPanel() {
  const [displayTags, setDisplayTags] = useState<DisplayTagName[]>([]);
  const { t, i18n } = useTranslation();
  return (
    <Flex py={10}>
      <Accordion allowToggle gap={2} w="80%">
        {mockCourses[i18n.language == "zh" ? "zh" : "en"].map((c) => (
          <CourseInfoRow
            key={c.id}
            courseInfo={c}
            selected={false}
            displayTags={displayTags}
            displayButton={false}
          />
        ))}
      </Accordion>
      <Spacer />
      <Box
        sx={{
          bg: "#2b2b2b",
          borderRadius: "8px",
          px: 8,
          py: 4,
          w: "18%",
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
            {t("features.courseInfoRow.displayTags")}
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
                {CourseInfoMap[tag].name[i18n.language == "zh" ? "zh" : "en"]}
              </Tag>
            );
          })}
        </Flex>
      </Box>
    </Flex>
  );
}
