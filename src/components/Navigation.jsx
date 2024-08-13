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
    <Menu width="100%">
      <MenuButton
        as={IconButton}
        aria-label="Navigation"
        icon={<HamburgerIcon />}
        variant="outline"
        color="green.200"
        colorScheme="green.200"
      />
      <MenuList
        listStyleType="none"
        textAlign="start"
        width="100%"
        marginLeft={0}
        spacing={1}
        textTransform="uppercase"
        bgColor="green.200"
      >
        <Flex
          justifyContent="space-between"
          padding={0}
          wrap="nowrap"
          flexDirection="column"
        >
          <MenuItem
            width="100vw"
            padding="0.5rem"
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
            <Link to="/">Events</Link>
          </MenuItem>
          <MenuDivider />
          <MenuItem
            width="100vw"
            padding="0.5rem"
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
            <Link to="/">Add new event</Link>
          </MenuItem>
          <MenuDivider />
          <MenuItem
            width="100vw"
            padding="0.5rem"
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
            <Link to="/">Group members</Link>
          </MenuItem>
        </Flex>
      </MenuList>
    </Menu>
  );
};
