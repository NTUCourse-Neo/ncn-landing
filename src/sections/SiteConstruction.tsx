import { Flex, Text, Link } from "@chakra-ui/react";

export function SiteConstruction() {
  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      w="100%"
      rounded="lg"
      mb="64"
    >
      <Text
        fontSize={["xl", "7xl"]}
        fontWeight="extrabold"
        color={"gray.400"}
        my="4"
      >
        嗨！我們還在！
      </Text>
      <Text
        fontSize="xl"
        fontWeight="bold"
        color={"gray.500"}
        textAlign="center"
      >
        我們正努力與臺大教務處資訊組合作開發新一代課程網，並於近期即將展開公測。
        <br />
        NTUCourse Neo 目前已終止網站服務，此網站未來將用於紀錄此專案的歷史。
        <br />
        感謝您一直以來對 NTUCourse Neo 的支持與愛用，我們期待早日與您見面！
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
        , 和 Neo 團隊。
      </Text>
    </Flex>
  );
}
