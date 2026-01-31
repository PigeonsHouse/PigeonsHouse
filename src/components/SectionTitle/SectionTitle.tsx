import { isSmall, ViewportSize } from "../../types";
import { Container } from "./styled";

type SectionTitleProps = {
  title: string;
  vpSize: ViewportSize;
};

export const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  vpSize,
}) => <Container isSmall={isSmall(vpSize)}>{title}</Container>;
