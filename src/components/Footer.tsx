import {
  Flex,
  Spacer,
  Text,
  Button,
  HStack,
  Icon,
  Center,
} from "@chakra-ui/react";
import { FaCodeBranch, FaGithub } from "react-icons/fa";
import { LanguageMenuBtn } from "@/components/LanguageMenuBtn";

function Footer() {
  const ver = "alpha-20230621";
  const secondaryColor = "gray.600";
  const handleOpenPage = (page: string) => {
    window.open(page, "_blank");
  };
  return (
    <Flex
      flexDirection="row"
      flexWrap="wrap"
      justifyContent="space-between"
      alignItems="center"
      px={{ base: 4, md: 8 }}
      py={{ base: 2, md: 4 }}
      zIndex="9999"
      css={{ gap: "10px" }}
      bg={"black"}
    >
      <Text
        fontSize={{ base: "md", md: "lg" }}
        color={secondaryColor}
        fontWeight="800"
      >
        Project Neo
      </Text>
      <HStack ml="2">
        <Icon as={FaCodeBranch} color={secondaryColor} size="4"></Icon>
        <Text fontSize="xs" color={secondaryColor} fontWeight="600">
          {ver}
        </Text>
      </HStack>
      <LanguageMenuBtn />
      <Button
        size="md"
        variant="ghost"
        color={secondaryColor}
        px="1"
        justifyContent={"center"}
        alignItems={"center"}
        onClick={() => {
          handleOpenPage("https://github.com/NTUCourse-Neo");
        }}
        display={{ base: "flex", md: "none" }}
      >
        <Center
          w={{ base: "20px", md: "20px" }}
          h={{ base: "20px", md: "20px" }}
        >
          <FaGithub size="20" />
        </Center>
      </Button>
      <Spacer />
      <Text
        fontSize={{ base: "xs", md: "sm" }}
        color={secondaryColor}
        fontWeight="500"
      >
        Copyright © 2022 NTUCourse Neo (swh00tw / jc-hiroto).
      </Text>
      <Button
        size="md"
        variant="ghost"
        color={secondaryColor}
        px="1"
        justifyContent={"center"}
        alignItems={"center"}
        onClick={() => {
          handleOpenPage("https://github.com/NTUCourse-Neo");
        }}
        display={{ base: "none", md: "flex" }}
      >
        <Center
          w={{ base: "20px", md: "20px" }}
          h={{ base: "20px", md: "20px" }}
        >
          <FaGithub size="20" />
        </Center>
      </Button>
    </Flex>
  );
}
export default Footer;
