import type { Property } from 'csstype'

type FormBaseFieldActiveStateTheme = {
    label: { color: Property.Color }
}

type FormBaseFieldDefaultStateTheme = {
    label: { color: Property.Color }
    message: { color: Property.Color }
}

type FormBaseFieldDisabledStateTheme = {
    label: { color: Property.Color }
}

type FormBaseFieldErrorStateTheme = {
    message: { color: Property.Color }
}

type FormBaseFieldFocusStateTheme = {
    outline: { color: Property.OutlineColor }
}

export type FormBaseFieldTheme = {
    active: FormBaseFieldActiveStateTheme
    default: FormBaseFieldDefaultStateTheme
    disabled: FormBaseFieldDisabledStateTheme
    error: FormBaseFieldErrorStateTheme
    focus: FormBaseFieldFocusStateTheme
}
