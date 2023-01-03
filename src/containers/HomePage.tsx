import {
  Box,
  Flex,
  Button,
  Text,
  Image,
  Tooltip,
  HStack,
} from "@chakra-ui/react";
import { SiteConstruction as HiWereStillAlive } from "@/sections/SiteConstruction";
import { OldNolWindows } from "@/components/OldNolWindows";
import { OldNolFlawText } from "@/components/OldNolFlawText";

export function HomePage() {
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
      <Flex
        justifyContent="space-between"
        grow="1"
        flexDirection="column"
        alignItems="center"
      >
        <Flex flexDirection="column" w="100%" h="95vh">
          <Flex
            flexDirection="row"
            alignItems="center"
            w="100%"
            h="100%"
            py="4em"
          >
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
                <Button bg="teal.200" variant="solid" size="lg" mr={4} disabled>
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
        </Flex>
        <HiWereStillAlive />
        <Flex
          id="vision"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          w="100%"
          rounded="lg"
          mb="52"
        >
          <OldNolWindows />
          <Text
            align="center"
            fontSize="6vw"
            w="100%"
            fontWeight="800"
            color={"white"}
            position={"absolute"}
            zIndex={10}
            textShadow="0px 10px 10px rgba(0, 0, 0, 0.3)"
          >
            選課可以更簡單。
          </Text>
          <Box
            bg="black"
            opacity="0.8"
            w="100%"
            h="80vh"
            position="absolute"
            zIndex={9}
          />
        </Flex>
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          w="100%"
          bg="#121316"
          my="10"
          py="24"
        >
          <Text
            align="center"
            fontSize={["4xl", "4xl"]}
            w="100%"
            fontWeight="300"
            color={"gray.200"}
          >
            「臺大提供了許多值得修習的課程，但規劃與登記選課的過程往往讓學生感到頭痛。」
          </Text>
        </Flex>
        <Flex
          w="100%"
          flexDirection={"row"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Flex w="30%" ml="24" flexDirection={"column"} alignItems={"start"}>
            <OldNolFlawText
              title="老舊的介面"
              content="課程網的介面已經經過數十年沒有重新設計，除了在電腦版本介面難以檢索資訊外，也未有提供手機版本的介面。"
            />
            <OldNolFlawText
              title="惱人的彈出視窗"
              content="我們理解學校經常需要提醒學生課程的異動或是注意事項，但是應該有比彈出視窗更「優雅」的方式。"
            />
          </Flex>
          <OldNolWindows scale={0.8} />
          <Flex w="30%" mr="24" flexDirection={"column"} alignItems={"start"}>
            <OldNolFlawText
              title="不直覺的彈出式課表"
              content="知道自己選了什麼課程、以及了解課程的時間安排都很重要。但現今的彈出式課表不只惱人，對於衝堂的課程顯示也很難讓學生一目了然。"
            />
            <OldNolFlawText
              title="四散的資訊"
              content="除了課程本身的資訊，學生往往也會查閱選課人數、課程評價、評分方式等等。但這些資訊都分散在不同的地方，學生很難一次性獲得所有資訊。"
            />
          </Flex>
        </Flex>
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          w="100%"
          bg="#121316"
          my="10"
          py="24"
        >
          <Text
            align="center"
            fontSize={["4xl", "4xl"]}
            w="100%"
            fontWeight="300"
            color={"gray.200"}
          >
            如果選課可以更加直覺，學生便能更專注在挑選自己喜愛的課程。所以我們創造了
            Neo。
          </Text>
        </Flex>
        <Flex
          w="100%"
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          my="64"
        >
          <Text fontSize="2xl" fontWeight="400" color={"gray.600"}>
            我們還有好多關於 Neo 的一切想要告訴你。
          </Text>
          <Text fontSize="8xl" fontWeight="500" color={"gray.700"}>
            敬請期待
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
}
