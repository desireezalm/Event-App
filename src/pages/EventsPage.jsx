import React from "react";
import {
  Box,
  Heading,
  Stack,
  Text,
  Image,
  Tag,
  Flex,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  IconButton,
} from "@chakra-ui/react";
import { useLoaderData, Link } from "react-router-dom";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";

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
  const { events, users, categories } = useLoaderData();
  //console.log("Events: ", events);
  //console.log("Users: ", users);
  //console.log("Categories: ", categories);

  const compareCategory = (categoryId, categoryArray) => {
    const id = categoryId;
    const comparison = categoryArray.find((categoryItem) => {
      if (categoryItem.id === id) {
        return categoryItem.id === id;
      }
    });
    const result = comparison.name[0].toUpperCase() + comparison.name.slice(1);
    return result;
  };

  return (
    <Box>
      <Heading textTransform="uppercase" margin="1rem 0 ">
        List of events
      </Heading>
      <Stack className="event-list" alignItems="center">
        {events.map((event) => (
          <Card
            key={event.id}
            className="event"
            width="90vw"
            bgColor="green.200"
          >
            <Link to={`event/${event.id}`}>
              <Image
                objectFit="cover"
                objectPosition="50% 50%"
                src={event.image}
                borderTopRadius="md"
              />
              <CardHeader>
                <Heading as="h2" size="sm">
                  {event.title}
                </Heading>
              </CardHeader>
              <CardBody>
                <Text fontSize="sm">{event.description}</Text>
                <Box marginTop="1.5rem" textAlign="start">
                  <Text fontSize="xs">
                    <b>Start: </b>
                    {new Date(event.startTime).toLocaleString().slice(0, -3)}
                  </Text>
                  <Text fontSize="xs">
                    <b>End: </b>
                    {new Date(event.endTime).toLocaleString().slice(0, -3)}
                  </Text>
                </Box>
                <Flex
                  gap={2}
                  wrap="wrap"
                  alignSelf="center"
                  justifyContent="start"
                  paddingBottom="1rem"
                  marginTop="2rem"
                  fontSize="xs"
                  fontWeight="bold"
                >
                  Category:
                  {event.categoryIds.map((categoryId) => (
                    <Tag
                      bgColor="green.100"
                      color="green.700"
                      fontSize="xs"
                      key={categoryId}
                      width="fit-content"
                    >
                      {compareCategory(categoryId, categories)}
                    </Tag>
                  ))}
                </Flex>
              </CardBody>
              <CardFooter gap="1rem">
                <IconButton
                  aria-label="Edit Event"
                  colorScheme="green"
                  color="white"
                  _hover={{ color: "yellow.400", bgColor: "green.700" }}
                  size="lg"
                  variant="solid"
                  fontSize="lg"
                  icon={<EditIcon />}
                />
                <IconButton
                  aria-label="Delete Event"
                  colorScheme="green"
                  color="white"
                  _hover={{ color: "red.400", bgColor: "green.700" }}
                  size="lg"
                  variant="solid"
                  fontSize="lg"
                  icon={<DeleteIcon />}
                />
              </CardFooter>
            </Link>
          </Card>
        ))}
      </Stack>
    </Box>
  );
};
