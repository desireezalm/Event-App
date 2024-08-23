import { Text } from "@chakra-ui/react";

export const TextLabel = ({ text }) => {
  return (
    <Text fontSize={{ base: "sm", md: "md" }} fontWeight="bold" text={text}>
      {text}
    </Text>
  );
};
