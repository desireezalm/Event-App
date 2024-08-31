import React from "react";
import { Center, Heading } from "@chakra-ui/react";
import { useLoaderData } from "react-router-dom";
import { EventCardDetails } from "../components/util/EventCard";

export const loader = async ({ params }) => {
  const users = await fetch("http://localhost:3000/users");
  const eventItem = await fetch(
    `http://localhost:3000/events/${params.eventId}`
  );
  const categories = await fetch("http://localhost:3000/categories");

  return {
    users: await users.json(),
    eventItem: await eventItem.json(),
    categories: await categories.json(),
  };
};

export const EventPage = () => {
  const { eventItem, users, categories } = useLoaderData();
  return (
    <>
      <Heading
        textTransform="uppercase"
        margin="1.5rem 0"
        fontFamily="fantasy"
        letterSpacing="widest"
      >
        Cat Crew
      </Heading>
      <Center className="event-page">
        <EventCardDetails
          categories={categories}
          users={users}
          key={eventItem.id}
          item={eventItem}
        />
      </Center>
    </>
  );
};
