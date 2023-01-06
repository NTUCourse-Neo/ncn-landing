import { Flex, Text, Link } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

export function CalloutSection() {
  const { t, i18n } = useTranslation();
  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      w="100%"
      rounded="lg"
    >
      <Text
        fontSize={["xl", "7xl"]}
        fontWeight="extrabold"
        color={"gray.400"}
        my="4"
      >
        {t("callout.title")}
      </Text>
      <Text
        fontSize="xl"
        fontWeight="bold"
        color={"gray.500"}
        textAlign="center"
      >
        {t("callout.content1")}
        <br />
        {t("callout.content2")}
        <br />
        {t("callout.content3")}
      </Text>
      <Text
        fontSize="lg"
        fontWeight="600"
        color={"gray.600"}
        textAlign="center"
        my="4"
      >
        ⏤{" "}
        <Link href="https://swh00tw.me/" isExternal>
          swh00tw
        </Link>
        ,{" "}
        <Link href="https://jchiroto.dev" isExternal>
          jc-hiroto
        </Link>
        {t("callout.neoTeam")}
      </Text>
    </Flex>
  );
}
