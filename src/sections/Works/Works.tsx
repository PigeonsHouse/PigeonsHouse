import React from "react";
import { SectionTitle, WorkCard } from "../../components";
import { ViewportSize, WorkData } from "../../types";
import { CardsContainer, Container } from "./styled";

type WorksProps = {
  works: WorkData[];
  vpSize: ViewportSize;
};

export const Works: React.FC<WorksProps> = ({ works, vpSize }) => {
  return (
    <Container>
      <SectionTitle title="Works" vpSize={vpSize} />
      <CardsContainer>
        {works.map((work, idx) => (
          <WorkCard key={idx} data={work} vpSize={vpSize} />
        ))}
      </CardsContainer>
    </Container>
  );
};
