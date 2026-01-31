import styled from "@emotion/styled";

export const StickyContainer = styled.div`
  position: sticky;
  top: 0;
  color: #fff;
  background-color: #282828;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  height: 64px;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  height: 100%;
`;

export const Avatar = styled.img`
  border-radius: 8px;
  height: 40px;
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 32px;
  font-family: "M PLUS Rounded 1c";
`;

export const Subtitle = styled.h2`
  margin: 0;
  margin-top: 16px;
  font-size: 16px;
  font-family: "M PLUS Rounded 1c";
  font-weight: normal;
`;

export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  height: 32px;
  gap: 16px;
`;
