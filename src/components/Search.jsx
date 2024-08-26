import { Icon, Flex, Input } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";

export const SearchBar = ({ handleSearch, ...props }) => {
  return (
    <Flex
      className="search-events"
      padding="0.2rem"
      flexDirection="row"
      flexWrap="nowrap"
      alignItems="center"
      justifyContent="flex-start"
    >
      <Icon
        color="green.400"
        height={{ base: "1.2rem", md: "1.4rem" }}
        width={{ base: "1.2rem", md: "1.4rem" }}
        marginRight="1rem"
        as={Search2Icon}
      />
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
        onChange={handleSearch}
        {...props}
      ></Input>
    </Flex>
  );
};
