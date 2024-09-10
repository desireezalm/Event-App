import React, { useEffect } from "react";
import { useState } from "react";
import { Box, Heading, SimpleGrid, Flex } from "@chakra-ui/react";
import { useLoaderData, Link } from "react-router-dom";
import { FilterEvents } from "../components/Filter";
import { EventCard } from "../components/util/EventCard";

import { Message } from "../components/Messages";
import { SearchBar } from "../components/Search";
import { LoadingState } from "../components/util/LoadingState";

export const loader = async () => {
  const events = await fetch("http://localhost:3000/events");
  const categories = await fetch("http://localhost:3000/categories");

  return {
    events: await events.json(),
    categories: await categories.json(),
  };
};

export const EventsPage = () => {
  // LOADER DATA
  const { events } = useLoaderData();
  const { categories } = useLoaderData();

  // SEARCH & FILTER FUNCTION
  const [searchField, setSearchField] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let ignore = false;
    setIsLoading(true);
    if (events.length !== 0 && !ignore) {
      setIsLoading(false);
    }
    return () => {
      ignore = true;
    };
  });

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
    <Box
      width="100%"
      margin="0 auto"
      paddingBottom={{ base: "1rem", md: "2rem" }}
    >
      <Heading
        textTransform="uppercase"
        margin="1.5rem 0"
        fontFamily="fantasy"
        letterSpacing="widest"
        fontSize={{ md: "4rem" }}
        textAlign={{ base: "center", md: "center" }}
      >
        Cat Crew Events
      </Heading>

      <Flex
        className="options-bar"
        flexDirection={{ base: "column", md: "row" }}
        padding="0 1rem 1rem 1rem"
        gap={{ base: "1rem", sm: "2rem", md: "2rem" }}
        justifyContent={{ md: "center" }}
        alignContent={{ md: "center" }}
      >
        <SearchBar onChange={handleSearch} />
        <FilterEvents onChange={handleFilter} />
      </Flex>

      {isLoading ? (
        <LoadingState />
      ) : (
        <SimpleGrid
          width="80vw"
          className="event-list"
          columns={{ base: 1, sm: 1, md: 2, lg: 3 }}
          spacing={{ base: "1rem", sm: "1.5rem", md: "2rem" }}
          padding={{ base: "0", md: "0" }}
          margin="0 auto"
          marginTop={{ md: "3rem" }}
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
                <EventCard
                  key={event.id}
                  item={event}
                  categories={categories}
                />
              </Link>
            ))
          )}
        </SimpleGrid>
      )}
    </Box>
  );
};
