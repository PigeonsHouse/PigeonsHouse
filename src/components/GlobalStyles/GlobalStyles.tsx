import { css, Global } from "@emotion/react";

const style = css`
  margin: 0;
  background-color: #f0f0f0;
  font-family: "Noto Sans JP", sans-serif;
`;
export const GlobalStyles = () => <Global styles={style} />;
