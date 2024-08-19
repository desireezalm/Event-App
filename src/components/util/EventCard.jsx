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
  Link,
  Heading,
} from "@chakra-ui/react";

import { EditIcon, DeleteIcon } from "@chakra-ui/icons";

export const EventCard = ({ item, clickFn, categories }) => {
  const compareCategory = (categoryId, categoryList) => {
    const id = categoryId;
    const comparison = categoryList.find((categoryItem) => {
      if (categoryItem.id === id) {
        return categoryItem.id === id;
      }
    });
    const result = comparison.name[0].toUpperCase() + comparison.name.slice(1);
    return result;
  };

  return (
    <Card
      key={item.id}
      className="event"
      bgColor="green.200"
      w={{ base: "90vw", sm: "22rem" }}
      h={{ base: "fit-content", sm: "46rem" }}
      margin="1rem"
      onClick={() => clickFn(item)}
      categories={categories}
    >
      <Stack>
        <Link to={`event/${item.id}`}>
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
          <CardBody minHeight="14rem">
            <Text fontSize="sm">{item.description}</Text>
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
              {item.categoryIds.map((categoryId) => (
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
          <CardFooter gap="1rem" alignSelf="flex-end">
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
      </Stack>
    </Card>
  );
};
