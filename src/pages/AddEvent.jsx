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
      width={{ base: "80vw", md: "85%" }}
      height={{ base: "full", md: "85%" }}
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
