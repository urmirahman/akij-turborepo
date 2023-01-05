import type { HeroProps } from './Hero'

export const HeroMock: HeroProps = {
  theme: 'primary-brown',
  headingLine: 'Akij Hero',
  image: {
    alt: 'Akij logo',
    href: 'https://www.akijfood.com/public/assets/img/logo.png',
  },
  ingredients: true,
  products: [
    {
      _id: 1,
    },
  ],
}
