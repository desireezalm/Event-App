import { FormLabel, Text } from "@chakra-ui/react";

export const TextLabel = ({ text }) => {
  return (
    <Text fontSize={{ base: "sm", md: "md" }} fontWeight="bold" text={text}>
      {text}
    </Text>
  );
};

export const FormTextLabel = ({ text, htmlFor }) => {
  return (
    <FormLabel
      htmlFor={htmlFor}
      fontSize={{ base: "sm" }}
      display="inline-block"
      width={{ base: "30%" }}
    >
      {text}
    </FormLabel>
  );
};
