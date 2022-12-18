import { Flex, Button } from "@chakra-ui/react";
import { useInView } from "react-intersection-observer";

function HeaderBar() {
  const { ref: startScrollingDetecter, inView: startScrolling } = useInView({
    /* Optional options */
    threshold: 0,
  });

  return (
    <>
      <Flex
        top={0}
        position="fixed"
        w="100%"
        h="64px"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        zIndex="1000"
        px={{ base: 6, md: 10 }}
        sx={{
          backdropFilter: "blur(10px)",
          bg: "#00000050",
          borderBottom: `0.2px solid ${
            startScrolling ? "#ffffff50" : "transparent"
          }`,
          transition: "all 0.3s ease-in-out",
          ":before": {
            position: "absolute",
            display: "block",
            content: '""',
            top: "-50%",
            left: "-50%",
            right: "-50%",
            bottom: "-50%",
            borderBottom: "1px solid #000",
            transform: "scale(0.5)",
          },
        }}
      >
        <Flex justifyContent="center" alignItems="center">
          <Button
            variant="ghost"
            size="md"
            fontWeight="semibold"
            mx="4"
            color={"gray.500"}
            _hover={{
              bg: "gray.700",
            }}
            disabled
          >
            願景
          </Button>
          <Button
            variant="ghost"
            size="md"
            fontWeight="semibold"
            mx="4"
            color={"gray.500"}
            _hover={{
              bg: "gray.700",
            }}
            disabled
          >
            特色
          </Button>
          <Button
            variant="ghost"
            size="md"
            fontWeight="semibold"
            mx="4"
            color={"gray.500"}
            _hover={{
              bg: "gray.700",
            }}
            disabled
          >
            歷程
          </Button>
          <Button
            variant="ghost"
            size="md"
            fontWeight="semibold"
            mx="4"
            color={"gray.500"}
            _hover={{
              bg: "gray.700",
            }}
            disabled
          >
            成員
          </Button>
          <Button
            variant="ghost"
            size="md"
            fontWeight="semibold"
            mx="4"
            color={"gray.500"}
            _hover={{
              bg: "gray.700",
            }}
            disabled
          >
            致謝
          </Button>
        </Flex>
      </Flex>
      <Flex
        w="100%"
        h="2px"
        position={"absolute"}
        top={"105vh"}
        bg="transparent"
        zIndex={2}
        ref={startScrollingDetecter}
      />
    </>
  );
}

export default HeaderBar;
