import { Flex, Box, BoxProps } from "@chakra-ui/react";
import { useEffect, useCallback, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

// in svh
const HEADERBAR_HEIGHT = 8;

interface TimelineCardProps extends BoxProps {
  index: number;
  mountPage: (page: number) => void;
  unmountPage: () => void;
  pageIndex: number;
}
function TimelineCard(props: TimelineCardProps) {
  const { children, index, mountPage, unmountPage, pageIndex, ...rest } = props;
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

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
        duration: 0.5,
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
              <Box>{index}</Box>
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
          {" "}
          {pageIndex === index ? (
            <motion.div {...motionDivVariant}>{children}</motion.div>
          ) : null}
        </AnimatePresence>
      </Box>
      <Box
        ref={ref}
        sx={{
          width: "100%",
          position: "absolute",
          bottom: "1vh",
          zIndex: 10,
          height: "2px",
        }}
      />
    </Box>
  );
}

function StorySection() {
  const [pages, setPages] = useState<number[]>([]); // stack of setPages
  console.log(pages);
  const mountPage = useCallback((page: number) => {
    setPages((pages) => [...pages, page]);
  }, []);
  const unmountPage = useCallback(() => {
    setPages((pages) => pages.slice(0, -1));
  }, []);
  const pageIndex = useMemo(() => {
    return pages?.[pages.length - 1] ?? 0;
  }, [pages]);
  console.log(pageIndex);

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
          height: "100svh",
          w: "30%",
        }}
      />
      <Box
        sx={{
          position: "relative",
          w: "70%",
        }}
      >
        {Array.from({ length: 5 }, (_, i) => i).map((i) => {
          return (
            <TimelineCard
              mountPage={mountPage}
              unmountPage={unmountPage}
              pageIndex={pageIndex}
              key={i}
              index={i}
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
