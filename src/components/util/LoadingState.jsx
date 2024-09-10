import { Center, Heading, Spinner } from "@chakra-ui/react";

export const LoadingState = () => {
  return (
    <Center
      padding={{ base: "1rem", md: "2.5rem" }}
      margin="5rem auto"
      bgColor="green.500"
      borderRadius="0.8rem"
      width={{ base: "80%" }}
      color="white"
      flexDirection="column"
    >
      <Heading as={"h2"} fontSize={{ base: "1.5rem", md: "2.2rem" }}>
        Page is loading
      </Heading>
      <Spinner
        colorScheme="green"
        size={{ base: "md", md: "lg" }}
        label="..."
        speed="0.80s"
        thickness="0.3rem"
        padding={{ base: "0.5rem", md: "1rem" }}
        margin={{ base: "1rem 0.5rem" }}
      />
    </Center>
  );
};
