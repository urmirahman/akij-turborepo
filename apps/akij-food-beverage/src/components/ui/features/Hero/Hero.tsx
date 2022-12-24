import type { ButtonProps } from "../../elements/Button";
import { Button } from "../../elements/Button";
import { FullWidth } from "../../elements/FullWidth";
import { GridColumn } from "../../elements/GridColumn";
import { GridRow } from "../../elements/GridRow";
import { Heading } from "../../elements/Heading";
import { ImageShaped } from "../../elements/ImageShaped";
import { ThemedContainer } from "../../elements/ThemedContainer";
import type { ContextlessImageProps } from "../../elements/Image";
import type { ThemeName } from "../../foundations/theming";
import { useImageSources } from "../../hooks";
import { useViewportSize } from "../../hooks/useViewportSize";
import type { TrackLinkHandler } from "../../../../types/types";
import { IMAGE_ASPECT_RATIO, Styled } from "./Hero.styled";

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

function RenderHero({
  theme,
  overline,
  headingLine1,
  headingLine2,
  image,
  firstButton,
  secondButton,
  lentils,
  trackLinkClick,
}: HeroProps) {
  const imageSources = useImageSources(image.href, {
    xs: { aspectRatio: IMAGE_ASPECT_RATIO, width: "100%" },
    md: { aspectRatio: IMAGE_ASPECT_RATIO, width: "70%" },
    lg: { aspectRatio: IMAGE_ASPECT_RATIO, span: 5 },
  });
  const viewport = useViewportSize({ debounceWait: 50 });
  const lentilSize =
    viewport.size === "xl" || viewport.size === "md" ? "large" : "medium";
  const lentilRotationAngles = [8, 30, 8, -6, 30, -9, 8];
  const lentilInitialOffsets = [
    { x: -20, y: -30 },
    { x: -10, y: -25 },
    { x: 40, y: -35 },
    { x: 45, y: 0 },
    { x: 20, y: 15 },
    { x: 40, y: 10 },
    { x: 20, y: 30 },
  ];

  return (
    <Styled.Hero data-testid="Hero">
      <Styled.OverflowContainer>
        <GridRow>
          <GridColumn data-testid="Hero-Content" lg={6} xs={12}>
            <Styled.ContentWrapper>
              <Styled.Heading>
                <Heading
                  tag="span"
                  variant={
                    headingLine2 ? "h1BigLightSerif" : "h1WideBlackSerif"
                  }
                >
                  {headingLine1}
                </Heading>
                {headingLine2 && (
                  <Heading tag="span" variant="h1BigBoldSerif">
                    {headingLine2}
                  </Heading>
                )}
              </Styled.Heading>
              <Styled.ButtonsWrapper data-testid="Hero-Buttons">
                <Button
                  href={firstButton.href}
                  onClick={() =>
                    trackLinkClick({
                      buttonName: "first button",
                      buttonText: firstButton.text,
                      buttonCategory: "hero",
                    })
                  }
                  size="large"
                  variant={firstButton.variant}
                >
                  {firstButton.text}
                </Button>
                {secondButton && (
                  <Button
                    href={secondButton.href}
                    onClick={() =>
                      trackLinkClick({
                        buttonName: "second button",
                        buttonText: secondButton.text,
                        buttonCategory: "hero",
                      })
                    }
                    size="large"
                    variant="secondary"
                  >
                    {secondButton.text}
                  </Button>
                )}
              </Styled.ButtonsWrapper>
            </Styled.ContentWrapper>
          </GridColumn>
          <Styled.GridColumn data-testid="Hero-Image" lg={6} xs={12}>
            <FullWidth until="md">
              <Styled.ImagePositionWrapper>
                <Styled.ImageWrapper>
                  {lentils?.length && (
                    <Styled.LentilsScatter>
                      {lentils.map((lentil, index) => (
                        <Styled.LentilOuterWrapper
                          animate={{ opacity: 1 }}
                          initial={{ opacity: 0 }}
                          key={index}
                          transition={{
                            ease: "easeOut",
                            delay: 0.5,
                            duration: 1,
                          }}
                        >
                          <Styled.LentilInnerWrapper
                            animate={{ x: 0, y: 0 }}
                            initial={lentilInitialOffsets[index]}
                            transition={{
                              ease: "easeOut",
                              delay: 0.5,
                              duration: 1,
                            }}
                          ></Styled.LentilInnerWrapper>
                        </Styled.LentilOuterWrapper>
                      ))}
                    </Styled.LentilsScatter>
                  )}
                  <ImageShaped
                    {...image}
                    lazy={false}
                    shape="round"
                    sources={imageSources}
                  />
                </Styled.ImageWrapper>
              </Styled.ImagePositionWrapper>
            </FullWidth>
          </Styled.GridColumn>
        </GridRow>
      </Styled.OverflowContainer>
      {theme && <Styled.PseudoContainer />}
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
