import { Box, Flex, Text, Image, HStack, Link } from "@chakra-ui/react";
import { NeoLogoText } from "@/components/NeoLogoText";
import { useTranslation } from "react-i18next";
import { FaGithub, FaGlobeAmericas } from "react-icons/fa";

function TeamMemberBlock({
  name,
  github,
  website,
  role,
  avatar,
}: {
  name: string;
  github: string;
  website: string;
  role: string;
  avatar: string;
}) {
  return (
    <Flex flexDirection={"row"} justifyContent={"start"} alignItems={"center"}>
      <Image
        src={avatar}
        alt="neo-logo"
        w="150px"
        draggable="false"
        pointerEvents={"none"}
      />
      <Flex flexDirection={"column"} alignItems={"start"}>
        <Text fontSize={["xl", "3xl"]} fontWeight="700" color={"gray.300"}>
          {name}
        </Text>
        <HStack spacing={4}>
          <Link href={"https://github.com/" + github} isExternal>
            <HStack spacing={2}>
              <Text fontSize={["xl", "xl"]} fontWeight="500" color={"gray.400"}>
                <FaGithub />
              </Text>
              <Text fontSize={["xl", "xl"]} fontWeight="500" color={"gray.400"}>
                {github}
              </Text>
            </HStack>
          </Link>
          <Link href={"https://" + website} isExternal>
            <HStack spacing={2}>
              <Text fontSize={["xl", "xl"]} fontWeight="500" color={"gray.400"}>
                <FaGlobeAmericas />
              </Text>
              <Text fontSize={["xl", "xl"]} fontWeight="500" color={"gray.400"}>
                {website}
              </Text>
            </HStack>
          </Link>
        </HStack>
        <Text
          mt="2"
          fontSize={["lg", "lg"]}
          fontWeight="400"
          color={"gray.400"}
        >
          {role}
        </Text>
      </Flex>
    </Flex>
  );
}

export function TeamSection() {
  const { t, i18n } = useTranslation();
  return (
    <Box id="team" w="100%">
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        w="100%"
        my="24"
      >
        <Flex
          w={"100%"}
          flexDirection={"row"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Text
            fontSize={["4xl", "4xl"]}
            mr="4"
            fontWeight="300"
            color={"gray.200"}
          >
            {t("vision.createdNeo")}
          </Text>
          <NeoLogoText />
        </Flex>
        <Flex
          w={"100%"}
          my="24"
          flexDirection={"row"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <TeamMemberBlock
            name={t("team.swh.name")}
            github={t("team.swh.github")}
            website={t("team.swh.website")}
            role={t("team.swh.role")}
            avatar={t("team.swh.avatar")}
          />
          <Box mx="8" />
          <TeamMemberBlock
            name={t("team.jc.name")}
            github={t("team.jc.github")}
            website={t("team.jc.website")}
            role={t("team.jc.role")}
            avatar={t("team.jc.avatar")}
          />
        </Flex>
      </Flex>
    </Box>
  );
}
