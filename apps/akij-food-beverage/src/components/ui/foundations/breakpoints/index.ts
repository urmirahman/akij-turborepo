export const breakpoints = {
    values: {
        xs: 0,
        sm: 375,
        md: 768,
        lg: 1024,
        xl: 1440,
    },
}

export type BreakpointSpecific<T4ColumnGrid = unknown, T12ColumnGrid = T4ColumnGrid> = {
    xs: T4ColumnGrid
    sm?: T4ColumnGrid
    md?: T4ColumnGrid
    lg?: T12ColumnGrid
    xl?: T12ColumnGrid
}
