import { css } from "@emotion/css";
import { Color, isMiddle, ViewportSize } from "../../definitions";

export const ActiveIconStyle = css`
  color: ${Color.Black};
`;

export const InactiveIconStyle = css`
  color: ${Color.LightGray};
`;

export const IconStyle = (vpSize: ViewportSize) => css`
  && {
    width: ${isMiddle(vpSize) ? 36 : 40}px;
    height: ${isMiddle(vpSize) ? 36 : 40}px;
    display: block;
  }
`;
