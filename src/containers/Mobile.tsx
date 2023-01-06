import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

export function Mobile() {
  const { t, i18n } = useTranslation();
  return (
    <Box
      maxW="screen-md"
      minH="85vh"
      mx="auto"
      overflow="visible"
      px="4"
      pt="64px"
      bg="black"
    >
      <Flex
        flexDirection="column"
        w="100%"
        justifyContent="center"
        alignItems="center"
      >
        <Image src={`/img/mobile.svg`} alt="ncnLogo" w="60%" my="16" />
        <Text fontSize="3xl" fontWeight="800" color={"gray.400"} align="center">
          {t("mobile.title")}
        </Text>
        <Text
          fontSize="md"
          fontWeight="400"
          color={"gray.400"}
          my="4"
          align="center"
        >
          {t("mobile.content")}
        </Text>
      </Flex>
    </Box>
  );
}
