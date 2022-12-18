import { Flex, Button } from "@chakra-ui/react";

function HeaderBar() {
  return (
    <Flex
      top={0}
      position="fixed"
      w="100%"
      h="64px"
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      zIndex="1000"
      px={{ base: 6, md: 10 }}
      sx={{
        backdropFilter: "blur(10px)",
        bg: "#00000050",
      }}
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
