import { Box, Divider, Flex, useMediaQuery } from "@chakra-ui/react";
import { CalloutSection } from "@/containers/CalloutSection";
import { StayTunedSection } from "@/containers/StayTunedSection";
import { VisionSection } from "@/containers/VisionSection";
import { IntroSection } from "@/containers/IntroSection";
import { TeamSection } from "@/containers/TeamSection";

export function HomePage() {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  if (isMobile) {
    window.location.href = "/mobile";
  }
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
        <Divider w={"200px"} my="32" borderColor="gray.500" />
        <VisionSection />
        <TeamSection />
        <Divider w={"200px"} borderColor="gray.500" />
        <StayTunedSection />
      </Flex>
    </Box>
  );
}
