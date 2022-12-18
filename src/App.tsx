import {
  Box,
  Flex,
  Spacer,
  Button,
  Text,
  Image,
  Tooltip,
  HStack,
  Link,
} from "@chakra-ui/react";

function HomePage() {
  const bg = "black";

  return (
    <>
      <Box
        maxW="screen-md"
        h="95vh"
        mx="auto"
        overflow="visible"
        pt="64px"
        bg={bg}
      >
        <Flex
          justifyContent="space-between"
          mb={4}
          grow="1"
          flexDirection="column"
          alignItems="center"
        >
          <Flex flexDirection="column" w="100%">
            <Flex flexDirection="row" alignItems="center" w="100%" py="4em">
              <Flex flexDirection="column" alignItems="start" w="50%" px="16">
                <HStack>
                  <Image src={`/img/ncn_logo.png`} alt="ncnLogo" h="32px" />
                  <Text
                    align="start"
                    fontSize={["xl", "3xl"]}
                    w="100%"
                    fontWeight="800"
                    color={"gray.400"}
                  >
                    NTUCourse Neo
                  </Text>
                </HStack>
                <Text
                  align="start"
                  fontSize={["4xl", "7xl"]}
                  w="100%"
                  fontWeight="800"
                  color={"gray.400"}
                  mb="4"
                >
                  選課排課，重新定義。
                </Text>
                <Tooltip label="即將推出" aria-label="coming-soon">
                  <Button
                    bg="teal.200"
                    variant="solid"
                    size="lg"
                    mr={4}
                    disabled
                  >
                    前往臺大課程網
                  </Button>
                </Tooltip>
              </Flex>
              <Flex flexDirection="row" alignItems="end" w="60%">
                <Image src="img/dark_desktop.png" alt="dark-desktop" w="50vw" />
                <Image
                  src="img/dark_mobile.png"
                  alt="dark-desktop"
                  w="10vw"
                  ml="-8vw"
                />
              </Flex>
            </Flex>
            <Spacer my={4} />
          </Flex>
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
              color={"gray.600"}
              my="4"
            >
              網站調整中，敬請期待
            </Text>
            <Text
              fontSize="xl"
              fontWeight="bold"
              color={"gray.600"}
              textAlign="center"
            >
              經過臺大教務處的大力推動，Neo Team
              正與資訊組合作開發新一代課程網，並於近期即將展開公測。
              <br />
              NTUCourse Neo 目前已終止網站服務，此網站未來將用於紀錄 Project Neo
              的歷史。
              <br />
              感謝您一直以來對 NTUCourse Neo
              的支持與愛用，我們期待早日與您見面！
            </Text>
            <Text
              fontSize="lg"
              fontWeight="600"
              color={"gray.700"}
              textAlign="center"
              my="4"
            >
              ⏤{" "}
              <Link href="https://swh00tw.me/" isExternal>
                swh00tw
              </Link>{" "}
              ,{" "}
              <Link href="https://jchiroto.dev" isExternal>
                jc-hiroto
              </Link>
              , and Neo Team.
            </Text>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}

export default HomePage;
