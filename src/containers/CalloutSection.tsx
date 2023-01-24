import { Flex, Text, Tooltip, Link, HStack } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { FaArrowRight } from "react-icons/fa";

export function CalloutSection() {
  const { t, i18n } = useTranslation();
  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      w="100%"
      rounded="lg"
      py="24"
      bgGradient="linear(to-r, green.200, teal.500)"
    >
      <Text fontSize={["xl", "6xl"]} fontWeight="extrabold" color={"gray.800"}>
        👋
      </Text>
      <Text
        fontSize={["xl", "7xl"]}
        fontWeight="extrabold"
        color={"gray.800"}
        mb="4"
      >
        {t("callout.title")}
      </Text>
      <Text
        fontSize="xl"
        fontWeight="500"
        color={"gray.700"}
        textAlign="center"
      >
        {t("callout.content1")}
        <br />
        {t("callout.content2")}
        <br />
        {t("callout.content3")}
      </Text>
      <Tooltip label={t("utils.comingSoon")} aria-label="coming-soon">
        <Link mt="8">
          <HStack>
            <Text fontSize="2xl" fontWeight="600" color={"gray.800"}>
              {t("home.nolBtn")} <sup style={{ fontStyle: "italic" }}>beta</sup>
            </Text>
            <Text fontSize="2xl" fontWeight="600" color={"gray.800"}>
              <FaArrowRight />
            </Text>
          </HStack>
        </Link>
      </Tooltip>
    </Flex>
  );
}
