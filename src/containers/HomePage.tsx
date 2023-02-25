import { Box, Divider, Flex } from "@chakra-ui/react";
import { CalloutSection } from "@/containers/CalloutSection";
import { StayTunedSection } from "@/containers/StayTunedSection";
import { VisionSection } from "@/containers/VisionSection";
import { IntroSection } from "@/containers/IntroSection";
import { TeamSection } from "@/containers/TeamSection";
import { MobileViewBlocker } from "@/containers/MobileViewBlocker";

export function HomePage() {
  return (
    <>
      <MobileViewBlocker
        display={{
          base: "block",
          md: "none",
        }}
      />
      <Box
        maxW="screen-md"
        minH="95vh"
        mx="auto"
        overflow="visible"
        pt="64px"
        bg="black"
        display={{
          base: "none",
          md: "block",
        }}
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
    </>
  );
}
