import { Flex, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

export function OldNolFlawText({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  const { t, i18n } = useTranslation();
  return (
    <Flex flexDirection={"column"} alignItems={"start"} my="4">
      <Text fontSize="3xl" fontWeight="900" color={"gray.400"}>
        {t(title)}
      </Text>
      <Text fontSize="xl" fontWeight="300" color={"gray.400"}>
        {t(content)}
      </Text>
    </Flex>
  );
}