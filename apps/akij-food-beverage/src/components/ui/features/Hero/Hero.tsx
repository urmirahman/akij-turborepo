import { ThemedContainer } from "../../elements/ThemedContainer";
import type { ContextlessImageProps } from "../../elements/Image";
import type { ThemeName } from "../../foundations/theming";
import { Styled } from "./Hero.styled";
import Image from "next/image";

export type HeroProps = {
  theme?: ThemeName;
  overline: string;
  headingLine: string;
  image: ContextlessImageProps;
};

function RenderHero({ theme, headingLine, image }: HeroProps) {
  return (
    <Styled.Hero data-testid="Hero">
      <div className="bg-gray-50 px-6 py-12 text-center text-gray-800 md:px-12 lg:text-left">
        <div className="container mx-auto xl:px-32">
          <div className="flex grid items-center gap-12 lg:grid-cols-2">
            <div className="mt-12 lg:mt-0">
              <h1 className="mb-12 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
                The best offer <br />
                <span className="text-blue-600">for your business</span>
              </h1>
              <a
                className="mr-2 inline-block rounded bg-blue-600 px-7 py-3 text-sm font-medium uppercase leading-snug text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                href="#!"
                role="button"
              >
                Get started
              </a>
              <a
                className="inline-block rounded bg-transparent px-7 py-3 text-sm font-medium uppercase leading-snug text-blue-600 transition duration-150 ease-in-out hover:bg-gray-100 hover:text-blue-700 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                href="#!"
                role="button"
              >
                Learn more
              </a>
            </div>
            <div className="mb-12 lg:mb-0">
              <img
                src={image.href}
                className="w-fullrounded-lg shadow-lg"
                alt={image.alt}
              />
            </div>
          </div>
        </div>
      </div>
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
