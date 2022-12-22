import styled from "@emotion/styled";

import { getSpacingStyles } from "../../foundations/spacing";
import { Typography, TypographyProps } from "../Typography";
import type { ParagraphProps } from "./Paragraph";

type StyledParagraphProps = TypographyProps & Omit<ParagraphProps, "variant">;

const Paragraph = styled(Typography)<StyledParagraphProps>(
  ({ theme, ...props }) => getSpacingStyles(theme, props)
);

export const Styled = {
  Paragraph,
};
