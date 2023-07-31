import { Flex, Image } from "@chakra-ui/react";
import { motion, Variants } from "framer-motion";

export function OldNolWindows({ scale = 1 }) {
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
  return (
    <Flex
      flexDirection={"row"}
      w="100%"
      justifyContent="center"
      alignItems={"center"}
      transform={`scale(${scale})`}
      position={"relative"}
      h={"70vh"}
    >
      <motion.div
        style={{
          zIndex: 9,
          width: "100%",
          height: "100%",
          background: "black",
          position: "absolute",
        }}
        variants={overlayVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: "some" }}
      />
      <Image
        src="img/section_vision/vision_7.png"
        alt="old-ntu-course-website"
        w="50vw"
        zIndex={5}
        draggable="false"
        pointerEvents={"none"}
      />
      <Image
        src="img/section_vision/vision_1.png"
        position={"absolute"}
        right={"10vw"}
        zIndex={6}
        alt="old-ntu-course-website"
        w="30vw"
        draggable="false"
        pointerEvents={"none"}
      />
      <Image
        src="img/section_vision/vision_2.png"
        position={"absolute"}
        left={"10vw"}
        zIndex={7}
        mt={"10em"}
        alt="old-ntu-course-website"
        w="30vw"
        draggable="false"
        pointerEvents={"none"}
      />
      <Image
        src="img/section_vision/vision_3.png"
        position={"absolute"}
        left={"8vw"}
        mt={"30em"}
        zIndex={8}
        alt="old-ntu-course-website"
        w="30vw"
        draggable="false"
        pointerEvents={"none"}
      />
      <Image
        src="img/section_vision/vision_4.png"
        position={"absolute"}
        left={"5vw"}
        mt={"-40"}
        zIndex={1}
        alt="old-ntu-course-website"
        w="50vw"
        draggable="false"
        pointerEvents={"none"}
      />
      <Image
        src="img/section_vision/vision_5.png"
        position={"absolute"}
        right={"5vw"}
        mt={"80"}
        zIndex={"1"}
        alt="old-ntu-course-website"
        w="40vw"
        draggable="false"
        pointerEvents={"none"}
      />
      <Image
        src="img/section_vision/vision_6.png"
        position={"absolute"}
        right={"8vw"}
        mb={"10"}
        zIndex={"5"}
        alt="old-ntu-course-website"
        w="30vw"
        draggable="false"
        pointerEvents={"none"}
      />
    </Flex>
  );
}
