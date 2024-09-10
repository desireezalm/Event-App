import { WarningTwoIcon } from "@chakra-ui/icons";
import { Center, Heading, Text } from "@chakra-ui/react";

export const ErrorState = () => {
  return (
    <Center
      padding={{ base: "1rem", md: "2.5rem" }}
      margin="5rem auto"
      bgColor="red.500"
      borderRadius="0.8rem"
      width={{ base: "80%" }}
      color="white"
      flexDirection="column"
    >
      <Heading as={"h2"} fontSize={{ base: "1.5rem", md: "2.2rem" }}>
        The page could not be loaded.
      </Heading>
      <WarningTwoIcon
        fontSize={{ base: "2rem" }}
        margin={{ base: "1rem 0.5rem" }}
      />
      <Text fontSize={{ base: "1rem", md: "2.2rem" }}>
        Please try again later or contact our support for help.
      </Text>
    </Center>
  );
};
