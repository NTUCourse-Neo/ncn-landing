import { Flex, Button, Tooltip } from "@chakra-ui/react";
import { useInView } from "react-intersection-observer";

function HeaderBtn({ text = "首頁", href = "/#", isComingSoon = false }) {
  return isComingSoon ? (
    <Tooltip label="敬請期待">
      <Button
        variant="ghost"
        size="md"
        fontWeight="semibold"
        mx="4"
        colorScheme={"whiteAlpha"}
        disabled
      >
        {text}
      </Button>
    </Tooltip>
  ) : (
    <Button
      variant="ghost"
      size="md"
      fontWeight="800"
      mx="4"
      colorScheme={"whiteAlpha"}
      onClick={() => {
        window.location.href = href;
      }}
    >
      {text}
    </Button>
  );
}

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
          transition: "all 0.3s ease-in-out",
          ":before": {
            position: "absolute",
            display: "block",
            content: '""',
            top: "-50%",
            left: "-50%",
            right: "-50%",
            bottom: "-50%",
            transform: "scale(0.5)",
          },
        }}
      >
        <Flex justifyContent="center" alignItems="center">
          <HeaderBtn text="首頁" href="/#" />
          <HeaderBtn text="願景" href="/#vision" />
          <HeaderBtn text="特色" href="/#feature" isComingSoon />
          <HeaderBtn text="歷程" href="/#history" isComingSoon />
          <HeaderBtn text="成員" href="/#team" isComingSoon />
          <HeaderBtn text="致謝" href="/#credit" isComingSoon />
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
