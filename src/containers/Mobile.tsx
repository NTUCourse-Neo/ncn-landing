import { Box } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

export function Mobile() {
  const { t, i18n } = useTranslation();
  const bg = "black";
  return (
    <Box
      maxW="screen-md"
      minH="95vh"
      mx="auto"
      overflow="visible"
      pt="64px"
      bg={bg}
    >
      Mobile
    </Box>
  );
}
