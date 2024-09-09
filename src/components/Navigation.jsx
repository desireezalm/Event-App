import React from "react";
import { Link } from "react-router-dom";
import {
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  IconButton,
} from "@chakra-ui/react";

import {
  AddIcon,
  CalendarIcon,
  ChatIcon,
  HamburgerIcon,
} from "@chakra-ui/icons";

export const Navigation = () => {
  return (
    <Menu width={{ base: "70vw", md: "30vw" }} height="fit-content">
      <MenuButton
        as={IconButton}
        aria-label="Navigation"
        icon={<HamburgerIcon />}
        variant="outline"
        color="green.200"
        width={{ base: "2rem", md: "4rem" }}
        height={{ base: "2.2rem", md: "4rem" }}
        fontSize={{ base: "1.2rem", md: "1.7rem" }}
        colorScheme="green.200"
        align-content="start"
        padding="1.5rem"
        margin={{ base: "0.5rem", md: "1rem" }}
      />
      <MenuList
        listStyleType="none"
        textAlign="start"
        width={{ base: "100%", md: "25%" }}
        marginLeft={0}
        spacing={1}
        textTransform="uppercase"
        bgColor="green.200"
        boxShadow={{ base: 0, md: "0 4px 15px rgb(0 0 0 / 0.3)" }}
      >
        <Flex
          justifyContent="space-between"
          padding={0}
          wrap="nowrap"
          flexDirection="column"
        >
          <Link to="/">
            <MenuItem
              width={{ base: "100vw", md: "100%" }}
              padding="0.5rem"
              borderRadius={{ md: "0.5rem" }}
              icon={
                <CalendarIcon
                  paddingRight="0.3rem"
                  paddingBottom="0.1rem"
                  fontSize="xl"
                />
              }
              color="green.700"
              bgColor="green.200"
              _hover={{ bgColor: "green.700", color: "green.200" }}
            >
              Events
            </MenuItem>
          </Link>

          <MenuDivider />
          <Link to="/new">
            <MenuItem
              width={{ base: "100vw", md: "100%" }}
              padding="0.5rem"
              borderRadius={{ md: "0.5rem" }}
              icon={
                <AddIcon
                  paddingRight="0.3rem"
                  paddingBottom="0.1rem"
                  fontSize="xl"
                />
              }
              color="green.700"
              bgColor="green.200"
              _hover={{ bgColor: "green.700", color: "green.200" }}
            >
              Add new event
            </MenuItem>
          </Link>
          <MenuDivider />
          <Link to="/">
            <MenuItem
              width={{ base: "100vw", md: "100%" }}
              padding="0.5rem"
              borderRadius={{ md: "0.5rem" }}
              icon={
                <ChatIcon
                  paddingRight="0.3rem"
                  paddingBottom="0.1rem"
                  fontSize="xl"
                />
              }
              color="green.700"
              bgColor="green.200"
              _hover={{ bgColor: "green.700", color: "green.200" }}
            >
              Group members
            </MenuItem>
          </Link>
        </Flex>
      </MenuList>
    </Menu>
  );
};
