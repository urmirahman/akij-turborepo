import type { FormInputTheme } from '../../../../elements/FormInput'
import { baseTheme } from '../../theming'

export const formInputTheme: FormInputTheme = {
    active: {
        border: { color: baseTheme.colors.primary.brown },
    },
    default: {
        border: { color: baseTheme.colors.neutrals.silver },
        icon: { color: baseTheme.colors.primary.brown },
    },
    disabled: {
        border: { color: baseTheme.colors.neutrals.silver },
        font: { color: baseTheme.colors.neutrals.silver },
    },
    error: {
        border: { color: baseTheme.colors.primary.red },
    },
    hover: {
        border: { color: baseTheme.colors.primary.brown },
    },
}
