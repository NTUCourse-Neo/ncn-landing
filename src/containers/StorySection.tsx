import { Text, Flex, Box, BoxProps, VStack, Center } from "@chakra-ui/react";
import { useEffect, useCallback, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import stories, { Story } from "@/data/stories";

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
              }}
            >
              <Box
                sx={{
                  color: isActive ? "white" : "gray.500",
                  fontSize: "xl",
                  fontWeight: "900",
                }}
              >
                {story.title}
              </Box>
            </Flex>
          </motion.div>
        ) : null}
      </AnimatePresence>
      <Box
        sx={{
          transition: "all 0.3s ease",
        }}
      >
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

  return (
    <Flex
      sx={{
        position: "relative",
        width: "100%",
      }}
    >
      <Box
        sx={{
          position: "sticky",
          top: `${HEADERBAR_HEIGHT}svh`,
          width: "10px",
          height: "91svh",
          w: "30%",
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
              <Text
                sx={{
                  color: pageIndex === i ? "white" : "gray.500",
                  fontWeight: "bold",
                  fontSize: "lg",
                }}
              >{`${month}, ${year}`}</Text>
            </Flex>
          );
        })}
      </Box>
      <Box
        sx={{
          position: "relative",
          w: "70%",
          pr: "10%",
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
              {`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}
              {`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}
            </TimelineCard>
          );
        })}
      </Box>
    </Flex>
  );
}

export { StorySection };
