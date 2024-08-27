import React, { useEffect, useState } from "react";
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  SimpleGrid,
  Textarea,
  Button,
  Select,
} from "@chakra-ui/react";
import { FormTextInput, FormTimeInput } from "../components/util/InputField";
import { FormTextLabel } from "../components/util/TextLabel";
import { useData } from "../context/DataContext";
import { useLoaderData } from "react-router-dom";

export const loader = async () => {
  const users = await fetch("http://localhost:3000/users");
  const categories = await fetch(`http://localhost:3000/categories`);

  return {
    users: await users.json(),
    categories: await categories.json(),
  };
};

export const AddEvent = () => {
  const { categories, users } = useLoaderData();
  const { matchId } = useData();
  //const { categoryList, setCategoryList } = useState([]);

  return (
    <Box
      className="add-event"
      width={{ base: "100vw" }}
      height={{ base: "100vh" }}
      margin="0 auto"
      padding={{ base: "1rem" }}
    >
      <Heading
        textTransform="uppercase"
        margin="1.5rem 0"
        paddingBottom="1rem"
        fontFamily="fantasy"
        letterSpacing="widest"
        fontSize={{ base: "2xl" }}
      >
        Add a new event
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} textAlign="start">
        <form>
          <FormControl
            className="form-title"
            marginBottom={{ base: "0.5rem" }}
            isRequired
          >
            <FormTextLabel htmlFor="event-title" text={"Event name: "} />
            <FormTextInput
              id="event-title"
              placeholder={"Example: Catnip Party"}
            />
          </FormControl>
          <FormControl
            className="form-image"
            isRequired
            marginBottom={{ base: "0.5rem" }}
          >
            <FormTextLabel htmlFor="event-image" text={"Image url: "} />
            <FormTextInput
              id="event-image"
              type="url"
              placeholder="https://www.example.com/image.jpg"
            ></FormTextInput>
          </FormControl>
          <FormControl
            className="form-description"
            marginBottom={{ base: "1rem" }}
            isRequired
          >
            <FormTextLabel htmlFor="event-description" text={"Description: "} />
            <Textarea
              id="event-description"
              placeholder="Example: Come try out our new catnip selection!"
              variant="outline"
              colorScheme="green"
              color="green.400"
              _placeholder={{ opacity: 0.8, color: "green.600" }}
              _hover={{ borderColor: "green.300" }}
              fontSize={{ base: "1rem", sm: "1.2rem" }}
              padding={{ base: "1rem", sm: "1.4rem" }}
              focusBorderColor="green.200"
              borderColor="green.400"
              borderRadius="0.8rem"
              width={{ base: "95%" }}
            />
          </FormControl>
          <FormControl
            className="form-category"
            marginBottom={{ base: "0.5rem" }}
            isRequired
          >
            <FormTextLabel htmlFor="event-category" text={"Category: "} />
            <Select
              placeholder="Select a category"
              name="event-category"
              id="event-category"
              variant="outline"
              colorScheme="green"
              color="green.600"
              display="inline-block"
              _placeholder={{ opacity: 0.7, color: "green.600" }}
              _hover={{ borderColor: "green.300" }}
              fontSize={{ base: "1rem", sm: "1.2rem" }}
              focusBorderColor="green.200"
              borderColor="green.400"
              borderRadius="1rem"
              width={{ base: "60%", md: "14rem" }}
              size={{ base: "sm", md: "md" }}
            >
              {categories.map((categoryItem) => (
                <option key={categoryItem.id} value={categoryItem.id}>
                  {categoryItem.name}
                </option>
              ))}
            </Select>
          </FormControl>
          <FormControl
            className="form-location"
            marginBottom={{ base: "0.5rem" }}
            isRequired
          >
            <FormTextLabel htmlFor="event-location" text={"Location: "} />
            <FormTextInput
              id="event-location"
              placeholder={"Example: Our basement"}
            />
          </FormControl>
          <FormControl
            className="form-start"
            marginBottom={{ base: "0.5rem" }}
            isRequired
          >
            <FormTextLabel htmlFor="event-start" text={"Starting time: "} />
            <FormTimeInput id="event-start" />
          </FormControl>
          <FormControl
            className="form-end"
            marginBottom={{ base: "0.5rem" }}
            isRequired
          >
            <FormTextLabel htmlFor="event-end" text={"Ending time: "} />
            <FormTimeInput id="event-end" />
          </FormControl>
          <FormControl
            className="form-createdby"
            marginBottom={{ base: "0.5rem" }}
            isRequired
          >
            <FormTextLabel htmlFor="event-createdby" text={"Created by: "} />
            <Select
              placeholder="Select a user"
              name="event-createdby"
              id="event-createdby"
              variant="outline"
              bgColor="blackAlpha.200"
              colorScheme="green"
              color="green.600"
              display="inline-block"
              _placeholder={{ opacity: 0.7, color: "green.600" }}
              _hover={{ borderColor: "green.300" }}
              fontSize={{ base: "1rem", sm: "1.2rem" }}
              focusBorderColor="green.200"
              borderColor="green.400"
              borderRadius="1rem"
              width={{ base: "60%", md: "14rem" }}
              size={{ base: "sm", md: "md" }}
            >
              {users.map((userItem) => (
                <option key={userItem.id} value={userItem.id}>
                  {userItem.name}
                </option>
              ))}
            </Select>
          </FormControl>

          <Button type="submit" colorScheme="green" margin={{ base: "2rem 0" }}>
            Submit
          </Button>
        </form>
      </SimpleGrid>
    </Box>
  );
};
