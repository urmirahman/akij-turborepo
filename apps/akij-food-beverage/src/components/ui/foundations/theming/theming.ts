import type { Theme as EmotionTheme } from '@emotion/react'
import { createTheme as createMuiTheme, Theme as MuiTheme, useTheme as useMuiTheme } from '@mui/material/styles'
import { Property } from 'csstype'

import type { ButtonTheme } from '../../elements/Button'

import { borders } from '../borders'
import { breakpoints } from '../breakpoints'
import { colors } from '../colors'
import { grid } from '../grid'
import { CustomSpacing, spacing } from '../spacing'
import { CustomTypography, typography } from '../typography'

export type DeepPartial<T> = T extends object ? { [P in keyof T]?: DeepPartial<T[P]> } : T

export function createTheme(themeFamily: ExtendedTheme, extendedTheme: DeepPartial<ExtendedTheme>): Theme {
    return createMuiTheme(baseTheme, themeFamily, extendedTheme) as unknown as Theme
}

export function useTheme() {
    return useMuiTheme<EmotionTheme>()
}

export const baseTheme = createMuiTheme({
    borders,
    breakpoints,
    colors,
    grid,
    spacing,
    typography,
})

import '@emotion/react'

declare module '@mui/material/styles' {
    interface Theme {
        borders: typeof borders
        colors: typeof colors
        grid: typeof grid
    }
    interface ThemeOptions {
        borders?: typeof borders
        colors?: typeof colors
        grid?: typeof grid
    }
}

export type BaseTheme = {
    borders: typeof borders
    breakpoints: MuiTheme['breakpoints']
    colors: typeof colors
    grid: typeof grid
    spacing: CustomSpacing
    transitions: MuiTheme['transitions']
    typography: CustomTypography
}

export type ExtendedTheme = {
    key: string
    body: {
        background: { color: Property.BackgroundColor }
        discount: { color: Property.Color }
        error: { color: Property.Color }
        text: { color: Property.Color }
    },
    elements: {
        button: ButtonTheme
    }
}

declare module '@emotion/react' {
    export interface Theme extends BaseTheme, ExtendedTheme { }
}

export type Theme = EmotionTheme
