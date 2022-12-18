import {
  Flex,
  Heading,
  Button,
  Text,
  HStack,
  Link,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaBook, FaInfoCircle } from "react-icons/fa";
import ThemeToggleButton from "./ThemeToggleButton";


function HeaderBar() {
  return (
    <Flex
      position="fixed"
      w="100%"
      h="64px"
      bg={"black"}
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      zIndex="1000"
      px={{ base: 6, md: 10 }}
    >
      <Flex justifyContent="center" alignItems="center">
        <Button
          variant="ghost"
          size="md"
          fontWeight="semibold"
          mx="4"
          color={"gray.500"}
          _hover={{
            bg: "gray.700",
          }}
          disabled
        >
          願景
        </Button>
        <Button
          variant="ghost"
          size="md"
          fontWeight="semibold"
          mx="4"
          color={"gray.500"}
          _hover={{
            bg: "gray.700",
          }}
          disabled
        >
          特色
        </Button>
        <Button
          variant="ghost"
          size="md"
          fontWeight="semibold"
          mx="4"
          color={"gray.500"}
          _hover={{
            bg: "gray.700",
          }}
          disabled
        >
          歷程
        </Button>
        <Button
          variant="ghost"
          size="md"
          fontWeight="semibold"
          mx="4"
          color={"gray.500"}
          _hover={{
            bg: "gray.700",
          }}
          disabled
        >
          成員
        </Button>
        <Button
          variant="ghost"
          size="md"
          fontWeight="semibold"
          mx="4"
          color={"gray.500"}
          _hover={{
            bg: "gray.700",
          }}
          disabled
        >
          致謝
        </Button>
      </Flex>
    </Flex>
  );
}

export default HeaderBar;
