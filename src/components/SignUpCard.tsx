import {
  Flex,
  Stat,
  StatLabel,
  StatNumber,
  Text,
  VStack,
  HStack,
  Tooltip,
  Spacer,
  Icon,
  Badge,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useState } from "react";
import {
  FaThumbsUp,
  FaThumbsDown,
  FaInfoCircle,
  FaClock,
} from "react-icons/fa";
import { socialUserTypeMap } from "@/data/CourseMapping";
import Moment from "moment";
import type { SignUpPost } from "@/types/course";
import { useTranslation } from "react-i18next";

function SignUpCard({
  post,
  setSignUpPostData,
  setSignUpCardIdx,
}: {
  readonly post: SignUpPost;
  readonly setSignUpPostData: React.Dispatch<
    React.SetStateAction<SignUpPost[]>
  >;
  readonly setSignUpCardIdx: React.Dispatch<React.SetStateAction<number>>;
}) {
  const is_owner = post?.is_owner;
  const [isVotingPost, setIsVotingPost] = useState(0);
  const [isDeletingPost, setIsDeletingPost] = useState(false);
  const textColor = useColorModeValue("gray.800", "gray.300");
  const commentColor = useColorModeValue("gray.600", "gray.400");
  const downvoteBtnColor = useColorModeValue("orange", "red");
  const { t, i18n } = useTranslation();
  Moment.locale("zh-tw");

  const handleVotePost = async (post_id: string, vote_type: number) => {
    setIsVotingPost(vote_type);
    setSignUpPostData((signUpPostData) => {
      const newData = signUpPostData.map((post) => {
        if (post_id !== post._id) {
          return post;
        }
        if (vote_type === 0) {
          if (post.self_vote_status === 1) {
            return {
              ...post,
              upvotes: post.upvotes - 1,
              self_vote_status: 0,
            };
          } else if (post.self_vote_status === -1) {
            return {
              ...post,
              downvotes: post.downvotes - 1,
              self_vote_status: 0,
            };
          }
        } else if (vote_type === 1) {
          if (post.self_vote_status === 0) {
            return {
              ...post,
              upvotes: post.upvotes + 1,
              self_vote_status: 1,
            };
          } else if (post.self_vote_status === -1) {
            return {
              ...post,
              upvotes: post.upvotes + 1,
              downvotes: post.downvotes - 1,
              self_vote_status: 1,
            };
          }
        } else {
          if (post.self_vote_status === 0) {
            return {
              ...post,
              downvotes: post.downvotes + 1,
              self_vote_status: -1,
            };
          } else if (post.self_vote_status === 1) {
            return {
              ...post,
              upvotes: post.upvotes - 1,
              downvotes: post.downvotes + 1,
              self_vote_status: -1,
            };
          }
        }
        // never reach here
        return post;
      });
      return newData;
    });
    setIsVotingPost(0);
  };

  const handleDeletePost = async (post_id: string) => {
    setIsDeletingPost(true);
    setSignUpPostData((signUpPostData) => {
      return signUpPostData.filter((post) => post_id !== post._id);
    });
    setSignUpCardIdx((prev) => prev - 1);
    setIsDeletingPost(false);
  };

  if (!post) {
    return null;
  }

  return (
    <Flex
      key={post._id}
      w="100%"
      h="75%"
      py="8"
      px="8"
      justifyContent="space-around"
      alignItems="start"
      flexDirection={{ base: "column", md: "row" }}
      bg={"gray.600"}
      borderRadius="lg"
      boxShadow="2xl"
    >
      <Flex
        h="100%"
        w={{ base: "100%", md: "24" }}
        flexWrap="wrap"
        alignItems="start"
        flexDirection={{ base: "column", lg: "row" }}
        gap={{ base: 4, lg: 0 }}
      >
        <Stat minW="16">
          <StatLabel>{t("features.dashboard.signUpSlot")}</StatLabel>
          <StatNumber>{post.content.amount}</StatNumber>
        </Stat>
        <Stat minW="16">
          <StatLabel>{t("features.dashboard.signUpMethod")}</StatLabel>
          <Text mt="1" fontSize="lg" fontWeight="600">
            {post.content.rule}
          </Text>
        </Stat>
        <Stat minW="16">
          <StatLabel>{t("features.dashboard.signUpDate")}</StatLabel>
          <Text mt="1" fontSize="lg" fontWeight="600">
            {post.content.when}
          </Text>
        </Stat>
      </Flex>
      <VStack mt={{ base: 4, md: 0 }} w={{ base: "100%", md: "70%" }} h="100%">
        <VStack w="100%" h="100%" justify="start" align="start">
          <HStack w="100%">
            <Text fontSize="sm" fontWeight="600" color={textColor}>
              {t("features.dashboard.moreInfo")}
            </Text>
            <Tooltip
              label={t("features.dashboard.disclaimer")}
              placement="top"
              hasArrow
            >
              <p>
                <Icon as={FaInfoCircle} boxSize="3" color="gray.500" />
              </p>
            </Tooltip>
            <Spacer />
            <Text fontSize="xs" fontWeight="600" color="gray.500">
              {t("features.dashboard.source")}
            </Text>
            <Badge colorScheme="blue">
              {is_owner
                ? i18n.language === "en"
                  ? "Me"
                  : "我"
                : socialUserTypeMap[post.user_type][
                    i18n.language === "en" ? "en" : "zh"
                  ]}
            </Badge>
            {is_owner ? (
              <Button
                size="sm"
                h="100%"
                variant={"ghost"}
                colorScheme="gray"
                fontSize={"sm"}
                color="red.600"
                onClick={() => {
                  handleDeletePost(post._id);
                }}
                isLoading={isDeletingPost}
              >
                刪除
              </Button>
            ) : (
              <></>
            )}
          </HStack>
          <Flex h={{ base: "150px", md: "150px" }} overflow="auto" flexGrow={1}>
            <Text
              fontSize="md"
              fontWeight="600"
              color={commentColor}
              overflow="auto"
              wordBreak="break-all"
            >
              {post.content.comment === "" ? "無" : post.content.comment}
            </Text>
          </Flex>
        </VStack>
        <HStack w="100%" justify="start">
          <HStack>
            <Icon as={FaClock} boxSize="3" color="gray.500" />
            <Text fontSize="xs" fontWeight="500" color="gray.500">
              {Moment(post.create_ts).format("YYYY-MM-DD HH:mm")}
            </Text>
          </HStack>
          <Spacer />
          <Button
            colorScheme="teal"
            variant={post.self_vote_status === 1 ? "solid" : "ghost"}
            size="xs"
            leftIcon={<FaThumbsUp />}
            isLoading={isVotingPost === 1}
            onClick={() => {
              handleVotePost(post._id, post.self_vote_status === 1 ? 0 : 1);
            }}
          >
            {post.upvotes}
          </Button>
          <Button
            colorScheme={downvoteBtnColor}
            variant={post.self_vote_status === -1 ? "solid" : "ghost"}
            size="xs"
            leftIcon={<FaThumbsDown />}
            isLoading={isVotingPost === -1}
            onClick={() => {
              handleVotePost(post._id, post.self_vote_status === -1 ? 0 : -1);
            }}
          >
            {post.downvotes}
          </Button>
        </HStack>
      </VStack>
    </Flex>
  );
}

export default SignUpCard;
