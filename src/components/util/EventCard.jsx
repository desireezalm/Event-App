import {
  Box,
  Card,
  CardHeader,
  CardFooter,
  CardBody,
  Text,
  Image,
  Tag,
  Flex,
  IconButton,
  Stack,
  Heading,
  Center,
  Grid,
  GridItem,
} from "@chakra-ui/react";

import { useData } from "../../context/DataContext";

import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import { TextLabel } from "./TextLabel";

// EVENTS PAGE OVERVIEW

export const EventCard = ({ item, categories }) => {
  const { matchId } = useData();
  return (
    <Card
      key={item.id}
      className="event"
      bgColor="green.200"
      w={{ base: "100%", md: "22rem" }}
      h={{ base: "fit-content", md: "43rem" }}
      minHeight="fit-content"
      margin="0 auto"
      padding="0"
      categories={categories}
    >
      {" "}
      <Flex
        flexDirection={{ base: "column" }}
        height="100%"
        alignItems="space-between"
      >
        <Image
          objectFit="cover"
          objectPosition="50% 50%"
          src={item.image}
          borderTopRadius="md"
        />
        <CardHeader>
          <Heading as="h2" size="sm">
            {item.title}
          </Heading>
        </CardHeader>
        <CardBody minHeight="4rem">
          <Text fontSize="sm" textAlign="start">
            {item.description.slice(0, 200)}
            {item.description.length > 200 ? "(...)" : ""}
          </Text>
          <Box marginTop="1.5rem" textAlign="start">
            <Text fontSize="xs">
              <b>Start: </b>
              {new Date(item.startTime).toLocaleString().slice(0, -3)}
            </Text>
            <Text fontSize="xs">
              <b>End: </b>
              {new Date(item.endTime).toLocaleString().slice(0, -3)}
            </Text>
          </Box>
        </CardBody>
        <CardFooter>
          <Flex
            gap={2}
            wrap="wrap"
            alignSelf="center"
            justifyContent="start"
            fontSize="xs"
            fontWeight="bold"
          >
            Category:
            {item.categoryIds.map((categoryId) => (
              <Tag
                bgColor="green.100"
                color="green.700"
                fontSize="xs"
                key={categoryId}
                width="fit-content"
              >
                {matchId(categoryId, categories, "string")}
              </Tag>
            ))}
          </Flex>
        </CardFooter>
      </Flex>
    </Card>
  );
};

// DETAILED EVENT PAGE
export const EventCardDetails = ({ item, categories, users }) => {
  const { matchId } = useData();
  return (
    <Card
      key={item.id}
      className="event"
      bgColor="green.200"
      w={{ base: "90%", md: "80%" }}
      h={{ base: "fit-content", md: "80%" }}
      margin={{ base: "2rem 0", md: "2rem" }}
      padding={{ base: 0, md: "2rem" }}
      categories={categories}
    >
      <Center>
        <Grid
          gridTemplateColumns={{ base: "90vw", md: "40vw 35vw" }}
          templateAreas={{
            base: `
                "image"
                "header"
                "body"
                "footer"
              `,
            md: `
                "header image"
                "body image"
                "footer footer"
              `,
          }}
        >
          <GridItem area="image">
            <Image
              objectFit="cover"
              objectPosition="50% 50%"
              src={item.image}
              borderTopRadius={{ base: "md", md: "2xl" }}
              borderBottomRadius={{ base: 0, md: "2xl" }}
              boxShadow={{ base: 0, md: "0 4px 15px rgb(0 0 0 / 0.3)" }}
            />
          </GridItem>
          <GridItem area="header">
            <CardHeader>
              <Heading as="h2" size={{ base: "md", md: "xl" }}>
                Event: <em>{item.title}</em>
              </Heading>
            </CardHeader>
          </GridItem>
          <GridItem area="body">
            <CardBody minHeight="14rem">
              <Stack direction="column" padding={{ base: "0.5rem" }}>
                <Text fontSize={{ base: "sm", md: "md" }} textAlign="start">
                  {item.description}
                </Text>
                <Flex
                  className="created-by"
                  gap={2}
                  wrap="wrap"
                  flexDirection="row"
                  width="100%"
                  alignSelf="flex-start"
                  justifyContent="flex-start"
                  alignItems="center"
                  paddingTop="2rem"
                >
                  <TextLabel text={"Created by: "} />
                  <Stack
                    direction="row"
                    className="user-box"
                    key={item.createdBy}
                    _hover={{ bgColor: "green.300" }}
                    fontSize={{ base: "sm", md: "md" }}
                    spacing="0.8rem"
                    borderRadius="md"
                    width="fit-content"
                    padding="0.7rem"
                    marginLeft="1rem"
                  >
                    <Image
                      objectFit="cover"
                      boxSize="2rem"
                      objectPosition="50% 50%"
                      src={matchId(item.createdBy, users, "image")}
                      borderRadius="md"
                    />
                    <Text fontSize={{ base: "sm", md: "md" }} padding="0.25rem">
                      {matchId(item.createdBy, users, "string")}
                    </Text>
                  </Stack>
                </Flex>
                <Flex
                  flexDirection={{ base: "column", md: "row" }}
                  paddingTop="1rem"
                  textAlign="start"
                  gap={{ base: 0, md: 4 }}
                >
                  <TextLabel text={"Date: "} />
                  <Text fontSize={{ base: "sm", md: "md" }}>
                    <b>Start: </b>
                    {new Date(item.startTime).toLocaleString().slice(0, -3)}
                  </Text>
                  <Text fontSize={{ base: "sm", md: "md" }}>
                    <b>End: </b>
                    {new Date(item.endTime).toLocaleString().slice(0, -3)}
                  </Text>
                </Flex>

                <Flex
                  className="location"
                  gap={2}
                  wrap="wrap"
                  flexDirection="row"
                  width="100%"
                  alignSelf="flex-start"
                  justifyContent="flex-start"
                  alignItems="center"
                  paddingTop="2rem"
                >
                  <TextLabel text={"Location: "} />
                  <Text fontSize={{ base: "sm", md: "md" }}>
                    {item.location}
                  </Text>
                </Flex>

                <Flex
                  gap={2}
                  wrap="wrap"
                  alignSelf="flex-start"
                  justifyContent="start"
                  paddingTop="1rem"
                  paddingBottom="1rem 0"
                >
                  <TextLabel text={"Category: "} />

                  {item.categoryIds.map((categoryId) => (
                    <Tag
                      bgColor="green.100"
                      color="green.700"
                      fontSize={{ base: "sm", md: "md" }}
                      key={categoryId}
                      width="fit-content"
                    >
                      {matchId(categoryId, categories, "string")}
                    </Tag>
                  ))}
                </Flex>
              </Stack>
            </CardBody>
          </GridItem>
          <GridItem area="footer">
            <CardFooter
              gap="1rem"
              alignSelf="flex-end"
              marginTop={{ base: 0, md: "2rem" }}
            >
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
          </GridItem>
        </Grid>
      </Center>
    </Card>
  );
};
