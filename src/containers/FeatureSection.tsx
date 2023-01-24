import {
  Box,
  Flex,
  Text,
  Image,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  HStack,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import {
  FaArrowsAltV,
  FaEye,
  FaHandPointer,
  FaInfoCircle,
  FaPlus,
  FaRandom,
  FaTasks,
} from "react-icons/fa";

export function FeatureSection() {
  const { t, i18n } = useTranslation();
  return (
    <Box id="features" w="100%">
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        w="100%"
        minH="60vh"
      >
        <Image src="/img/neo_home.png" h="60vh" position={"absolute"} />
        <Box
          bg="black"
          opacity={"0.5"}
          w="100%"
          h="60vh"
          position={"absolute"}
        />
        <Text
          align="center"
          fontSize="6vw"
          fontWeight="800"
          zIndex={10}
          bgClip="text"
          bgGradient="linear(to-br, white, white)"
          _hover={{
            bgGradient: "linear(to-br, white, green.200, teal.300)",
          }}
        >
          {t("features.simple")}
        </Text>
        <Text
          align="center"
          fontSize="6vw"
          fontWeight="800"
          zIndex={10}
          bgClip="text"
          bgGradient="linear(to-br, white, white)"
          _hover={{
            bgGradient: "linear(to-br, white, teal.200, blue.300)",
          }}
        >
          {t("features.intuitive")}
        </Text>
        <Text
          align="center"
          fontSize="6vw"
          fontWeight="800"
          zIndex={10}
          bgClip="text"
          bgGradient="linear(to-br, white, white)"
          _hover={{
            bgGradient: "linear(to-br, white, blue.200, purple.300)",
          }}
        >
          {t("features.integration")}
        </Text>
      </Flex>
      <Flex w="100%" bg="#121316" px="48" py="16" flexDirection={"column"}>
        <Flex flexDirection={"column"}>
          <Text
            fontSize="3xl"
            fontWeight="600"
            bgGradient={"linear(to-br, white, green.200, teal.300)"}
            bgClip="text"
            align="start"
          >
            {t("features.simple")}
          </Text>
          <Text fontSize="5xl" fontWeight="600" color="white" align="start">
            把呈現的資訊做減法，凸顯真正重要的資訊。
          </Text>
          <Text
            fontSize="xl"
            fontWeight="400"
            color="white"
            align="start"
            mt="4"
          >
            有別於課程網使用表格一次呈現所有資訊，Neo
            在課程資訊上採用了可展開式列表。把最重要的資訊留在上層讓你一眼掃過，同時也可以展開看到更多細節。
            <br />
            此外，我們更設計了自訂課程資料顯示功能，讓你可以自由選擇要看到的資訊。
          </Text>
          <Tabs mt="8">
            <TabList>
              <Tab color="green.200">
                <HStack>
                  <Text fontSize="xl" fontWeight="600" color="gray.300" ml="2">
                    <FaArrowsAltV />
                  </Text>
                  <Text fontSize="xl" fontWeight="600" color="gray.300" ml="2">
                    展開課程資訊
                  </Text>
                </HStack>
              </Tab>
              <Tab color="green.200">
                <HStack>
                  <Text fontSize="xl" fontWeight="600" color="gray.300" ml="2">
                    <FaEye />
                  </Text>
                  <Text fontSize="xl" fontWeight="600" color="gray.300" ml="2">
                    自訂顯示欄位
                  </Text>
                </HStack>
              </Tab>
            </TabList>

            <TabPanels>
              <TabPanel></TabPanel>
              <TabPanel></TabPanel>
            </TabPanels>
          </Tabs>
        </Flex>
      </Flex>
      <Flex w="100%" bg="black" px="48" py="16" flexDirection={"column"}>
        <Flex flexDirection={"column"}>
          <Text
            fontSize="3xl"
            fontWeight="600"
            bgGradient={"linear(to-br, white, teal.200, blue.300)"}
            bgClip="text"
            align="start"
          >
            {t("features.intuitive")}
          </Text>
          <Text fontSize="5xl" fontWeight="600" color="white" align="start">
            並排互動式課表，不必再為了衝堂選課志願序煩惱。
          </Text>
          <Text
            fontSize="xl"
            fontWeight="400"
            color="white"
            align="start"
            mt="4"
          >
            互動式課表讓時間不再只是簡單的數字，而是在課表中即時顯示。讓你更直覺地看到課程時間與你的規劃。
            <br />
            利用拖曳輕鬆調整志願序。除了全局志願序外，也能分別調整衝堂課程的順序偏好！
          </Text>
          <Tabs mt="8">
            <TabList>
              <Tab color="teal.200">
                <HStack>
                  <Text fontSize="xl" fontWeight="600" color="gray.300" ml="2">
                    <FaHandPointer />
                  </Text>
                  <Text fontSize="xl" fontWeight="600" color="gray.300" ml="2">
                    互動式課表
                  </Text>
                </HStack>
              </Tab>
              <Tab color="teal.200">
                <HStack>
                  <Text fontSize="xl" fontWeight="600" color="gray.300" ml="2">
                    <FaTasks />
                  </Text>
                  <Text fontSize="xl" fontWeight="600" color="gray.300" ml="2">
                    全局志願序
                  </Text>
                </HStack>
              </Tab>
              <Tab color="teal.200">
                <HStack>
                  <Text fontSize="xl" fontWeight="600" color="gray.300" ml="2">
                    <FaRandom />
                  </Text>
                  <Text fontSize="xl" fontWeight="600" color="gray.300" ml="2">
                    衝堂志願調整
                  </Text>
                </HStack>
              </Tab>
            </TabList>

            <TabPanels>
              <TabPanel></TabPanel>
              <TabPanel></TabPanel>
              <TabPanel></TabPanel>
            </TabPanels>
          </Tabs>
        </Flex>
      </Flex>
      <Flex w="100%" bg="#121316" px="48" py="16" flexDirection={"column"}>
        <Flex flexDirection={"column"}>
          <Text
            fontSize="3xl"
            fontWeight="600"
            bgGradient={"linear(to-br, white, blue.200, purple.300)"}
            bgClip="text"
            align="start"
          >
            {t("features.integration")}
          </Text>
          <Text fontSize="5xl" fontWeight="600" color="white" align="start">
            告別數不清的分頁，所有資訊一手掌握。
          </Text>
          <Text
            fontSize="xl"
            fontWeight="400"
            color="white"
            align="start"
            mt="4"
          >
            看到心儀的課程卻還要再去課程網重新搜尋按下加入？這不是我們要的。我們內建了加入課程網按鈕，讓你輕鬆在
            Neo 就能完成選課<sup>1</sup>。
            <br />
            除此之外，我們的課程資訊頁面集合了官方與非官方的資料。從選課人數、課程大綱、加簽資訊
            <sup>2</sup>，甚至於課程評價跟考古題<sup>3</sup>
            ，一手統整所有你需要的選課資訊。
          </Text>
          <Tabs mt="8">
            <TabList>
              <Tab color="teal.200">
                <HStack>
                  <Text fontSize="xl" fontWeight="600" color="gray.300" ml="2">
                    <FaPlus />
                  </Text>
                  <Text fontSize="xl" fontWeight="600" color="gray.300" ml="2">
                    加入課程網
                  </Text>
                </HStack>
              </Tab>
              <Tab color="teal.200">
                <HStack>
                  <Text fontSize="xl" fontWeight="600" color="gray.300" ml="2">
                    <FaInfoCircle />
                  </Text>
                  <Text fontSize="xl" fontWeight="600" color="gray.300" ml="2">
                    課程資訊頁面
                  </Text>
                </HStack>
              </Tab>
            </TabList>

            <TabPanels>
              <TabPanel></TabPanel>
              <TabPanel></TabPanel>
            </TabPanels>
          </Tabs>
        </Flex>
      </Flex>
    </Box>
  );
}
