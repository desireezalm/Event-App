//import { useState } from "react";
import { Box, Heading, Flex } from "@chakra-ui/react";

import { useLoaderData, useNavigate } from "react-router-dom";
import { EventForm } from "../components/EventForm";

export const loader = async () => {
  const users = await fetch("http://localhost:3000/users");
  const categories = await fetch(`http://localhost:3000/categories`);
  const events = await fetch("http://localhost:3000/events");

  return {
    users: await users.json(),
    categories: await categories.json(),
    events: await events.json(),
  };
};

export const AddEvent = () => {
  const { categories, users, events } = useLoaderData();
  const navigate = useNavigate();

  const createEvent = async (eventObject) => {
    console.log("Create event: ", eventObject);
    try {
      const response = await fetch("http://localhost:3000/events", {
        method: "POST",
        body: JSON.stringify(eventObject),
        headers: { "Content-Type": "application/json;charset=utf-8" },
      });

      if (!response.ok) {
        throw new Error(
          `Failed to create a new event. Status: ${response.status}`
        );
      }

      const id = (await response.json()).id;

      navigate(`/event/${id}`);
    } catch (error) {
      console.error(`
        An error occurred while creating your event: , ${error}. 
        Please try again or contact our support.`);
    }
  };

  return (
    <Box
      className="add-event"
      width={{ base: "100vw", md: "85%" }}
      height={{ base: "full", md: "full" }}
      margin="0 auto"
      padding={{ base: "1rem", md: "1.5rem" }}
    >
      <Heading
        textTransform="uppercase"
        margin="1.5rem 0"
        paddingBottom={{ base: "1rem", md: "2.5rem" }}
        fontFamily="fantasy"
        letterSpacing="widest"
        fontSize={{ base: "2xl", md: "4xl" }}
        textAlign="center"
      >
        Add a new event
      </Heading>

      <Flex justifyContent="center" textAlign="start">
        <EventForm
          events={events}
          users={users}
          categories={categories}
          createEvent={createEvent}
        />
      </Flex>
    </Box>
  );
};

/*
<form>
          <Grid
            gridTemplateColumns={{ base: "1fr", md: "40vw 40%" }}
            templateAreas={{
              base: `
                "title"
                "image"
                "description"
                "location"
                "start"
                "end"
                "category"
                "created-by"
                "button"
              `,
              md: `
                "title start"
                "image end"
                "location created-by"
                "description category"
                "button button"
              `,
            }}
            gap="0.2rem"
          >
            <GridItem area="title">
              <FormControl
                className="form-title"
                marginBottom={{ base: "1rem", md: "1.5rem" }}
                isRequired
              >
                <FormTextLabel htmlFor="event-title" text={"Event name: "} />
                <FormTextInput
                  id="event-title"
                  placeholder={"Example: Catnip Party"}
                  onChange={(e) => setEventTitle(e.target.value)}
                  value={eventTitle}
                />
              </FormControl>
            </GridItem>

            <GridItem area="image">
              <FormControl
                className="form-image"
                isRequired
                marginBottom={{ base: "1rem", md: "1.5rem" }}
              >
                <FormTextLabel htmlFor="event-image" text={"Image url: "} />
                <FormTextInput
                  id="event-image"
                  type="url"
                  placeholder="https://www.example.com/image.jpg"
                  onChange={(e) => setImageUrl(e.target.value)}
                  value={imageUrl}
                ></FormTextInput>
              </FormControl>
            </GridItem>
            <GridItem area="description">
              <FormControl
                className="form-description"
                marginBottom={{ base: "1rem", md: "1.5rem" }}
                isRequired
              >
                <FormTextLabel
                  htmlFor="event-description"
                  text={"Description: "}
                />
                <Textarea
                  id="event-description"
                  placeholder="Example: Come try out our new catnip selection!"
                  variant="outline"
                  colorScheme="green"
                  color="green.400"
                  _placeholder={{ opacity: 0.8, color: "green.600" }}
                  _hover={{ borderColor: "green.300" }}
                  fontSize={{ base: "1rem", md: "1.1rem" }}
                  padding={{ base: "1rem", md: "1.2rem" }}
                  margin={{ md: "2rem 0" }}
                  focusBorderColor="green.200"
                  borderColor="green.400"
                  borderRadius="0.8rem"
                  width={{ base: "95%", md: "70%" }}
                  height={{ md: "9rem" }}
                  onChange={(e) => setEventDescription(e.target.value)}
                  value={eventDescription}
                />
              </FormControl>
            </GridItem>

            <GridItem area="category">
              <FormControl
                className="form-category"
                marginBottom={{ base: "1rem", md: "1.5rem" }}
              >
                <Stack>
                  <FormTextLabel htmlFor="event-category" text={"Category: "} />
                  <Text fontSize="xs" fontWeight="light" color="red.400">
                    Please choose at least one category.
                  </Text>
                  {categories.map((category) => (
                    <Checkbox
                      key={category.id}
                      value={category.id}
                      id={category.id}
                      name="event-category"
                      colorScheme="green"
                      iconColor="black"
                      color="green.400"
                      fontSize={{ base: "1rem", md: "1.1rem" }}
                      fontWeight="light"
                      borderColor="green.400"
                      onChange={handleCheckbox}
                    >
                      {category.name[0].toUpperCase() + category.name.slice(1)}
                    </Checkbox>
                  ))}
                </Stack>
              </FormControl>
            </GridItem>

            <GridItem area="location">
              <FormControl
                className="form-location"
                marginBottom={{ base: "1rem", md: "1.5rem" }}
                isRequired
              >
                <FormTextLabel htmlFor="event-location" text={"Location: "} />
                <FormTextInput
                  id="event-location"
                  placeholder={"Example: Our basement"}
                  onChange={(e) => setEventLocation(e.target.value)}
                  value={eventLocation}
                />
              </FormControl>
            </GridItem>

            <GridItem area="start">
              <FormControl
                className="form-start"
                marginBottom={{ base: "1rem", md: "1.5rem" }}
                isRequired
              >
                <FormTextLabel htmlFor="event-start" text={"Starting time: "} />
                <FormTimeInput
                  id="event-start"
                  onChange={(e) => setEventStart(e.target.value)}
                  value={eventStart}
                />
              </FormControl>
            </GridItem>

            <GridItem area="end">
              <FormControl
                className="form-end"
                marginBottom={{ base: "1rem", md: "1.5rem" }}
                isRequired
              >
                <FormTextLabel htmlFor="event-end" text={"Ending time: "} />
                <FormTimeInput
                  id="event-end"
                  onChange={(e) => setEventEnd(e.target.value)}
                  value={eventEnd}
                />
              </FormControl>
            </GridItem>

            <GridItem area="created-by">
              <FormControl
                className="form-createdby"
                marginBottom={{ base: "1rem", md: "1.5rem" }}
                isRequired
              >
                <FormTextLabel
                  htmlFor="event-createdby"
                  text={"Created by: "}
                />
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
                  fontSize={{ base: "1rem", md: "1.1rem" }}
                  focusBorderColor="green.200"
                  borderColor="green.400"
                  borderRadius="1rem"
                  width={{ base: "60%", md: "14rem" }}
                  size={{ base: "sm", md: "md" }}
                  onChange={(e) => setAuthor(Number(e.target.value))}
                  value={author}
                >
                  {users.map((userItem) => (
                    <option key={userItem.id} value={userItem.id}>
                      {userItem.name}
                    </option>
                  ))}
                </Select>
              </FormControl>
            </GridItem>

            <GridItem area="button" textAlign="center">
              <Button
                onClick={handleSubmit}
                type="button"
                colorScheme="green"
                margin={{ base: "2rem 0", md: "2rem auto" }}
                width={{ md: "8rem" }}
                padding={{ base: "1rem" }}
              >
                Submit
              </Button>
            </GridItem>
          </Grid>
        </form>
*/
