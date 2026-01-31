import React from "react";
import { SectionTitle } from "../../components";
import { ViewportSize } from "../../types";
import {
  Avatar,
  Container,
  Description,
  AboutContainer,
  InfoContainer,
  Name,
} from "./styled";

type AboutProps = {
  vpSize: ViewportSize;
};

export const About: React.FC<AboutProps> = ({ vpSize }) => {
  return (
    <Container>
      <SectionTitle title="About" vpSize={vpSize} />
      <AboutContainer>
        <Avatar src="/avatar.png" />
        <InfoContainer>
          <Name>鳩屋敷</Name>
          <Description>
            Webエンジニア。東京某社で働いている。趣味はプログラミング、動画サイト徘徊、パズル。
            <br />
            また、ニコニコ動画で音MADやボイロ動画を作成し投稿している。
          </Description>
        </InfoContainer>
      </AboutContainer>
    </Container>
  );
};
