import type { FormBaseFieldTheme } from '../../../../elements/FormBaseField'
import { baseTheme } from '../../theming'

export const formBaseTheme: FormBaseFieldTheme = {
    active: {
        label: { color: baseTheme.colors.primary.brown },
    },
    default: {
        label: { color: baseTheme.colors.neutrals.silver },
        message: { color: baseTheme.colors.neutrals.silver },
    },
    disabled: {
        label: { color: baseTheme.colors.neutrals.silver },
    },
    error: {
        message: { color: baseTheme.colors.primary.red },
    },
    focus: {
        outline: { color: baseTheme.colors.neutrals.black },
    },
}
