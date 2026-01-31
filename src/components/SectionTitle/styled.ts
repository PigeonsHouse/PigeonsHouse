import styled from "@emotion/styled";
import { Color } from "../../definitions";

export const Container = styled.h1<{ isSmall: boolean }>`
  font-size: ${(props) => (props.isSmall ? 24 : 32)}px;
  text-align: center;
  margin: 0;
  margin-bottom: 8px;
  border-bottom: 2px solid ${Color.Gray};
  font-family: "M PLUS Rounded 1c";
  font-weight: bold;
`;
