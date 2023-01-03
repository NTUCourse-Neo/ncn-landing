import { Flex, Button, Text, Image, Tooltip, HStack } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

export function IntroSection() {
  const { t, i18n } = useTranslation();
  return (
    <Flex flexDirection="column" w="100%" h="95vh">
      <Flex flexDirection="row" alignItems="center" w="100%" h="100%" py="4em">
        <Flex flexDirection="column" alignItems="start" w="50%" px="16">
          <HStack>
            <Image src={`/img/ncn_logo.png`} alt="ncnLogo" h="32px" />
            <Text
              align="start"
              fontSize={["xl", "3xl"]}
              w="100%"
              fontWeight="800"
              color={"gray.400"}
            >
              NTUCourse Neo
            </Text>
          </HStack>
          <Text
            align="start"
            fontSize={["4xl", "7xl"]}
            w="100%"
            fontWeight="800"
            color={"gray.400"}
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
          <Image src="img/dark_desktop.png" alt="dark-desktop" w="50vw" />
          <Image
            src="img/dark_mobile.png"
            alt="dark-desktop"
            w="10vw"
            ml="-8vw"
          />
        </Flex>
      </Flex>
    </Flex>
  );
}
