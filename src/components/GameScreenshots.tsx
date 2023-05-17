import React from "react";
import useScreenshots from "../hooks/useScreenshots";
import { Image, SimpleGrid } from "@chakra-ui/react";
interface GameScreenshotsProps {
  gameId: number;
}

const GameScreenshots = ({ gameId }: GameScreenshotsProps) => {
  const { data, isLoading, error } = useScreenshots(gameId);
  if (isLoading) return null;
  if (error) throw error;
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
      {data?.results.map((file) => (
        <Image src={file.image} key={file.id} />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshots;
