import { css } from "@emotion/react";
import styled from "@emotion/styled";

import type { IconProps } from "../../elements/Icon";
import { iconSizes } from "../../elements/Icon";
import {
  orderedBreakpoints,
  smallestBreakpoint,
} from "../../foundations/breakpoints";
import type { SpacingProps } from "../../foundations/spacing";
import { getSpacingStyles } from "../../foundations/spacing";
import type { Theme } from "../../foundations/theming";
import type { CustomTypography } from "../../foundations/typography";
import { optionalStyle } from "../../../../utils/optionalStyle";
import type { ButtonProps } from "./Button";

export const buttonTypographyVariants: Record<
  ButtonProps["size"],
  keyof CustomTypography
> = {
  small: "bodyExtraSmallBoldSerif",
  large: "h6BoldSerif",
};

function getWidthStyles(
  theme: Theme,
  width: ButtonProps["width"] = "contentWidth"
) {
  const widthObj =
    typeof width === "string" || "minWidth" in width
      ? { [smallestBreakpoint]: width }
      : width;

  return orderedBreakpoints.reduce((styles, breakpoint) => {
    let breakpointStyles;
    const breakpointWidth = widthObj[breakpoint];

    if (breakpointWidth === undefined) return styles;

    const minWidth =
      typeof breakpointWidth === "object" ? breakpointWidth.minWidth : "auto";
    const widthValue = breakpointWidth === "fullWidth" ? "100%" : "auto";

    breakpointStyles = `
      min-width: ${minWidth};
      width: ${widthValue};
    `;

    if (breakpoint !== smallestBreakpoint) {
      breakpointStyles = `${theme.breakpoints.up(
        breakpoint
      )} { ${breakpointStyles} }`;
    }

    return styles + breakpointStyles;
  }, "");
}

function getShapeStyles(
  theme: Theme,
  variant: ButtonProps["variant"],
  size: ButtonProps["size"]
) {
  let paddingLeftRight = theme.elements.button.sizes[size].paddingLeftRight;

  if (variant === "design-your-own" && size === "large") {
    paddingLeftRight = `calc(${paddingLeftRight} - 0.8125rem)`;
  }

  return `
    border-radius: ${theme.borders.radii.pill};
    padding: ${theme.elements.button.sizes[size].paddingTopBottom} ${paddingLeftRight};

    &::after {
      border-radius: ${theme.borders.radii.pill};
    }
  `;
}

function getHoverStyles(
  theme: Theme,
  variant: ButtonProps["variant"],
  size: ButtonProps["size"]
) {
  let defaultStyles = `
    transition: ${theme.transitions.create(["box-shadow"], {
      duration: theme.transitions.duration.shorter,
    })};
  `;

  let hoverStyles = `
    box-shadow: ${theme.elements.button.sizes[size].hoverDropLeft} ${theme.elements.button.sizes[size].hoverDropBottom} 0 ${theme.elements.button.variants[variant].hover.dropColor};
  `;

  let focusActiveDisableStyles = `
    box-shadow: none;
  `;

  if (variant === "design-your-own") {
    defaultStyles = `
      &::before {
        background: ${theme.elements.button.variants[variant].hover.dropColor};
        bottom: 0;
        content: '';
        height: 100%;
        left: 0;
        opacity: 0;
        position: absolute;
        transition: ${theme.transitions.create(["bottom", "left", "opacity"], {
          duration: theme.transitions.duration.shorter,
        })};
        width: 100%;
        z-index: -1;
        ${getShapeStyles(theme, variant, size)}
      }
    `;

    hoverStyles = `
      &::before {
        bottom: -${theme.elements.button.sizes[size].hoverDropBottom};
        left: ${theme.elements.button.sizes[size].hoverDropLeft};
        opacity: 1;
      }
    `;

    focusActiveDisableStyles = `
      &::before {
        bottom: 0;
        left: 0;
        opacity: 0;
        transition: none;
      }
    `;
  }

  return `
    ${defaultStyles}

    &:hover {
      color: ${optionalStyle(
        theme.elements.button.variants[variant].hover.color
      )};
      ${hoverStyles}

      &::after {
        background: ${optionalStyle(
          theme.elements.button.variants[variant].hover.background
        )};
        border-color: ${optionalStyle(
          theme.elements.button.variants[variant].hover.borderColor
        )};
      }
    }

    &:focus,
    &:active,
    &:disabled {
      ${focusActiveDisableStyles}
    }
  `;
}

const Button = styled("button")<
  Pick<ButtonProps, SpacingProps | "price" | "size" | "variant" | "width">
>(
  ({ size, theme }) => ({
    ...theme.typography[buttonTypographyVariants[size]],
  }),
  ({ theme, variant, size, width, price, ...props }) => css`
    ${getWidthStyles(theme, width)}
    ${getShapeStyles(theme, variant, size)}

    align-items: center;
    background: transparent;
    border: none;
    color: ${theme.elements.button.variants[variant].default.color};
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    max-width: 100%;
    position: relative;
    text-align: ${price ? "left" : "center"};
    text-decoration: none;
    z-index: 0;
    ${getSpacingStyles(theme, props)}

    &::after {
      background: ${theme.elements.button.variants[variant].default.background};
      border: ${theme.elements.button.sizes[size].borderWidth} solid
        ${theme.elements.button.variants[variant].default.borderColor};
      bottom: 0;
      content: "";
      left: 0;
      position: absolute;
      right: 0;
      top: 0;
      z-index: -1;
    }

    ${getHoverStyles(theme, variant, size)}

    &:focus {
      color: ${optionalStyle(
        theme.elements.button.variants[variant].focus.color
      )};
      outline: ${theme.elements.button.sizes[size].outlineWidth} solid
        ${theme.elements.button.variants[variant].focus.outlineColor};
      outline-offset: ${theme.borders.widths.md};

      &::after {
        background: ${optionalStyle(
          theme.elements.button.variants[variant].focus.background
        )};
        border-color: ${optionalStyle(
          theme.elements.button.variants[variant].focus.borderColor
        )};
      }
    }

    &:active {
      color: ${optionalStyle(
        theme.elements.button.variants[variant].active.color
      )};

      &::after {
        background: ${optionalStyle(
          theme.elements.button.variants[variant].active.background
        )};
        border-color: ${optionalStyle(
          theme.elements.button.variants[variant].active.borderColor
        )};
      }
    }

    &:disabled {
      color: ${optionalStyle(
        theme.elements.button.variants[variant].disabled.color
      )};
      cursor: not-allowed;
      text-decoration: none;

      &::after {
        background: ${optionalStyle(
          theme.elements.button.variants[variant].disabled.background
        )};
        border-color: ${optionalStyle(
          theme.elements.button.variants[variant].disabled.borderColor
        )};
      }
    }
  `
);

const IconWrapper = styled.span<
  Pick<ButtonProps, "disabled" | "size"> & {
    iconSize: Required<IconProps>["size"];
  }
>(
  ({ theme, size, iconSize, disabled }) => `
  flex-shrink: 0;
  height: 1em;
  margin-right: ${theme.spacing(size === "large" ? 1 : 0.5)};
  opacity: ${optionalStyle("0.5", !!disabled)};
  position: relative;
  width: ${iconSizes[iconSize]};

  > * {
    left: 0;
    position: absolute;
    top: calc((1em - ${iconSizes[iconSize]}) / 2);
  }
`
);

const ChildrenWrapper = styled("span")<Pick<ButtonProps, "price" | "wrap">>(
  ({ price, wrap }) => `
  display: block;
  flex-grow: ${optionalStyle("1", !!price)};
  overflow: ${optionalStyle("hidden", !wrap)};
  text-overflow: ${optionalStyle("ellipsis", !wrap)};
  white-space: ${optionalStyle("nowrap", !wrap)};
`
);

const PriceWrapper = styled.span`
  flex-shrink: 0;
  margin-left: ${({ theme }) => theme.spacing(0.5)};
`;

export const Styled = {
  Button,
  IconWrapper,
  ChildrenWrapper,
  PriceWrapper,
};
