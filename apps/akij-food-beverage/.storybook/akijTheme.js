import { create } from '@storybook/theming'
import themeLogo from './akij-food.svg'

export default create({
  /**
   * Base theme
   */
  base: 'light',

  /**
   * Core colors
   */
  colorPrimary: '#266AAA',
  colorSecondary: '#77A4CA',

  /**
   * UI colors
   */
  appBg: '#fff',
  appContentBg: '#fff',
  appBorderColor: '#b9c1ca',
  appBorderRadius: 8,

  /**
   * Typography
   */
  fontBase:
    '"AllTogetherSans", -apple-system, "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", sans-serif',
  fontCode: 'monospace',

  /**
   * Text colors
   */
  textColor: '#040607',
  textInverseColor: '#f3f6fa',

  /**
   * Toolbar colors
   */
  barTextColor: '#68717d',
  barSelectedColor: '#77A4CA',
  barBg: '#ffffff',

  /**
   * Form colors
   */
  inputBg: '#fff',
  inputBorder: '#68717d',
  inputTextColor: '#040607',
  inputBorderRadius: 4,

  /**
   * Logo branding
   */
  brandTitle: 'Akij Storybook',
  brandUrl: 'https://www.akijventure.com',
  brandImage: themeLogo,
})
