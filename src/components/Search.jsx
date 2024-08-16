import { Input, Icon, Flex } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";

export const SearchBar = ({ changeFn, ...props }) => {
  return (
    <Flex
      className="search-events"
      padding="1rem"
      flexDirection="row"
      flexWrap="nowrap"
      alignItems="center"
      justifyContent="flex-start"
    >
      <Icon
        colorScheme="green"
        height={{ base: "1.4rem", md: "1.7rem" }}
        width={{ base: "1.4rem", md: "1.7rem" }}
        marginRight="1rem"
        as={Search2Icon}
      />
      <Input
        type="text"
        variant="outline"
        name="search-field"
        colorScheme="green"
        placeholder="Search events"
        color="green.400"
        _placeholder={{ opacity: 1, color: "green.600" }}
        fontSize={{ base: "1rem", sm: "1.2rem" }}
        padding={{ base: "1rem", sm: "1.4rem" }}
        focusBorderColor="green.200"
        borderColor="green.400"
        borderRadius="10px"
        width={{ base: "12rem", md: "20rem" }}
        heigth={{ base: 12, md: 16 }}
        onChange={changeFn}
        {...props}
      ></Input>
    </Flex>
  );
};

/*
import { useState } from "react";
import { data } from "../utils/data";
import { Center, Text, Box } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import { ShowRecipes } from "../components/ShowRecipes";
import { TextInput } from "../components/ui/TextInput";

export const RecipeListPage = ({ clickFn }) => {
  const [searchField, setSearchField] = useState("");
  const recipeList = data.hits;

  // SearchFunction
  const recipeMatches = recipeList.filter((item) => {
    const recipeName = item.recipe.label.toLowerCase();
    const recipeHealthLabels = item.recipe.healthLabels;
    const searchArray = recipeHealthLabels.map((healthLabel) => {
      return healthLabel.toLowerCase();
    });
    searchArray.unshift(recipeName);
    const searchString = JSON.stringify(searchArray);
    const result = searchString.includes(searchField.toLowerCase());
    return result;
  });

  const handleChange = (event) => {
    setSearchField(event.target.value);
  };

  return (
    <Center flexDir="column">
      <Text
        fontSize={{ base: "md", sm: "lg" }}
        as="em"
        fontWeight={500}
        color="teal.500"
        margin="0.5rem"
      >
        Search recipes:
      </Text>
      <Box>
        <Search2Icon color="teal.400" mr="1rem" mb="0.5rem" boxSize="1.3rem" />
        <TextInput
          onChange={handleChange}
          w={{ base: 225, sm: 300 }}
          mt={1}
          mb={8}
        />
      </Box>
      <ShowRecipes clickFn={clickFn} recipeList={recipeMatches} />
    </Center>
  );
};
*/

/*
<Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay height="fit-content" />
        <DrawerContent backgroundColor="blackAlpha.500">
          <DrawerCloseButton color="white" _hover={{ color: "red.500" }} />
          <DrawerHeader display="inline-block" color="green.400">
            Search events
          </DrawerHeader>

          <DrawerBody>
            <Input
              variant="solid"
              name="search-bar"
              backgroundColor="green.100"
              placeholder="Type here..."
              _placeholder={{ opacity: 1, color: "green.600" }}
              color="green.700"
              fontSize={{ base: "1rem", sm: "1.2rem" }}
              focusBorderColor="green.300"
              borderColor="green.400"
              borderRadius="10px"
              onChange={changeFn}
              {...props}
            />
          </DrawerBody>
        </DrawerContent>
      </Drawer>*/
