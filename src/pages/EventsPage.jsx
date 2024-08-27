import React, { useEffect } from "react";
import { useState } from "react";
import { Box, Heading, SimpleGrid, Flex } from "@chakra-ui/react";
import { useLoaderData, Link } from "react-router-dom";
import { FilterEvents } from "../components/Filter";
import { EventCard } from "../components/util/EventCard";

import { Message } from "../components/Messages";
import { SearchBar } from "../components/Search";

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

export const EventsPage = () => {
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

  // SEARCH & FILTER FUNCTION
  const [searchField, setSearchField] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const eventMatches = events.filter((item) => {
    // EVENT DATA
    const eventNames = item.title.toLowerCase();
    const eventCategories = item.categoryIds.toString();

    // QUERY DATA
    const searchQuery = searchField.toLowerCase();
    const filterQuery = selectedCategory;

    // RESULTS
    const searchResult = eventNames.includes(searchQuery);
    const filterResult = eventCategories.includes(filterQuery);

    if (searchResult && filterResult) {
      return item;
    }
  });

  const handleFilter = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleSearch = (event) => {
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
        <SearchBar onChange={handleSearch} />
        <FilterEvents onChange={handleFilter} />
      </Flex>

      <SimpleGrid
        width="100vw"
        className="event-list"
        columns={{ base: 1, md: 2, lg: 3, xl: 4 }}
        spacing={10}
        padding={{ base: "sm", sm: "sm", md: "md" }}
        margin={{ base: "sm", sm: "sm", md: "md" }}
      >
        {eventMatches.length < 1 ? (
          <Message text={"No events were found"} />
        ) : (
          eventMatches.map((event) => (
            <Link
              to={`event/${event.id}`}
              key={event.id}
              _hover={{ textDecorationStyle: "none" }}
            >
              <EventCard key={event.id} item={event} categories={categories} />
            </Link>
          ))
        )}
      </SimpleGrid>
    </Box>
  );
};
