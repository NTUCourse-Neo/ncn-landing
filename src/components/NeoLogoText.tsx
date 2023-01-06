import { Text, Image, HStack } from "@chakra-ui/react";

export function NeoLogoText() {
  return (
    <HStack>
      <Image src={`/img/ncn_logo.png`} alt="ncnLogo" h="32px" />
      <Text
        align="start"
        fontSize={["xl", "3xl"]}
        w="100%"
        fontWeight="800"
        color={"gray.300"}
      >
        NTUCourse Neo
      </Text>
    </HStack>
  );
}
