import type { ExtendedTheme } from '../../theming';
import { baseTheme } from '../../theming'
import { buttonThemeForLightBackground } from '../elements/button'
import { formBaseTheme } from '../elements/formBase'
import { formInputTheme } from '../elements/formInput'
import { linkThemeForLightBackground } from '../elements/link'

export const grayFamily: ExtendedTheme = {
  key: 'grayFamily',
  body: {
    background: { color: baseTheme.colors.neutrals.gray },
    discount: { color: baseTheme.colors.primary.blue },
    error: { color: baseTheme.colors.primary.red },
    text: { color: baseTheme.colors.neutrals.black },
  },
  elements: {
    button: buttonThemeForLightBackground,
    form: {
      base: formBaseTheme,
      input: formInputTheme,
    },
    heading: { color: baseTheme.colors.neutrals.black },
    link: linkThemeForLightBackground,
  },
}
