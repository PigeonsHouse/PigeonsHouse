import { css } from "@emotion/css";
import { isMiddle, ViewportSize } from "../../types";

export const ActiveIconStyle = css`
  color: black;
`;

export const InactiveIconStyle = css`
  color: #ccc;
`;

export const IconStyle = (vpSize: ViewportSize) => css`
  && {
    width: ${isMiddle(vpSize) ? 36 : 40}px;
    height: ${isMiddle(vpSize) ? 36 : 40}px;
    display: block;
  }
`;
