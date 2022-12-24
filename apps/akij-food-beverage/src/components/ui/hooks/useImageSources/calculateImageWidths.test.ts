import type { Breakpoint } from '../../foundations/breakpoints'
import type { Theme } from '../../foundations/theming'
import { calculateImageWidths } from './calculateImageWidths'

const theme = {
    grid: {
        gutter: { width: { xs: 16, lg: 24, xl: 24 } },
    },
} as Theme

jest.mock('./getImageCalculationWidths', () => ({
    getImageCalculationWidths: jest.fn(() => ({
        xs: {
            fullWidths: [320],
            containerWidths: [272],
        },
        lg: {
            fullWidths: [1024, 1232],
            containerWidths: [928, 1076],
        },
        xl: {
            fullWidths: [1440, 1680, 1920],
            containerWidths: [1344, 1440, 1536],
        },
    })),
}))

describe('calculateImageWidths', () => {
    it.each([
        ['xs' as Breakpoint, [320]],
        ['lg' as Breakpoint, [1024, 1232]],
        ['xl' as Breakpoint, [1440, 1680, 1920]],
    ])('returns fullWidths when span or percentage not set (%s)', (breakpoint, expectedWidths) => {
        const actual = calculateImageWidths(theme, breakpoint)

        expect(actual).toEqual(expectedWidths)
    })

    it.each([
        ['xs' as Breakpoint, [106]],
        ['lg' as Breakpoint, [338, 407]],
        ['xl' as Breakpoint, [475, 554, 634]],
    ])('returns expected calculated widths when percentage set to 33% (%s)', (breakpoint, expectedWidths) => {
        const actual = calculateImageWidths(theme, breakpoint, '33%')

        expect(actual).toEqual(expectedWidths)
    })

    it.each([
        ['xs' as Breakpoint, [272]],
        ['lg' as Breakpoint, [928, 1076]],
        ['xl' as Breakpoint, [1344, 1440, 1536]],
    ])('returns containerWidths when span set to 12 (%s)', (breakpoint, expectedWidths) => {
        const actual = calculateImageWidths(theme, breakpoint, 12)

        expect(actual).toEqual(expectedWidths)
    })

    it.each([
        ['xs' as Breakpoint, [56]],
        ['lg' as Breakpoint, [214, 251]],
        ['xl' as Breakpoint, [318, 342, 366]],
    ])('returns expected calculated widths when span set to 3 (%s)', (breakpoint, expectedWidths) => {
        const actual = calculateImageWidths(theme, breakpoint, 3)

        expect(actual).toEqual(expectedWidths)
    })
})
