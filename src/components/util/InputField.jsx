import { Input } from "@chakra-ui/react";

export const InputField = ({ changeFn, ...props }) => {
  return (
    <Input
      className="search-field"
      type="text"
      variant="outline"
      name="search-field"
      colorScheme="green"
      placeholder="Search events"
      color="green.400"
      _placeholder={{ opacity: 1, color: "green.600" }}
      _hover={{ borderColor: "green.300" }}
      fontSize={{ base: "1rem", sm: "1.2rem" }}
      padding={{ base: "1rem", sm: "1.4rem" }}
      focusBorderColor="green.200"
      borderColor="green.400"
      borderRadius="8px"
      width={{ base: "10rem", md: "14rem" }}
      size={{ base: "md", md: "lg" }}
      onChange={changeFn}
      {...props}
    ></Input>
  );
};
