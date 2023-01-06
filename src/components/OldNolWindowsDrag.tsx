import { Flex, Image } from "@chakra-ui/react";
import { useRef } from "react";
import { motion } from "framer-motion";

export function OldNolWindowsDrag({ scale = 1 }) {
  const constraintsRef = useRef(null);
  return (
    <Flex
      as={motion.div}
      flexDirection={"row"}
      w="80vw"
      h="40em"
      justifyContent="center"
      alignItems={"center"}
      transform={`scale(${scale})`}
      ref={constraintsRef}
    >
      <motion.div style={{ position: "absolute" }}>
        <Image
          src="img/section_vision/vision_7.png"
          alt="old-ntu-course-website"
          w="50vw"
          draggable={false}
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
          w="30vw"
          draggable={false}
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
          w="20vw"
          draggable={false}
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
          w="20vw"
          draggable={false}
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
          w="30vw"
          draggable={false}
        />
      </motion.div>
    </Flex>
  );
}
