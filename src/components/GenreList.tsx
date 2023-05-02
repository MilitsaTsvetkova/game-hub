import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImage from "../services/image-url";
import GenreListSkeleton from "./GenreListSkeleton";

function GenreList() {
  const { data: genres, isLoading, error } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6];
  if (error) return null;
  //   if (isLoading) return <Spinner />;
  return (
    <>
      {isLoading &&
        skeletons.map((skeleton) => <GenreListSkeleton key={skeleton} />)}
      <List>
        {genres.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                src={getCroppedImage(genre.image_background)}
                borderRadius={8}
              />
              <Text fontSize="lg">{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default GenreList;
