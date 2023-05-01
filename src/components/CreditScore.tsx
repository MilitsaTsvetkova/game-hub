import { Badge } from "@chakra-ui/react";
import React from "react";
interface CreditScoreProps {
  score: number;
}

function CreditScore({ score }: CreditScoreProps) {
  const color = score > 75 ? "green" : score > 60 ? "yellow" : "";
  return (
    <Badge fontSize="14px" paddingY={2} borderRadius="4px" colorScheme={color}>
      {score}
    </Badge>
  );
}

export default CreditScore;
