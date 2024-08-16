import { Icon, Select, Flex } from "@chakra-ui/react";
import { FaFilter } from "react-icons/fa6";

export const FilterEvents = () => {
  return (
    <Flex
      className="search-events"
      padding="0.2rem"
      marginLeft={{ base: 0, md: "1rem" }}
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
        as={FaFilter}
      />
      <Select
        variant="outline"
        placeholder="Filter events"
        color="green.400"
        _placeholder={{ opacity: 0, color: "green.400" }}
        borderColor="green.400"
        _hover={{ borderColor: "green.300" }}
        focusBorderColor="green.200"
        fontSize={{ base: "1rem", sm: "1.2rem" }}
        width={{ base: "10rem", md: "14rem" }}
        size={{ base: "md", md: "lg" }}
        borderRadius="10px"
      >
        <option value="exercise">Exercise</option>
        <option value="cuisine">Cuisine</option>
        <option value="relaxation">Relaxation</option>
        <option value="entertainment">Entertainment</option>
      </Select>
    </Flex>
  );
};
