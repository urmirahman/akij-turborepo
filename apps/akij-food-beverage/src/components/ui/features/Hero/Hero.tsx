import type { ButtonProps } from "../../elements/Button";
import { FullWidth } from "../../elements/FullWidth";
import { GridRow } from "../../elements/GridRow";
import { ThemedContainer } from "../../elements/ThemedContainer";
import type { ContextlessImageProps } from "../../elements/Image";
import type { ThemeName } from "../../foundations/theming";
import type { TrackLinkHandler } from "../../../../types/types";
import { Styled } from "./Hero.styled";
import Mojo from "./mojo.png";
import Image from "next/image";

export type HeroProps = {
  theme?: ThemeName;
  overline: string;
  headingLine1: string;
  headingLine2?: string;
  image: ContextlessImageProps;
  firstButton: {
    variant: ButtonProps["variant"];
    text: string;
    href: string;
  };
  secondButton?: {
    text: string;
    href: string;
  };
  lentils?: Array<{
    color: string;
    imageSource?: string;
  }>;
  trackLinkClick: TrackLinkHandler;
};

function RenderHero({ theme }: HeroProps) {
  return (
    <Styled.Hero data-testid="Hero">
      <Styled.OverflowContainer>
        <GridRow>
          <Styled.GridColumn data-testid="Hero-Image" lg={6} xs={12}>
            Hero
          </Styled.GridColumn>
        </GridRow>
      </Styled.OverflowContainer>
    </Styled.Hero>
  );
}

export function Hero({ theme, ...props }: HeroProps) {
  const render = <RenderHero theme={theme} {...props} />;

  if (theme) {
    return (
      <ThemedContainer tag="section" theme={theme}>
        {render}
      </ThemedContainer>
    );
  }

  return render;
}
