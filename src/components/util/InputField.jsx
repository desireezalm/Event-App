import { Input } from "@chakra-ui/react";

export const InputField = ({ changeFn, placeholder, ...props }) => {
  return (
    <Input
      className="input-field"
      type="text"
      variant="outline"
      name="input-field"
      colorScheme="green"
      placeholder={placeholder}
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

export const FormTextInput = ({ placeholder, ...props }) => {
  return (
    <Input
      type="text"
      placeholder={placeholder}
      variant="outline"
      colorScheme="green"
      color="green.400"
      _placeholder={{ opacity: 0.7, color: "green.400" }}
      _hover={{ borderColor: "green.300" }}
      fontSize={{ base: "1rem", md: "1.1rem" }}
      padding={{ base: "1rem", md: "1.4rem" }}
      focusBorderColor="green.200"
      borderColor="green.400"
      borderRadius="1rem"
      width={{ base: "60%", md: "14rem" }}
      size={{ base: "sm", md: "md" }}
      {...props}
    ></Input>
  );
};

export const FormTimeInput = ({ handleData, name, id, ...props }) => {
  const now = new Date();

  return (
    <Input
      name={name}
      id={id}
      type="datetime-local"
      min={now}
      variant="outline"
      colorScheme="green"
      color="green.600"
      _hover={{ borderColor: "green.300" }}
      fontSize={{ base: "1rem", md: "1.1rem" }}
      padding={{ base: "1rem", md: "1.4rem" }}
      focusBorderColor="green.200"
      borderColor="green.400"
      borderRadius="1rem"
      width={{ base: "60%", md: "14rem" }}
      size={{ base: "sm", md: "md" }}
      calendar-picker-indicator={{ bgColor: "green.500" }}
      onChange={handleData}
      {...props}
    ></Input>
  );
};
