import CourseInfoRow from "@/components/CourseInfoRow";
import mockCourses from "@/data/mockCourses";
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
  TextProps,
  Accordion,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import {
  FaArrowsAltV,
  FaEye,
  FaHandPointer,
  FaInfoCircle,
  FaPlus,
  // FaRandom,
  FaTasks,
} from "react-icons/fa";
import DisplayTagsPanel from "@/components/demo/displayTags";
import CourseTablePanel from "@/components/demo/CourseTable";
import GlobalPriorityPanel from "@/components/demo/GlobalPriority";
import SelectedCourseProvider from "@/components/SelectedCourseProvider";
import DashboardPanel from "@/components/demo/Dashboard";

function GradientText(
  props: TextProps & {
    gradient: string;
  }
) {
  const { gradient, ...rest } = props;
  return (
    <Flex zIndex={10} w="100%">
      <Text
        w="100vw"
        align="center"
        fontSize="6vw"
        fontWeight="800"
        cursor="default"
        userSelect={"none"}
        sx={{
          backgroundColor: "white", // fallback color
          backgroundImage: gradient,
          backgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundSize: "100% 200%",
          backgroundPosition: "top",
          transition: "all 0.5s ease-in-out",
          _hover: {
            backgroundPosition: "100%",
          },
        }}
        {...rest}
      />
    </Flex>
  );
}

function StayTunedPart({ brightness }: { brightness: number }) {
  const { t } = useTranslation();
  return (
    <Flex minH="60" justifyContent="center" alignItems="center" mx="10">
      <Image
        src="img/course_row.png"
        w="80%"
        position="absolute"
        filter="auto"
        blur="5px"
        brightness={brightness}
        rounded="3xl"
      />
      <Text fontSize="5xl" fontWeight="600" color="gray.500" zIndex="2">
        {t("stayTuned.title")}
      </Text>
    </Flex>
  );
}

export function FeatureSection() {
  const { t, i18n } = useTranslation();
  return (
    <Box id="features" w="100%">
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        w="100%"
        minH={{ base: "30svh", lg: "60vh" }}
        my={8}
      >
        <Image
          src="/img/neo_home.png"
          h={{ lg: "60vh" }}
          position={"absolute"}
        />
        <Box
          bg="black"
          opacity={"0.5"}
          w="100%"
          h={{ base: "30svh", lg: "60vh" }}
          position={"absolute"}
        />
        <GradientText gradient="linear-gradient(180deg, #ffffff 38%, #9AE6B4 65%, #4FD1C5)">
          {t("features.simple.title")}
        </GradientText>
        <GradientText gradient="linear-gradient(180deg, #ffffff 38%, #81E6D9 65%, #63B3ED)">
          {t("features.intuitive.title")}
        </GradientText>
        <GradientText gradient="linear-gradient(180deg, #ffffff 38%, #90CDF4 65%, #B794F4)">
          {t("features.integration.title")}
        </GradientText>
      </Flex>
      <Flex
        w="100%"
        bg="#121316"
        px={{ base: 8, lg: 20 }}
        py="16"
        flexDirection={"column"}
      >
        <Flex flexDirection={"column"}>
          <Text
            fontSize="3xl"
            fontWeight="600"
            bgGradient={
              "linear-gradient(180deg, #ffffff 25%, #9AE6B4 , #4FD1C5)"
            }
            bgClip="text"
            align="start"
          >
            {t("features.simple.title")}
          </Text>
          <Text fontSize="5xl" fontWeight="600" color="white" align="start">
            {t("features.simple.subtitle")}
          </Text>
          <Text
            fontSize="xl"
            fontWeight="400"
            color="white"
            align="start"
            mt="4"
          >
            {t("features.simple.content1")}
            <br />
            {t("features.simple.content2")}
          </Text>
          <Tabs mt="8">
            <TabList>
              <Tab color="green.200">
                <HStack gap={2}>
                  <Text
                    fontSize={{ base: "md", lg: "xl" }}
                    fontWeight="600"
                    color="gray.300"
                    ml="2"
                  >
                    <FaArrowsAltV />
                  </Text>
                  <Text
                    fontSize={{ base: "md", lg: "xl" }}
                    fontWeight="600"
                    color="gray.300"
                    ml="2"
                    align="start"
                  >
                    {t("features.simple.tabs.extend")}
                  </Text>
                </HStack>
              </Tab>
              <Tab color="green.200">
                <HStack gap={2}>
                  <Text
                    fontSize={{ base: "md", lg: "xl" }}
                    fontWeight="600"
                    color="gray.300"
                    ml="2"
                  >
                    <FaEye />
                  </Text>
                  <Text
                    fontSize={{ base: "md", lg: "xl" }}
                    fontWeight="600"
                    color="gray.300"
                    ml="2"
                    align="start"
                  >
                    {t("features.simple.tabs.custom")}
                  </Text>
                </HStack>
              </Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <Box py={10}>
                  <Accordion allowToggle gap={2}>
                    {mockCourses[i18n.language == "zh" ? "zh" : "en"].map(
                      (c) => (
                        <CourseInfoRow
                          key={c.id}
                          courseInfo={c}
                          selected={false}
                          displayButton={false}
                        />
                      )
                    )}
                  </Accordion>
                </Box>
              </TabPanel>
              <TabPanel>
                <DisplayTagsPanel />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Flex>
      </Flex>
      <Flex
        w="100%"
        bg="black"
        px={{ base: 8, lg: 20 }}
        py="16"
        flexDirection={"column"}
      >
        <Flex flexDirection={"column"}>
          <Text
            fontSize="3xl"
            fontWeight="600"
            bgGradient={
              "linear-gradient(180deg, #ffffff 25%, #81E6D9 65%, #63B3ED)"
            }
            bgClip="text"
            align="start"
          >
            {t("features.intuitive.title")}
          </Text>
          <Text fontSize="5xl" fontWeight="600" color="white" align="start">
            {t("features.intuitive.subtitle")}
          </Text>
          <Text
            fontSize="xl"
            fontWeight="400"
            color="white"
            align="start"
            mt="4"
          >
            {t("features.intuitive.content1")}
            <br />
            {t("features.intuitive.content2")}
          </Text>
          <SelectedCourseProvider>
            <Tabs mt="8">
              <TabList>
                <Tab color="teal.200">
                  <HStack gap={2}>
                    <Text
                      fontSize={{ lg: "xl" }}
                      fontWeight="600"
                      color="gray.300"
                      ml="2"
                    >
                      <FaHandPointer />
                    </Text>
                    <Text
                      fontSize={{ lg: "xl" }}
                      fontWeight="600"
                      color="gray.300"
                      ml="2"
                      align="start"
                    >
                      {t("features.intuitive.tabs.table")}
                    </Text>
                  </HStack>
                </Tab>
                <Tab color="teal.200">
                  <HStack gap={2}>
                    <Text
                      fontSize={{ lg: "xl" }}
                      fontWeight="600"
                      color="gray.300"
                      ml="2"
                    >
                      <FaTasks />
                    </Text>
                    <Text
                      fontSize={{ lg: "xl" }}
                      fontWeight="600"
                      color="gray.300"
                      ml="2"
                      align="start"
                    >
                      {t("features.intuitive.tabs.global")}
                    </Text>
                  </HStack>
                </Tab>
              </TabList>

              <TabPanels>
                <TabPanel>
                  <CourseTablePanel />
                </TabPanel>
                <TabPanel>
                  <GlobalPriorityPanel />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </SelectedCourseProvider>
        </Flex>
      </Flex>
      <Flex
        w="100%"
        bg="#121316"
        px={{ base: 8, lg: 20 }}
        py="16"
        flexDirection={"column"}
      >
        <Flex flexDirection={"column"}>
          <Text
            fontSize="3xl"
            fontWeight="600"
            bgGradient={
              "linear-gradient(180deg, #ffffff 25%, #90CDF4 65%, #B794F4)"
            }
            bgClip="text"
            align="start"
          >
            {t("features.integration.title")}
          </Text>
          <Text fontSize="5xl" fontWeight="600" color="white" align="start">
            {t("features.integration.subtitle")}
          </Text>
          <Text
            fontSize="xl"
            fontWeight="400"
            color="white"
            align="start"
            mt="4"
          >
            {t("features.integration.content1")}
            <br />
            {t("features.integration.content2")} <sup>1</sup>
          </Text>
          <Tabs mt="8">
            <TabList>
              <Tab color="blue.200">
                <HStack gap={2}>
                  <Text
                    fontSize={{ lg: "xl" }}
                    fontWeight="600"
                    color="gray.300"
                    ml="2"
                  >
                    <FaPlus />
                  </Text>
                  <Text
                    fontSize={{ lg: "xl" }}
                    fontWeight="600"
                    color="gray.300"
                    ml="2"
                    align="start"
                  >
                    {t("features.integration.tabs.add")}
                  </Text>
                </HStack>
              </Tab>
              <Tab color="blue.200">
                <HStack gap={2}>
                  <Text
                    fontSize={{ lg: "xl" }}
                    fontWeight="600"
                    color="gray.300"
                    ml="2"
                  >
                    <FaInfoCircle />
                  </Text>
                  <Text
                    fontSize={{ lg: "xl" }}
                    fontWeight="600"
                    color="gray.300"
                    ml="2"
                    align="start"
                  >
                    {t("features.integration.tabs.info")}
                  </Text>
                </HStack>
              </Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <Accordion allowToggle gap={2} index={0}>
                  {mockCourses[i18n.language == "zh" ? "zh" : "en"]
                    .slice(1, 2)
                    .map((c) => (
                      <CourseInfoRow
                        key={c.id}
                        courseInfo={c}
                        selected={false}
                        displayAddToNol
                        displayButton={false}
                      />
                    ))}
                </Accordion>
              </TabPanel>
              <TabPanel>
                <DashboardPanel
                  course={mockCourses[i18n.language == "zh" ? "zh" : "en"][1]}
                />
              </TabPanel>
            </TabPanels>
          </Tabs>
          <Text fontSize="sm" fontWeight="400" color="gray.600" align="start">
            <sup>1</sup> {t("features.integration.disclaimer1")}
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
}
