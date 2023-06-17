import { Box, Divider } from "@chakra-ui/react";
import { CalloutSection } from "@/containers/CalloutSection";
import { StayTunedSection } from "@/containers/StayTunedSection";
import { VisionSection } from "@/containers/VisionSection";
import { IntroSection } from "@/containers/IntroSection";
import { TeamSection } from "@/containers/TeamSection";
import { FeatureSection } from "@/containers/FeatureSection";
import { StorySection } from "@/containers/StorySection";
import { Element as ScrollAnchorWrapper } from "react-scroll";

export function HomePage() {
  return (
    <>
      <Box
        maxW="screen-md"
        minH={{ base: "100svh", lg: "95vh" }}
        mx="auto"
        overflow="visible"
        pt={{ base: 0, lg: "64px" }}
        bg="black"
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
        <Divider w={"200px"} mx="auto" my="24" borderColor="gray.500" />
        <ScrollAnchorWrapper name="/#features">
          <FeatureSection />
        </ScrollAnchorWrapper>
        <ScrollAnchorWrapper name="/#story">
          <StorySection />
        </ScrollAnchorWrapper>
        <StayTunedSection />
      </Box>
    </>
  );
}
