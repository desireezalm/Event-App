import { Center, Text } from "@chakra-ui/react";

export const Message = ({ text }) => {
  return (
    <Center
      width={{ base: "100%" }}
      height={{ base: "full" }}
      alignSelf={{ base: "center" }}
      alignItems={{ base: "start" }}
    >
      <Text
        fontSize={{ base: "sm", md: "md" }}
        padding={{ base: "2rem" }}
        text={text}
      >
        {text}
      </Text>
    </Center>
  );
};
