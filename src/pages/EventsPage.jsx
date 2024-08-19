import React, { useEffect } from "react";
import { useState } from "react";
import { Box, Heading, SimpleGrid, Flex, Icon } from "@chakra-ui/react";
import { useLoaderData } from "react-router-dom";
import { Search2Icon } from "@chakra-ui/icons";
import { FilterEvents } from "../components/Filter";
import { InputField } from "../components/util/InputField";
import { EventCard } from "../components/util/EventCard";

export const loader = async () => {
  const users = await fetch("http://localhost:3000/users");
  const events = await fetch("http://localhost:3000/events");
  const categories = await fetch("http://localhost:3000/categories");

  return {
    users: await users.json(),
    events: await events.json(),
    categories: await categories.json(),
  };
};

export const EventsPage = ({ clickFn }) => {
  // LOADER DATA
  const { events } = useLoaderData();
  const { categories } = useLoaderData();
  const { users } = useLoaderData();

  // STATIC DATA FETCH
  const [userList, setUserList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("http://localhost:3000/users");
      const data = await response.json();
      setUserList(data);
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch("http://localhost:3000/categories");
      const data = await response.json();
      setCategoryList(data);
    };
    fetchCategories();
  }, []);

  // SEARCH BAR
  const [searchField, setSearchField] = useState("");
  const eventMatches = events.filter((item) => {
    const eventNames = item.title.toLowerCase();
    const results = eventNames.includes(searchField.toLowerCase());
    return results;
  });

  const changeFn = (event) => {
    setSearchField(event.target.value);
  };

  return (
    <Box width="100vw" margin="0 auto">
      <Heading
        textTransform="uppercase"
        margin="1.5rem 0"
        fontFamily="fantasy"
        letterSpacing="widest"
      >
        Cat Crew Events
      </Heading>

      <Flex
        className="options-bar"
        flexDirection={{ base: "column", md: "row" }}
        padding="0 1rem 1rem 1rem"
        gap={{ base: 2, md: 4 }}
      >
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
          <InputField onChange={changeFn} />
        </Flex>
        <FilterEvents />
      </Flex>

      <SimpleGrid
        className="event-list"
        columns={{ base: 1, md: 2, lg: 3, xl: 4 }}
        gridGap="2rem"
      >
        {eventMatches.map((event) => (
          <EventCard key={event.id} item={event} categories={categories} />
        ))}
      </SimpleGrid>
    </Box>
  );
};
