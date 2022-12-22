import { css } from "@emotion/react";
import styled from "@emotion/styled";

import { Typography, TypographyProps } from "../Typography";
import type { HeadingProps } from "./Heading";

type StyledHeadingProps = TypographyProps &
  Omit<HeadingProps, "tag" | "children">;

const Heading = styled(Typography)<StyledHeadingProps>(
  ({ theme, ...props }) => css`
    color: "red";
    hyphens: auto;
  `
);

export const Styled = {
  Heading,
};
