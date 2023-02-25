import { Box, Divider, Flex, useMediaQuery } from "@chakra-ui/react";
import { CalloutSection } from "@/containers/CalloutSection";
import { StayTunedSection } from "@/containers/StayTunedSection";
import { VisionSection } from "@/containers/VisionSection";
import { IntroSection } from "@/containers/IntroSection";
import { TeamSection } from "@/containers/TeamSection";
import { FeatureSection } from "@/containers/FeatureSection";
import { Element as ScrollAnchorWrapper } from "react-scroll";

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
        <ScrollAnchorWrapper name="/#">
          <IntroSection />
        </ScrollAnchorWrapper>
        <CalloutSection />
        <Divider w={"200px"} my="32" borderColor="gray.500" />
        <ScrollAnchorWrapper name="/#vision">
          <VisionSection />
        </ScrollAnchorWrapper>
        <ScrollAnchorWrapper name="/#team">
          <TeamSection />
        </ScrollAnchorWrapper>
        <Divider w={"200px"} my="24" borderColor="gray.500" />
        <ScrollAnchorWrapper name="/#features">
          <FeatureSection />
        </ScrollAnchorWrapper>
        <StayTunedSection />
      </Flex>
    </Box>
  );
}
