import { Flex, Button, Tooltip, useMediaQuery, Text } from "@chakra-ui/react";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";
import { Link as ScrollLink } from "react-scroll";

function HeaderBtn({
  text = "",
  href = "/#",
  isComingSoon = false,
  isWIP = false,
}) {
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
        {text}{" "}
        {isWIP ? (
          <sup>
            <Text as="i">WIP</Text>
          </sup>
        ) : (
          <></>
        )}
      </Button>
    </Tooltip>
  ) : (
    <ScrollLink to={href} smooth={true} duration={500} offset={-64}>
      <Button
        variant="ghost"
        size="md"
        fontWeight="600"
        mx="4"
        colorScheme={"gray"}
      >
        {text}{" "}
        {isWIP ? (
          <sup>
            <Text as="i">WIP</Text>
          </sup>
        ) : (
          <></>
        )}
      </Button>
    </ScrollLink>
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
        overflow={"hidden"}
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
          <HeaderBtn text={t("header.team") as string} href="/#team" />
          <HeaderBtn
            text={t("header.features") as string}
            href="/#features"
            isWIP
          />
          <HeaderBtn
            text={t("header.story") as string}
            href="/#story"
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
