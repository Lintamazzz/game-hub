import { HStack, Image, useColorMode } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

function NavBar() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px"></Image>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
}

export default NavBar;
