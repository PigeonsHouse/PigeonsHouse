import { css } from "@emotion/css";
import styled from "@emotion/styled";

export const Container = styled.div<{ isSmall: boolean }>`
  border-radius: 8px;
  box-shadow: 4px 4px 8px #bbb;
  background-color: white;
  padding: 8px 16px;
  display: flex;
  gap: 8px;
  flex-direction: ${(props) => (props.isSmall ? "column" : "row")};
  align-items: ${(props) => (props.isSmall ? "center" : undefined)};
`;

export const ThumbnailContainer = styled.div`
  flex-shrink: 0;
  background-color: #ccc;
  aspect-ratio: 16 / 9;
  width: 100%;
  max-width: 360px;
`;

export const MiddleThumbnailContainerStyle = css`
  height: 100%;
  && {
    width: ${(140 / 9) * 16}px;
    max-width: 30%;
  }
`;

export const Thumbnail = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
  display: block;
`;

export const InfoContainer = styled.div`
  flex-grow: 1;
`;

export const Title = styled.h2<{ isSmall: boolean }>`
  margin: 0;
  font-size: 24px;
  font-weight: bold;
  font-family: "M PLUS Rounded 1c";
  ${(props) => (props.isSmall ? "text-align: center;" : undefined)}
`;

export const Description = styled.div`
  margin-bottom: 8px;
`;

export const Info = styled.div`
  font-size: 14px;
`;

export const LinkContainer = styled.div<{ isSmall: boolean }>`
  display: flex;
  gap: 16px;
  justify-content: ${(props) => (props.isSmall ? "space-evenly" : "flex-end")};
  margin-top: ${(props) => (props.isSmall ? 8 : 0)}px;
`;
