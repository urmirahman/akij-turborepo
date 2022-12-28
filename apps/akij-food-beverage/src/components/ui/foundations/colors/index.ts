function toRgbValues(hexCode: string) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return hexCode
        .match(/[0-9abcdef]{2}/gi)!
        .map((d) => +`0x${d}`)
        .join(', ')
}

export const colors = {
    asRgb: (hexCode: string) => `rgb(${toRgbValues(hexCode)})`,
    asRgba: (hexCode: string, opacity: number) => `rgba(${toRgbValues(hexCode)}, ${opacity})`,
    primary: {
        yellow: '#F4C70A',
        brown: '#943C15',
        red: '#E21A22',
        orange: '#E16525',
        blue: '#0068B1',
        green: '#43AA4C',
    },
    secondary: {
        teal: '#00403e',
        darkGreen: '#005e20',
        aqua: '#53d4c0',
        electricGreen: '#dce84f',
        darkBlue: '#121661',
        skyBlue: '#8aceff',
        purple: '#8a1a9b',
        lavender: '#d7a1ff',
        maroon: '#8a0047',
        darkPink: '#f24dc1',
        pink: '#ffabdf',
        gold: '#ed9418',
    },
    tertiary: {
        lightYellow: '#fff2b6',
        lightOrange: '#ffd0b1',
        lightRed: '#ffc3c2',
        lightBlue: '#d4ebff',
        lightBrown: '#f7d3b7',
        lightTeal: '#b8edeb',
        lightGreen: '#caffda',
        lightPurple: '#e3e0ff',
        lightPink: '#ffd8fc',
    },
    neutrals: {
        black: '#040607',
        silver: '#68717d',
        platinum: '#b9c1ca',
        gray: '#f3f6fa',
        white: '#ffffff',
    },
}
