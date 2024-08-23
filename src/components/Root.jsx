import React from "react";
import { Outlet } from "react-router-dom";
import { Navigation } from "./Navigation";
import { Box } from "@chakra-ui/react";

export const Root = () => {
  return (
    <Box
      id="root"
      bgColor="blackAlpha.800"
      width="100vw"
      height="full"
      color="green.200"
      textAlign="center"
      fontFamily="heading"
      fontSize="xl"
      fontWeight="600"
    >
      <Navigation />
      <Outlet />
    </Box>
  );
};
