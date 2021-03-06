import {
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Heading,
  IconButton,
} from "@chakra-ui/react";
import * as React from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { Sidebar } from "./sidebar";
import { useMobileMenuState } from "./usemobilemenustate";

export const MobileTopBar = () => {
  const { isOpen, onClose, onOpen } = useMobileMenuState();
  return (
    <Flex
      align="center"
      justify="space-between"
      py="2"
      px="4"
      bg="linear-gradient(to right,#7f4cadc3, #1e5370)"
      display={{ base: "flex", md: "none" }}
      borderBottomWidth="1px"
      w="100vw"
    >
      <Heading>Sup </Heading>
      <IconButton
        onClick={onOpen}
        variant="unstyled"
        display="flex"
        cursor="pointer"
        aria-label="Menu"
        icon={<HiOutlineMenu fontSize="1.5rem" />}
      />
      <Drawer
        size="xs"
        placement="left"
        isOpen={isOpen}
        blockScrollOnMount={false}
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent
          bg="linear-gradient(#7f4cadc3, #1e5370)"
          shadow="none"
          position="relative"
          maxW="64"
        >
          <Sidebar width="full" height="full" bg="inherit" border="0" />
          <DrawerCloseButton
            bg="blue.500"
            _hover={{ bg: "blue.600" }}
            _active={{ bg: "blue.700" }}
            rounded="0"
            position="absolute"
            color="white"
            right="-8"
            top="0"
          />
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};
