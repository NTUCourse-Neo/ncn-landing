import {
  Flex,
  Heading,
  Button,
  Text,
  HStack,
  Link,
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
      bg={useColorModeValue("headerBar.light", "headerBar.dark")}
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      zIndex="1000"
      px={{ base: 6, md: 10 }}
    >
      <Flex justifyContent="center" alignItems="center">
        <Link href="/">
          <Flex alignItems="center" flexDirection="row" cursor="pointer">
            <Heading
              ml="2"
              fontSize={{ base: "lg", md: "xl" }}
              fontWeight="800"
              color={useColorModeValue("heading.light", "heading.dark")}
              display={{ base: "none", md: "inline-block" }}
            >
              NTUCourse Neo
            </Heading>
          </Flex>
        </Link>
        <Link href="/course">
          <Button
            variant="ghost"
            size="md"
            ml={{ base: 4, md: 6 }}
            color={useColorModeValue("link.light", "link.dark")}
          >
            關於我們
          </Button>
        </Link>
      </Flex>
      <Flex justifyContent="center" alignItems="center">
        <ThemeToggleButton />
      </Flex>
    </Flex>
  );
}

export default HeaderBar;
