import { SimpleGrid, Text } from "@chakra-ui/react";
import CreditScore from "./CreditScore";
import DefinitionItem from "./DefinitionItem";
import { Game } from "../entities/Game";
interface GameAttributesProps {
  game: Game;
}

function GameAttributes({ game }: GameAttributesProps) {
  return (
    <SimpleGrid columns={2} as="dl">
      <DefinitionItem term="Platforms">
        {game.parent_platforms?.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </DefinitionItem>
      <DefinitionItem term="Metascore">
        <CreditScore score={game.metacritic} />
      </DefinitionItem>
      <DefinitionItem term="Genres">
        {game.genres?.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </DefinitionItem>
      <DefinitionItem term="Publishers">
        {game.publishers?.map((publisher) => (
          <Text key={publisher.id}>{publisher.name}</Text>
        ))}
      </DefinitionItem>
    </SimpleGrid>
  );
}

export default GameAttributes;
