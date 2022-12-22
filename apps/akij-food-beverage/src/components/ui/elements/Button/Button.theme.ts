import { Property } from 'csstype'

import type { ButtonProps } from './Button'

type ButtonSizesTheme = {
    borderWidth: Property.BorderWidth
    hoverDropBottom: Property.Bottom
    hoverDropLeft: Property.Left
    fontSize: Property.FontSize
    outlineWidth: Property.OutlineWidth
    paddingTopBottom: Property.PaddingTop
    paddingLeftRight: Property.PaddingLeft
}

type ButtonVariantStateTheme = {
    background: Property.BackgroundColor
    borderColor: Property.BorderColor
    color: Property.Color
}

type ButtonVariantHoverStateTheme = {
    dropColor: Property.BackgroundColor
}

type ButtonVariantFocusStateTheme = {
    outlineColor: Property.OutlineColor
}

type ButtonVariantTheme = {
    default: ButtonVariantStateTheme
    hover: Partial<ButtonVariantStateTheme> & ButtonVariantHoverStateTheme
    focus: Partial<ButtonVariantStateTheme> & ButtonVariantFocusStateTheme
    active: Partial<ButtonVariantStateTheme>
    disabled: Partial<ButtonVariantStateTheme>
}

export type ButtonTheme = {
    sizes: Record<ButtonProps['size'], ButtonSizesTheme>
    variants: Record<ButtonProps['variant'], ButtonVariantTheme>
}
