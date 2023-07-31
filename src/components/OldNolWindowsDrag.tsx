import { Flex, Image, FlexProps } from "@chakra-ui/react";
import { useRef } from "react";
import { motion } from "framer-motion";

interface OldNolWindowsDragProps extends FlexProps {
  scale?: number;
}
export function OldNolWindowsDrag({
  scale = 1,
  ...restProps
}: OldNolWindowsDragProps) {
  const constraintsRef = useRef(null);
  return (
    <Flex
      as={motion.div}
      flexDirection={"row"}
      h={{ base: "40vh", lg: "40em" }}
      justifyContent="center"
      alignItems={"center"}
      transform={`scale(${scale})`}
      ref={constraintsRef}
      {...restProps}
    >
      <motion.div style={{ position: "absolute" }}>
        <Image
          src="img/section_vision/vision_7.png"
          alt="old-ntu-course-website"
          w={{ base: "100vw", lg: "50vw" }}
          draggable={false}
          pointerEvents={"none"}
        />
      </motion.div>
      <motion.div
        drag
        dragConstraints={constraintsRef}
        whileTap={{ scale: 0.98 }}
        whileHover={{ scale: 1.01 }}
        style={{ position: "absolute" }}
      >
        <Image
          src="img/section_vision/vision_1.png"
          alt="old-ntu-course-website"
          w={{ base: "60vw", lg: "30vw" }}
          draggable={false}
          pointerEvents={"none"}
        />
      </motion.div>
      <motion.div
        drag
        dragConstraints={constraintsRef}
        whileTap={{ scale: 0.98 }}
        whileHover={{ scale: 1.01 }}
        style={{ position: "absolute" }}
      >
        <Image
          src="img/section_vision/vision_2.png"
          alt="old-ntu-course-website"
          w={{ base: "45vw", lg: "20vw" }}
          draggable={false}
          pointerEvents={"none"}
        />
      </motion.div>
      <motion.div
        drag
        dragConstraints={constraintsRef}
        whileTap={{ scale: 0.98 }}
        whileHover={{ scale: 1.01 }}
        style={{ position: "absolute" }}
      >
        <Image
          src="img/section_vision/vision_3.png"
          alt="old-ntu-course-website"
          w={{ base: "50vw", lg: "20vw" }}
          draggable={false}
          pointerEvents={"none"}
        />
      </motion.div>
      <motion.div
        drag
        dragConstraints={constraintsRef}
        whileTap={{ scale: 0.98 }}
        whileHover={{ scale: 1.01 }}
        style={{ position: "absolute", left: "5vw" }}
      >
        <Image
          src="img/section_vision/vision_4.png"
          alt="old-ntu-course-website"
          w={{ base: "55vw", lg: "30vw" }}
          draggable={false}
          pointerEvents={"none"}
        />
      </motion.div>
    </Flex>
  );
}
