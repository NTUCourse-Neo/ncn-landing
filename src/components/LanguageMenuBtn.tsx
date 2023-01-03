import {
  Menu,
  MenuButton,
  IconButton,
  MenuItem,
  MenuList,
  Badge,
} from "@chakra-ui/react";
import { BsTranslate } from "react-icons/bs";
import { useTranslation } from "react-i18next";

export function LanguageMenuBtn() {
  const { i18n } = useTranslation();
  const primaryColor = "gray.400";
  const secondaryColor = "gray.600";
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        color={secondaryColor}
        border="0"
        aria-label="Options"
        icon={<BsTranslate />}
        variant="outline"
      />
      <MenuList color={primaryColor} bg="black" borderColor={secondaryColor}>
        <MenuItem
          bg="black"
          onClick={() => {
            i18n.changeLanguage("en");
          }}
        >
          English
        </MenuItem>
        <MenuItem
          bg="black"
          onClick={() => {
            i18n.changeLanguage("zh");
          }}
        >
          繁體中文
        </MenuItem>
        <MenuItem
          bg="black"
          onClick={() => {
            i18n.changeLanguage("jp");
          }}
          isDisabled
        >
          日本語{" "}
          <Badge colorScheme="blue" ml="2">
            Coming Soon
          </Badge>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
