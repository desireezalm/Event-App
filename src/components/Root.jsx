import React from "react";
import { Outlet } from "react-router-dom";
import { Navigation } from "./Navigation";
import { Box } from "@chakra-ui/react";
import { DataContextProvider } from "../context/DataContext";

export const Root = () => {
  return (
    <Box
      id="root"
      bgColor="blackAlpha.800"
      width="100vw"
      height={{ base: "full", md: "full" }}
      color="green.200"
      textAlign={{ base: "center", md: "start" }}
      fontFamily="heading"
      fontSize="xl"
      fontWeight="600"
    >
      <DataContextProvider>
        <Navigation />
        <Outlet />
      </DataContextProvider>
    </Box>
  );
};
