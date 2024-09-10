import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import {
  Heading,
  Center,
  Card,
  CardHeader,
  CardBody,
  Text,
  Image,
  SimpleGrid,
  Flex,
  Box,
  ListItem,
  List,
} from "@chakra-ui/react";
import { Message } from "../components/Messages";
import { StarIcon } from "@chakra-ui/icons";
import { LoadingState } from "../components/util/LoadingState";

export const loader = async () => {
  const users = await fetch("http://localhost:3000/users");

  return {
    users: await users.json(),
  };
};

export const GroupPage = () => {
  const { users } = useLoaderData();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let ignore = false;
    setIsLoading(true);
    if (users.length !== 0 && !ignore) {
      setIsLoading(false);
    }
    return () => {
      ignore = true;
    };
  });

  return (
    <Box
      width="90vw"
      margin="0 auto"
      paddingBottom={{ base: "1rem", md: "1.9rem" }}
    >
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
        Cat Crew Members
      </Heading>
      <Center className="group-page">
        {isLoading ? (
          <LoadingState />
        ) : (
          <SimpleGrid
            width="80vw"
            className="group-list"
            columns={{ base: 1, sm: 2, md: 4 }}
            spacing={{ base: "1rem", sm: "1.5rem", md: "2rem" }}
            padding={{ base: "0", md: "0" }}
            margin="0 auto"
            marginTop={{ md: "3rem" }}
          >
            {users.length < 1 ? (
              <Message text={"No members were found"} />
            ) : (
              users.map((user) => (
                <Card
                  key={user.id}
                  className="user"
                  bgColor="green.200"
                  w={{ base: "100%", md: "80%" }}
                  h={{ base: "fit-content", md: "80%" }}
                  margin={{ base: "2rem 0", md: "2rem" }}
                  padding={{ base: 0, md: "2rem" }}
                  _hover={{ cursor: "pointer" }}
                >
                  <Image
                    objectFit="cover"
                    objectPosition="50% 50%"
                    src={user.image}
                    borderTopRadius="md"
                  />
                  <CardHeader>
                    <Flex
                      flexDirection={{ base: "row", md: "row" }}
                      flexWrap="nowrap"
                      justifyContent="flex-start"
                      gap={{ base: "1rem" }}
                      alignItems="center"
                      textAlign="center"
                      className="content-wrapper"
                    >
                      <StarIcon color="green.700" />
                      <Heading
                        as="h2"
                        size="sm"
                        color="green.700"
                        display="inline-block"
                        fontStyle="italic"
                      >
                        {user.name}
                      </Heading>
                    </Flex>
                  </CardHeader>
                  <CardBody>
                    <Flex
                      flexDirection="column"
                      justifyContent="flex-start"
                      alignItems="flex-start"
                    >
                      <Box className="age-wrapper">
                        <Text
                          fontSize={{ base: "sm", md: "md" }}
                          textAlign="start"
                          fontWeight="bold"
                          color="green.700"
                          display="inline-block"
                          marginRight={{ base: "0.4rem" }}
                        >
                          Age:{" "}
                        </Text>
                        <Text
                          fontSize={{ base: "sm", md: "md" }}
                          textAlign="start"
                          display="inline-block"
                          color="green.700"
                        >
                          {user.age}
                        </Text>
                      </Box>
                      <Flex
                        className="hobbies-wrapper"
                        flexDirection="column"
                        marginTop={{ base: "1rem" }}
                      >
                        <Text
                          fontSize={{ base: "sm", md: "md" }}
                          textAlign="start"
                          fontWeight="bold"
                          color="green.700"
                          marginRight={{ base: "0.4rem" }}
                        >
                          Hobbies:{" "}
                        </Text>
                        <List styleType="'- '" color="green.700">
                          {user.hobbies.map((hobby) => (
                            <ListItem key={hobby}>
                              <Text
                                fontSize={{ base: "sm", md: "md" }}
                                textAlign="start"
                                color="green.700"
                              >
                                {hobby[0].toUpperCase() + hobby.slice(1)}
                              </Text>
                            </ListItem>
                          ))}
                        </List>
                      </Flex>
                    </Flex>
                  </CardBody>
                </Card>
              ))
            )}
          </SimpleGrid>
        )}
      </Center>
    </Box>
  );
};
