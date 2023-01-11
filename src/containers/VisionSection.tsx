import { Flex, HStack, Text } from "@chakra-ui/react";
import { OldNolWindows } from "@/components/OldNolWindows";
import { OldNolFlawText } from "@/components/OldNolFlawText";
import { useTranslation } from "react-i18next";
import { motion, Variants } from "framer-motion";
import { OldNolWindowsDrag } from "@/components/OldNolWindowsDrag";

export function VisionSection() {
  const { t, i18n } = useTranslation();
  const overlayVariants: Variants = {
    offscreen: {
      opacity: 0,
    },
    onscreen: {
      opacity: 0.8,
      transition: {
        type: "ease-in",
        duration: 0.4,
        delay: 0.5,
      },
    },
  };
  const titleVariants: Variants = {
    offscreen: {
      opacity: 0,
    },
    onscreen: {
      opacity: 1,
      transition: {
        type: "ease-in-out",
        duration: 0.5,
        delay: 1,
      },
    },
  };
  return (
    <div id="vision">
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        w="100%"
        rounded="lg"
        mb="60"
      >
        <OldNolWindows />
        <Text
          align="center"
          fontSize="6vw"
          fontWeight="800"
          color={"white"}
          zIndex={10}
          textShadow="0px 10px 10px rgba(0, 0, 0, 0.3)"
          position={"absolute"}
        >
          <motion.div
            variants={titleVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: "all" }}
          >
            {t("vision.title")}
          </motion.div>
        </Text>

        <motion.div
          style={{
            zIndex: 9,
            height: "80vh",
            width: "100%",
            background: "black",
            position: "absolute",
          }}
          variants={overlayVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: "some" }}
        ></motion.div>
      </Flex>
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        w="100%"
        bg="#121316"
        my="10"
        py="12"
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
        py="12"
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
        <OldNolWindowsDrag />
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
    </div>
  );
}
