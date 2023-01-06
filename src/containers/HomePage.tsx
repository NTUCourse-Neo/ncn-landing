import { Box, Flex } from "@chakra-ui/react";
import { CalloutSection } from "@/containers/CalloutSection";
import { StayTunedSection } from "@/containers/StayTunedSection";
import { VisionSection } from "@/containers/VisionSection";
import { IntroSection } from "@/containers/IntroSection";

export function HomePage() {
  return (
    <Box
      maxW="screen-md"
      minH="95vh"
      mx="auto"
      overflow="visible"
      pt="64px"
      bg="black"
    >
      <Flex
        justifyContent="space-between"
        grow="1"
        flexDirection="column"
        alignItems="center"
      >
        <IntroSection />
        <CalloutSection />
        <VisionSection />
        <StayTunedSection />
      </Flex>
    </Box>
  );
}
