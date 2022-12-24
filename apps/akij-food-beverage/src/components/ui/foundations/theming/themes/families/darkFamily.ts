import { baseTheme } from '../../theming'
import { buttonThemeForDarkBackground } from '../elements/button'

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
    },
}
