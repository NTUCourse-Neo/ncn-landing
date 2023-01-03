import {
  Box,
  Flex,
  Button,
  Text,
  Image,
  Tooltip,
  HStack,
} from "@chakra-ui/react";
import { Callout } from "@/components/Callout";
import { OldNolWindows } from "@/components/OldNolWindows";
import { OldNolFlawText } from "@/components/OldNolFlawText";
import { useTranslation } from "react-i18next";
import { StayTunedSection } from "@/components/StayTunedSection";

export function HomePage() {
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
                {t("home.title")}
              </Text>
              <Tooltip label={t("utils.comingSoon")} aria-label="coming-soon">
                <Button
                  colorScheme="teal"
                  variant="solid"
                  size="lg"
                  mr={4}
                  disabled
                >
                  {t("home.nolBtn")}
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
        <Callout />
        {/* Vision Section */}
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
            {t("vision.title")}
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
            fontSize={["3xl", "3xl"]}
            w="100%"
            fontWeight="300"
            color={"gray.200"}
          >
            {t("vision.callout1")}
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
              title="vision.oldInterface.title"
              content="vision.oldInterface.content"
            />
            <OldNolFlawText
              title="vision.popups.title"
              content="vision.popups.content"
            />
          </Flex>
          <OldNolWindows scale={0.8} />
          <Flex w="30%" mr="24" flexDirection={"column"} alignItems={"start"}>
            <OldNolFlawText
              title="vision.courseTable.title"
              content="vision.courseTable.content"
            />
            <OldNolFlawText
              title="vision.information.title"
              content="vision.information.content"
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
            fontSize={["3xl", "3xl"]}
            w="100%"
            fontWeight="300"
            color={"gray.200"}
          >
            {t("vision.callout2")}
          </Text>
        </Flex>
        <StayTunedSection />
      </Flex>
    </Box>
  );
}
