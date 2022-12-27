import type { ButtonProps } from "../../elements/Button";
import { GridRow } from "../../elements/GridRow";
import { ThemedContainer } from "../../elements/ThemedContainer";
import type { ContextlessImageProps } from "../../elements/Image";
import type { ThemeName } from "../../foundations/theming";
import type { TrackLinkHandler } from "../../../../types/types";
import { Styled } from "./Hero.styled";
import { Heading } from "../../elements/Heading";

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

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function RenderHero({ theme }: HeroProps) {
  return (
    <Styled.Hero data-testid="Hero">
      <GridRow>
        <Styled.GridColumn data-testid="Hero-Image" lg={6} xs={12}>
          <Styled.Heading>
            <Heading tag="span" variant={"h1BigBoldSerif"}>
              Akij
            </Heading>
          </Styled.Heading>
        </Styled.GridColumn>
      </GridRow>
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
