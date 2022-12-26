import { baseTheme } from '../../theming'
import { buttonThemeForDarkBackground } from '../elements/button'
import { formBaseTheme } from '../elements/formBase'
import { formInputTheme } from '../elements/formInput'
import { linkThemeForDarkBackground } from '../elements/link'

export const darkFamily = {
    key: 'darkFamily',
    body: {
        background: { color: baseTheme.colors.neutrals.black },
        discount: { color: baseTheme.colors.primary.blue },
        error: { color: baseTheme.colors.primary.red },
        text: { color: baseTheme.colors.neutrals.white },
    },
    elements: {
        button: buttonThemeForDarkBackground,
        form: {
            base: formBaseTheme,
            input: formInputTheme
        },
        heading: { color: baseTheme.colors.neutrals.white },
        link: linkThemeForDarkBackground,
    },
}
