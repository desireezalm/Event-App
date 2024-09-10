import React, { useEffect, useState } from "react";
import { Center, Heading } from "@chakra-ui/react";
import { useLoaderData } from "react-router-dom";
import { EventCardDetails } from "../components/util/EventCard";
import { LoadingState } from "../components/util/LoadingState";

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
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let ignore = false;
    setIsLoading(true);
    if (Object.entries(eventItem).length !== 0 && !ignore) {
      setIsLoading(false);
    }
    return () => {
      ignore = true;
    };
  });

  return (
    <>
      <Heading
        textTransform="uppercase"
        margin={{ base: "1.5rem 0", md: "2rem 0" }}
        fontFamily="fantasy"
        letterSpacing="widest"
        fontSize={{ md: "3rem" }}
        textAlign="center"
        width={{ md: "85%" }}
        display={{ md: "inline-block" }}
      >
        Cat Crew Event
      </Heading>
      <Center className="event-page">
        {isLoading ? (
          <LoadingState />
        ) : (
          <EventCardDetails
            categories={categories}
            users={users}
            key={eventItem.id}
            item={eventItem}
          />
        )}
      </Center>
    </>
  );
};
