import { primaryBlue } from './primaryBlue'
import { primaryBrown } from './primaryBrown'
import { primaryGreen } from './primaryGreen'
import { primaryOrange } from './primaryOrange'
import { primaryRed } from './primaryRed'
import { primaryYellow } from './primaryYellow'

export type ThemeName = keyof typeof themes

export const themes = {
    ['primary-blue']: primaryBlue,
    ['primary-brown']: primaryBrown,
    ['primary-green']: primaryGreen,
    ['primary-orange']: primaryOrange,
    ['primary-red']: primaryRed,
    ['primary-yellow']: primaryYellow,
}
