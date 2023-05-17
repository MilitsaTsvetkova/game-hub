import { useState } from "react";
import { Button, Text } from "@chakra-ui/react";
interface ExpandableTextProps {
  children: string;
}

function ExpandableText({ children }: ExpandableTextProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const limit = 300;
  if (!children) return null;
  if (children.length <= limit) return <Text>{children}</Text>;
  const summary = isExpanded ? children : children.substring(0, limit) + "...";
  return (
    <Text>
      {summary}
      <Button
        onClick={() => setIsExpanded(!isExpanded)}
        size="xs"
        fontWeight="bold"
        colorScheme="yellow"
        marginLeft={1}
      >
        {isExpanded ? "Show Less" : "Read More"}
      </Button>
    </Text>
  );
}

export default ExpandableText;
