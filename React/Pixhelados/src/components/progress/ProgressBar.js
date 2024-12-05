import React from "react";
import { Progress } from "react95";
import { useProgress } from "../../hooks/useProgress";
import { Container } from "./ProgressBarStyles";

export const ProgressBar = () => {
  const { percent } = useProgress();

  return (
    <Container>
      <Progress variant="Default" value={Math.floor(percent)} />
    </Container>
  );
};

ProgressBar.story = {
  name: "default",
};
