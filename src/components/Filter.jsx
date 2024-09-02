import { Icon, Select, Flex } from "@chakra-ui/react";
import { FaFilter } from "react-icons/fa6";

export const FilterEvents = ({ handleFilter, ...props }) => {
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
      <label htmlFor="category-select">
        <Icon
          color="green.400"
          height={{ base: "1.2rem", md: "1.4rem" }}
          width={{ base: "1.2rem", md: "1.4rem" }}
          marginRight="1rem"
          as={FaFilter}
        />
      </label>
      <Select
        name="category"
        id="category-select"
        variant="outline"
        placeholder="Filter events"
        _placeholder={{ opacity: 1, color: "green.400" }}
        fontSize={{ base: "1rem", sm: "1.2rem" }}
        width={{ base: "10rem", md: "14rem" }}
        size={{ base: "md", md: "lg" }}
        borderRadius="10px"
        color="green.400"
        borderColor="green.400"
        focusBorderColor="green.200"
        _hover={{ borderColor: "green.300" }}
        onChange={handleFilter}
        {...props}
      >
        <option value="1">Exercise</option>
        <option value="2">Cuisine</option>
        <option value="3">Relaxation</option>
        <option value="4">Entertainment</option>
      </Select>
    </Flex>
  );
};
