import { Center, Heading, Spinner } from "@chakra-ui/react";

export const LoadingState = () => {
  return (
    <Center>
      <Heading as={"h2"} fontSize={{ base: "1rem", md: "2.2rem" }}>
        Page is loading
      </Heading>
      <Spinner
        colorScheme="green"
        size={{ base: "md", md: "lg" }}
        label="..."
        speed="0.80s"
        thickness="0.3rem"
        padding={{ base: "0.5rem", md: "1rem" }}
        margin={{ base: "0 0.7rem", md: "0 1rem" }}
      />
    </Center>
  );
};
