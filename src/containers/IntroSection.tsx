import { Flex, Text, Image } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { NeoLogoText } from "@/components/NeoLogoText";

export function IntroSection() {
  const { t } = useTranslation();
  return (
    <Flex flexDirection="column" w="100%" h={{ base: "98vh", lg: "95vh" }}>
      <Flex
        flexDirection={{ base: "column-reverse", lg: "row" }}
        alignItems="center"
        justifyContent="center"
        w="100%"
        h="100%"
        gap={{ base: "4em", lg: "0" }}
        py={{ lg: "4em" }}
      >
        <Flex
          flexDirection="column"
          alignItems={{ base: "center", lg: "start" }}
          w={{ base: "100%", lg: "40%" }}
          px={{ base: 0, lg: "16" }}
        >
          <NeoLogoText />
          <Text
            align={{ base: "center", lg: "start" }}
            fontSize={["4xl", "7xl"]}
            w="100%"
            fontWeight="800"
            color={"gray.300"}
            mb="4"
          >
            {t("home.title")}
          </Text>
        </Flex>
        <Flex
          flexDirection="row"
          alignItems="end"
          w={{ base: "100%", lg: "60%" }}
          justifyContent="center"
        >
          <Image
            src="img/dark_desktop.png"
            alt="dark-desktop"
            w={{ base: "80vw", lg: "50vw" }}
            draggable="false"
            pointerEvents={"none"}
          />
          <Image
            src="img/dark_mobile.png"
            alt="dark-desktop"
            w="10vw"
            ml="-9vw"
            draggable="false"
            pointerEvents={"none"}
          />
        </Flex>
      </Flex>
    </Flex>
  );
}
