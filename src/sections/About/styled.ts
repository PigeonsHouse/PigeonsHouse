import styled from "@emotion/styled";

export const Container = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 0 8px;
  box-sizing: border-box;
  width: 100%;
`;

export const AboutContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`;

export const Avatar = styled.img`
  height: 100px;
  border-radius: 9999px;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Name = styled.h2`
  margin: 0;
  font-size: 32px;
  font-family: "M PLUS Rounded 1c";
  font-weight: 500;
`;

export const Description = styled.p`
  margin: 0;
`;
