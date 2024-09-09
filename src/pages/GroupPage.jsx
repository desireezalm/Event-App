import React from "react";
import { useLoaderData } from "react-router-dom";
import { Heading, Center } from "@chakra-ui/react";

export const loader = async ({ params }) => {
  const users = await fetch("http://localhost:3000/users");

  return {
    users: await users.json(),
  };
};

export const GroupPage = () => {
  const { users } = useLoaderData();
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
        Cat Crew Members
      </Heading>
      <Center className="group-page"></Center>
    </>
  );
};
