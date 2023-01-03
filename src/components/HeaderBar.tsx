import { Flex, Button, Tooltip, useMediaQuery } from "@chakra-ui/react";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";

function HeaderBtn({ text = "", href = "/#", isComingSoon = false }) {
  const { t, i18n } = useTranslation();
  return isComingSoon ? (
    <Tooltip label={t("utils.stayTuned")}>
      <Button
        variant="ghost"
        size="md"
        fontWeight="600"
        mx="4"
        colorScheme={"gray"}
        disabled
      >
        {text}
      </Button>
    </Tooltip>
  ) : (
    <Button
      variant="ghost"
      size="md"
      fontWeight="600"
      mx="4"
      colorScheme={"gray"}
      onClick={() => {
        window.location.href = href;
      }}
    >
      {text}
    </Button>
  );
}

function HeaderBar() {
  const { t, i18n } = useTranslation();
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const { ref: startScrollingDetecter, inView: startScrolling } = useInView({
    /* Optional options */
    threshold: 0,
  });

  return isMobile ? (
    <></>
  ) : (
    <>
      <Flex
        top={0}
        position="fixed"
        w="100%"
        h="64px"
        overflow={"scroll"}
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        zIndex="1000"
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
          <HeaderBtn text={t("header.home") as string} href="/#" />
          <HeaderBtn text={t("header.vision") as string} href="/#vision" />
          <HeaderBtn
            text={t("header.features") as string}
            href="/#features"
            isComingSoon
          />
          <HeaderBtn
            text={t("header.story") as string}
            href="/#story"
            isComingSoon
          />
          <HeaderBtn
            text={t("header.team") as string}
            href="/#team"
            isComingSoon
          />
          <HeaderBtn
            text={t("header.credits") as string}
            href="/#credits"
            isComingSoon
          />
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
