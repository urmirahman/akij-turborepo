import type { Property } from 'csstype'

type FormInputActiveStateTheme = {
    border: { color: Property.BorderColor }
}

type FormInputDefaultStateTheme = {
    border: { color: Property.BorderColor }
    icon: { color: Property.Color }
}

type FormInputDisabledStateTheme = {
    border: { color: Property.BorderColor }
    font: { color: Property.Color }
}

type FormInputErrorStateTheme = {
    border: { color: Property.BorderColor }
}

type FormInputHoverStateTheme = {
    border: { color: Property.BorderColor }
}

export type FormInputTheme = {
    active: FormInputActiveStateTheme
    default: FormInputDefaultStateTheme
    disabled: FormInputDisabledStateTheme
    error: FormInputErrorStateTheme
    hover: FormInputHoverStateTheme
}
