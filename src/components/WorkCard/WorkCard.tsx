import React from "react";
import { isSmall, ViewportSize } from "../../definitions";
import { WorkData } from "../../types";
import { WorkLink } from "../WorkLink";
import {
  Container,
  Description,
  Info,
  InfoContainer,
  LinkContainer,
  MiddleThumbnailContainerStyle,
  Thumbnail,
  ThumbnailContainer,
  Title,
} from "./styled";

type CardProps = {
  data: WorkData;
  vpSize: ViewportSize;
};

export const WorkCard: React.FC<CardProps> = ({ data, vpSize }) => {
  const isSmallVp = isSmall(vpSize);

  return (
    <Container isSmall={isSmallVp}>
      <ThumbnailContainer
        className={!isSmallVp ? MiddleThumbnailContainerStyle : undefined}
      >
        <Thumbnail src={data.thumbnail} />
      </ThumbnailContainer>
      <InfoContainer>
        <Title isSmall={isSmallVp}>{data.name}</Title>
        <Description>{data.description}</Description>
        <Info>
          <b>GENRE</b>: {data.genre}
        </Info>
        <Info>
          <b>制作時期</b>: {data.created_at}
        </Info>
        <LinkContainer isSmall={isSmallVp}>
          <WorkLink variant="link" url={data.url} vpSize={vpSize} />
          <WorkLink variant="github" url={data.source_url} vpSize={vpSize} />
          <WorkLink
            variant="download"
            url={data.download_url}
            vpSize={vpSize}
          />
        </LinkContainer>
      </InfoContainer>
    </Container>
  );
};
