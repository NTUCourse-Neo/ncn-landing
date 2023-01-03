import { Flex, Text } from "@chakra-ui/react";

export function OldNolFlawText({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  return (
    <Flex flexDirection={"column"} alignItems={"start"} my="4">
      <Text fontSize="3xl" fontWeight="900" color={"gray.400"}>
        {title}
      </Text>
      <Text fontSize="xl" fontWeight="300" color={"gray.400"}>
        {content}
      </Text>
    </Flex>
  );
}
