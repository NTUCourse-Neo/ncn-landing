import {
  Flex,
  Text,
  HStack,
  Button,
  useToast,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  ButtonGroup,
  Badge,
  Textarea,
  Input,
  Select,
  useDisclosure,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useState } from "react";
import {
  socialUserTypeMap,
  socialUserTypes,
  SocialUser,
} from "@/data/CourseMapping";
import { SignUpPost } from "@/types/course";
import { useTranslation } from "react-i18next";

function SignUpSubmitForm(props: {
  readonly courseId: string;
  readonly haveSubmitted: boolean;
  readonly setSignUpPostData: React.Dispatch<
    React.SetStateAction<SignUpPost[]>
  >;
}) {
  const { courseId, haveSubmitted, setSignUpPostData } = props;
  const headingColor = useColorModeValue("heading.light", "heading.dark");
  const { onOpen, onClose, isOpen } = useDisclosure();
  const toast = useToast();
  const [sendingForm, setSendingForm] = useState(false);
  const [signUpCardForm, setSignUpCardForm] = useState<{
    [key: string]: string;
  }>({
    user_type: "",
    amount: "",
    when: "",
    rule: "",
    comment: "",
  });
  const { t, i18n } = useTranslation();
  const isEnglish = i18n.language === "en";

  const handleSubmitSignUpCardForm = async () => {
    // check all fields first
    for (const key in signUpCardForm) {
      // check negative amount
      if (key === "amount") {
        const amount = parseInt(signUpCardForm[key]);
        if (amount < 0) {
          toast({
            title: isEnglish
              ? "Please enter positive integer"
              : "加簽人數請填入大於0的數字",
            description: "",
            status: "error",
            duration: 3000,
            isClosable: true,
          });
          return;
        }
      }
      // each field should not be empty except comment
      if (key !== "comment") {
        if (signUpCardForm[key] === "") {
          toast({
            title: isEnglish
              ? "Please fill-in all required fields"
              : "請填寫所有欄位",
            description: "",
            status: "error",
            duration: 3000,
            isClosable: true,
          });
          return;
        }
      }
    }
    setSignUpPostData((prev) => [
      ...prev,
      {
        content: {
          amount: parseInt(signUpCardForm.amount),
          comment: signUpCardForm.comment,
          rule: signUpCardForm.rule,
          when: signUpCardForm.when,
          _id: prev.length.toString(),
        },
        course_id: courseId,
        is_owner: true,
        self_vote_status: 0,
        create_ts: Date.now(),
        type: "???",
        upvotes: 0,
        downvotes: 0,
        user_type: signUpCardForm.user_type as SocialUser,
        _id: prev.length.toString(),
      },
    ]);
    setSignUpCardForm({
      user_type: "",
      amount: "",
      when: "",
      rule: "",
      comment: "",
    });
    onClose();
  };

  const requiredBadge = (
    <Badge colorScheme={"blue"}>{isEnglish ? "Required" : "必填"}</Badge>
  );

  return (
    <Popover
      placement="bottom"
      isOpen={isOpen}
      onOpen={() => {
        onOpen();
      }}
      onClose={onClose}
    >
      <PopoverTrigger>
        <Button
          colorScheme="blue"
          variant="solid"
          isDisabled={haveSubmitted}
          fontSize={{ base: "xs", lg: "md" }}
        >
          {haveSubmitted
            ? isEnglish
              ? "Submitted"
              : "已提供過"
            : isEnglish
            ? "Provide Information"
            : "提供資訊"}
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <Flex p="4" flexDirection="column" alignItems="start">
          <Text
            mb="2"
            fontSize="md"
            fontWeight="800"
            color={headingColor}
            textAlign="center"
          >
            {isEnglish ? "Provide Sign Up Information" : "提供加簽相關資訊"}
          </Text>
          <HStack pb={1}>
            <Text
              fontSize="sm"
              fontWeight="800"
              color={headingColor}
              textAlign="center"
            >
              {isEnglish ? "I am..." : "我是..."}
            </Text>
            {requiredBadge}
          </HStack>
          <Select
            mb="2"
            placeholder={isEnglish ? "Please select who you are" : "請選擇身份"}
            value={signUpCardForm.user_type}
            onChange={(e) => {
              setSignUpCardForm({
                ...signUpCardForm,
                user_type: e.currentTarget.value,
              });
            }}
          >
            {socialUserTypes.map((key) => {
              return (
                <option value={key} key={key}>
                  {socialUserTypeMap[key][i18n.language === "en" ? "en" : "zh"]}
                </option>
              );
            })}
          </Select>
          <HStack pb={1}>
            <Text
              fontSize="sm"
              fontWeight="800"
              color={headingColor}
              textAlign="center"
            >
              {t("features.dashboard.signUpSlot")}
            </Text>
            {requiredBadge}
          </HStack>
          <Input
            mb="2"
            type="number"
            placeholder={
              isEnglish
                ? "Positive Integer Only"
                : "限填數字。若不確定，請於下方補充"
            }
            value={signUpCardForm.amount}
            onChange={(e) => {
              setSignUpCardForm({
                ...signUpCardForm,
                amount: e.currentTarget.value,
              });
            }}
          />
          <HStack pb={1}>
            <Text
              fontSize="sm"
              fontWeight="800"
              color={headingColor}
              textAlign="center"
            >
              {t("features.dashboard.signUpDate")}
            </Text>
            {requiredBadge}
          </HStack>
          <Input
            mb="2"
            type="text"
            value={signUpCardForm.when}
            placeholder={
              isEnglish ? "Ex: 1st week, or 2/15" : "第一週上課、2/15 等..."
            }
            onChange={(e) => {
              setSignUpCardForm({
                ...signUpCardForm,
                when: e.currentTarget.value,
              });
            }}
          />
          <HStack pb={1}>
            <Text
              fontSize="sm"
              fontWeight="800"
              color={headingColor}
              textAlign="center"
            >
              {t("features.dashboard.signUpMethod")}
            </Text>
            {requiredBadge}
          </HStack>
          <Input
            value={signUpCardForm.rule}
            mb="2"
            type="text"
            placeholder={
              isEnglish
                ? "Ex: Randomly select, Online Form, etc."
                : "抽學生證、填表單、網路抽選 等..."
            }
            onChange={(e) => {
              setSignUpCardForm({
                ...signUpCardForm,
                rule: e.currentTarget.value,
              });
            }}
          />
          <Text
            fontSize="sm"
            fontWeight="800"
            color={headingColor}
            textAlign="center"
          >
            {t("features.dashboard.moreInfo")}
          </Text>
          <Textarea
            mb="2"
            size="md"
            value={signUpCardForm.comment}
            placeholder={isEnglish ? "Other Information" : "輸入補充資訊"}
            onChange={(e) => {
              setSignUpCardForm({
                ...signUpCardForm,
                comment: e.currentTarget.value,
              });
            }}
          />
          <ButtonGroup w="100%" size="sm" display="flex" justifyContent="end">
            <Button
              colorScheme="blue"
              isLoading={sendingForm}
              isDisabled={
                signUpCardForm.amount === "" ||
                signUpCardForm.user_type === "" ||
                signUpCardForm.when === "" ||
                signUpCardForm.rule === ""
              }
              onClick={async () => {
                setSendingForm(true);
                await handleSubmitSignUpCardForm();
                setSendingForm(false);
              }}
            >
              {isEnglish ? "Submit" : "送出"}
            </Button>
          </ButtonGroup>
        </Flex>
      </PopoverContent>
    </Popover>
  );
}

export default SignUpSubmitForm;
