import { Text, Flex, Box, BoxProps, Center } from "@chakra-ui/react";
import { useEffect, useCallback, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import stories, { Story } from "@/data/stories";
import { useTranslation } from "react-i18next";

// in svh
const HEADERBAR_HEIGHT = 8;

interface TimelineCardProps extends BoxProps {
  index: number;
  mountPage: (page: number) => void;
  unmountPage: () => void;
  pageIndex: number;
  story: Story;
}
function TimelineCard(props: TimelineCardProps) {
  const { children, story, index, mountPage, unmountPage, pageIndex, ...rest } =
    props;
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  const isActive = useMemo(() => pageIndex === index, [pageIndex, index]);
  const { i18n } = useTranslation();
  const isEnglish = useMemo(() => i18n.language === "en", [i18n.language]);

  useEffect(() => {
    if (inView) {
      mountPage(index);
    } else {
      unmountPage();
    }
  }, [inView, index, mountPage, unmountPage]);

  const motionDivVariant = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.5,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.1,
      },
    },
  };

  return (
    <Box {...rest}>
      <AnimatePresence>
        {index <= pageIndex ? (
          <motion.div {...motionDivVariant}>
            <Flex
              sx={{
                h: "8svh",
                alignItems: "center",
                color: isActive ? "white" : "gray.500",
                fontSize: { base: "md", lg: "3xl" },
                fontWeight: "900",
                gap: "20px",
                transition: "all 0.5s",
              }}
            >
              <Box>{story.title[isEnglish ? "en" : "zh"]}</Box>
              <Center>{story.emoji}</Center>
            </Flex>
          </motion.div>
        ) : null}
      </AnimatePresence>
      <Box>
        <AnimatePresence>
          {isActive ? (
            <motion.div {...motionDivVariant}>{children}</motion.div>
          ) : null}
        </AnimatePresence>
      </Box>
      <Box
        ref={ref}
        sx={{
          width: "100%",
          position: "absolute",
          bottom: `1svh`,
          zIndex: 10,
          height: "2px",
        }}
      />
    </Box>
  );
}

function StorySection() {
  const [pages, setPages] = useState<number[]>([]); // stack of setPages
  const mountPage = useCallback((page: number) => {
    setPages((pages) => [...pages, page]);
  }, []);
  const unmountPage = useCallback(() => {
    setPages((pages) => pages.slice(0, -1));
  }, []);
  const pageIndex = useMemo(() => {
    return pages?.[pages.length - 1] ?? 0;
  }, [pages]);
  const { i18n } = useTranslation();
  const isEnglish = useMemo(() => i18n.language === "en", [i18n.language]);

  return (
    <Flex
      sx={{
        pt: "10vh",
        position: "relative",
        width: "100%",
        h: `${stories.length * 100 + 50}svh`,
        px: { base: 4, lg: 0 },
      }}
    >
      <Box
        sx={{
          position: "sticky",
          top: `${HEADERBAR_HEIGHT}svh`,
          width: "10px",
          height: "91svh",
          w: "25%",
        }}
      >
        {stories.map((s, i) => {
          const date = new Date(s.startDate);
          const year = date.getFullYear();
          const month = date.toLocaleString("default", { month: "short" });
          return (
            <Flex
              sx={{
                h: "8svh",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                position: "relative",
              }}
              key={i}
            >
              <Box
                sx={{
                  w: "6px",
                  h: "6px",
                  bg: "gray.600",
                  position: "absolute",
                  top: 0.5,
                  borderRadius: "50%",
                  visibility: i !== 0 ? "visible" : "hidden",
                }}
              />
              <Text
                sx={{
                  color: pageIndex === i ? "white" : "gray.500",
                  transition: "all 0.5s",
                  fontWeight: "bold",
                  fontSize: "lg",
                }}
              >{`${month}, ${year}`}</Text>
              <Box
                sx={{
                  w: "6px",
                  h: "6px",
                  bg: "gray.600",
                  position: "absolute",
                  bottom: 0.5,
                  borderRadius: "50%",
                  visibility: i !== stories.length - 1 ? "visible" : "hidden",
                }}
              />
            </Flex>
          );
        })}
      </Box>
      <Box
        sx={{
          position: "relative",
          w: "75%",
          px: { base: "5%", lg: 0 },
          pr: { lg: "15%" },
        }}
      >
        {stories.map((s, i) => {
          return (
            <TimelineCard
              mountPage={mountPage}
              unmountPage={unmountPage}
              pageIndex={pageIndex}
              key={i}
              index={i}
              story={s}
              sx={{
                position: "sticky",
                top: `${HEADERBAR_HEIGHT + i * 8}svh`,
                height: `${99 - (i + 1) * 8}svh`,
              }}
            >
              {s.content[isEnglish ? "en" : "zh"].map((t, i) => (
                <Text
                  key={i}
                  sx={{
                    cursor: "default",
                    color: "gray.300",
                    fontSize: { base: "12px", lg: "md" },
                    lineHeight: "1.5",
                    py: 1,
                    mb: 1,
                  }}
                >
                  {t}
                </Text>
              ))}
            </TimelineCard>
          );
        })}
      </Box>
    </Flex>
  );
}

export { StorySection };
