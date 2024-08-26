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
} from "@chakra-ui/react";
import { FormTextInput } from "../components/util/InputField";
import { FormTextLabel } from "../components/util/TextLabel";

export const AddEvent = () => {
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
            className="event-title"
            marginBottom={{ base: "0.5rem" }}
            isRequired
          >
            <FormTextLabel text={"Event name: "} />
            <FormTextInput placeholder={"Example: Catnip Party"} />
          </FormControl>
          <FormControl
            className="event-image"
            isRequired
            marginBottom={{ base: "0.5rem" }}
          >
            <FormTextLabel text={"Image url: "} />
            <FormTextInput
              type="url"
              placeholder="https://www.example.com/image.jpg"
            ></FormTextInput>
          </FormControl>
          <FormControl
            className="event-description"
            marginBottom={{ base: "1rem" }}
            isRequired
          >
            <FormTextLabel text={"Description: "} />
            <Textarea
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
            className="event-location"
            marginBottom={{ base: "0.5rem" }}
            isRequired
          >
            <FormTextLabel text={"Location: "} />
            <FormTextInput placeholder={"Example: Our basement"} />
          </FormControl>
          <FormControl
            className="event-start"
            marginBottom={{ base: "0.5rem" }}
            isRequired
          >
            <FormTextLabel text={"Starting time: "} />
          </FormControl>
          <FormControl
            className="event-end"
            marginBottom={{ base: "0.5rem" }}
            isRequired
          >
            <FormTextLabel text={"Ending time: "} />
          </FormControl>
          <FormControl
            className="event-createdby"
            marginBottom={{ base: "0.5rem" }}
            isRequired
          >
            <FormTextLabel text={"Created by: "} />
          </FormControl>

          <Button type="submit" colorScheme="green" margin={{ base: "2rem 0" }}>
            Submit
          </Button>
        </form>
      </SimpleGrid>
    </Box>
  );
};
