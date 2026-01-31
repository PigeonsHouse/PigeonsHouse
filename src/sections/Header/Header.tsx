import React from "react";
import { HeaderLink } from "../../components";
import { isLarge, isSmall, ViewportSize } from "../../types";
import {
  Avatar,
  Container,
  LinkContainer,
  StickyContainer,
  Subtitle,
  Title,
  TitleContainer,
} from "./styled";

type HeaderProps = {
  vpSize: ViewportSize;
};

export const Header: React.FC<HeaderProps> = ({ vpSize }) => {
  const isLargeVp = isLarge(vpSize);
  const isSmallVp = isSmall(vpSize);

  return (
    <StickyContainer>
      <Container>
        <TitleContainer>
          <Avatar src="/avatar.png" />
          {!isSmallVp && (
            <Title>
              {isLargeVp ? "PigeonsHouse's Portfolio" : "PigeonsHouse"}
            </Title>
          )}
          {isLargeVp && <Subtitle>鳩屋敷のお屋敷</Subtitle>}
        </TitleContainer>
        <LinkContainer>
          <HeaderLink variant="niconico" />
          <HeaderLink variant="twitter" />
          <HeaderLink variant="qiita" />
          <HeaderLink variant="github" />
          <HeaderLink variant="voskey" />
          <HeaderLink variant="soundcloud" />
        </LinkContainer>
      </Container>
    </StickyContainer>
  );
};
