import { Flex, Button, Text, Image, Tooltip } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { NeoLogoText } from "@/components/NeoLogoText";

export function IntroSection() {
  const { t, i18n } = useTranslation();
  return (
    <Flex flexDirection="column" w="100%" h="95vh">
      <Flex flexDirection="row" alignItems="center" w="100%" h="100%" py="4em">
        <Flex flexDirection="column" alignItems="start" w="50%" px="16">
          <NeoLogoText />
          <Text
            align="start"
            fontSize={["4xl", "7xl"]}
            w="100%"
            fontWeight="800"
            color={"gray.300"}
            mb="4"
          >
            {t("home.title")}
          </Text>
          <Tooltip label={t("utils.comingSoon")} aria-label="coming-soon">
            <Button
              colorScheme="teal"
              variant="solid"
              size="lg"
              mr={4}
              disabled
            >
              {t("home.nolBtn")}
            </Button>
          </Tooltip>
        </Flex>
        <Flex flexDirection="row" alignItems="end" w="60%">
          <Image
            src="img/dark_desktop.png"
            alt="dark-desktop"
            w="50vw"
            draggable="false"
            pointerEvents={"none"}
          />
          <Image
            src="img/dark_mobile.png"
            alt="dark-desktop"
            w="10vw"
            ml="-8vw"
            draggable="false"
            pointerEvents={"none"}
          />
        </Flex>
      </Flex>
    </Flex>
  );
}
