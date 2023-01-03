import { Flex, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

export function StayTunedSection() {
  const { t, i18n } = useTranslation();
  return (
    <Flex
      w="100%"
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      my="64"
    >
      <Text fontSize="2xl" fontWeight="400" color={"gray.600"}>
        {t("stayTuned.content")}
      </Text>
      <Text fontSize="8xl" fontWeight="500" color={"gray.700"}>
        {t("stayTuned.title")}
      </Text>
    </Flex>
  );
}
