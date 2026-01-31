import styled from "@emotion/styled";
import { Color } from "../../definitions";

export const Link = styled.a`
  height: 100%;
  color: ${Color.White};
  display: block;
  & > svg {
    font-size: 32px;
  }
  & > img {
    height: 100%;
    display: block;
  }
`;
