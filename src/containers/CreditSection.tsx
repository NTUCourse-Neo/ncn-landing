import { Flex, Text } from "@chakra-ui/react";
import { GiLaurels } from "react-icons/gi";
import { useTranslation } from "react-i18next";

interface CreditTarget {
  name: {
    en: string;
    zh: string;
  };
  title?: {
    en: string;
    zh: string;
  };
}
const creditList: CreditTarget[] = [
  {
    name: {
      en: "Wilson Hsieh",
      zh: "謝維勝",
    },
    title: {
      en: "Backend Developer",
      zh: "後端開發",
    },
  },
  {
    name: {
      en: "Prof. Chung-Yang Huang",
      zh: "黃鍾揚 教授",
    },
    title: {
      en: "Advisor of Web Programming Course",
      zh: "網頁程式設計課程教授",
    },
  },
  {
    name: {
      en: "Prof. Hsin-Mu Tsai",
      zh: "蔡欣穆 教授",
    },
    title: {
      en: "Deputy Vice President for Academic Affairs",
      zh: "臺灣大學副教務處長",
    },
  },
  {
    name: {
      en: "Kelly Chen",
      zh: "陳姿君",
    },
    title: {
      en: "Senior Technical Manager",
      zh: "資深技術經理",
    },
  },
  {
    name: {
      en: "NTU OAA, CIMD",
      zh: "台灣大學教務處資訊組",
    },
  },
];

export default function CreditSection() {
  const { i18n } = useTranslation();
  const lang = i18n.language === "en" ? "en" : "zh";
  return (
    <Flex
      sx={{
        py: 16,
        bg: "#121416",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 6,
        mt: { base: 1, lg: 0 },
      }}
    >
      <Flex
        sx={{
          justifyContent: "center",
          alignItems: "center",
          gap: { lg: 2 },
          fontSize: { base: "2xl", md: "3xl" },
          fontWeight: "bold",
          color: "gray.100",
          px: 8,
        }}
      >
        <Text align="center">
          ✨{" "}
          {lang === "en"
            ? "Thank everyone who has supported us on our journey"
            : "感謝參與我們旅程的每個人"}{" "}
          ✨
        </Text>
      </Flex>
      <Flex
        sx={{
          flexDirection: { base: "column", md: "row" },
          flexWrap: { base: "nowrap", md: "wrap" },
          gap: { base: 2, md: 6, lg: 0 },
          justifyContent: "center",
        }}
      >
        {creditList.map((credit) => (
          <Flex
            key={credit.name.en}
            sx={{
              alignItems: "center",
              gap: 4,
              mx: 6,
              color: "gray.300",
            }}
          >
            <Flex fontSize="26px">
              <GiLaurels />
            </Flex>
            <Flex
              sx={{
                flexDirection: "column",
              }}
            >
              <Flex
                sx={{
                  fontSize: "18px",
                  fontWeight: 500,
                }}
              >
                {credit.name[lang]}
              </Flex>
              {credit.title ? (
                <Flex fontSize="14px">{credit.title[lang]}</Flex>
              ) : null}
            </Flex>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
}
