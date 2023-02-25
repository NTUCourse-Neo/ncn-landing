import { Center, BoxProps, Image, Text, Box, Flex } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

export function MobileViewBlocker(props: BoxProps) {
  const { t } = useTranslation();
  return (
    <Box h="90vh" w="100%" overflow="hidden" bg="black" {...props}>
      <Flex h="100%" flexDirection={"column"} justifyContent="center">
        <Center>
          <Image
            src={`/img/mobile.svg`}
            alt="ncnLogo"
            w="60%"
            my="16"
            draggable="false"
            pointerEvents={"none"}
          />
        </Center>
        <Text fontSize="3xl" fontWeight="800" color={"gray.400"} align="center">
          {t("mobile.title")}
        </Text>
        <Text
          fontSize="sm"
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
