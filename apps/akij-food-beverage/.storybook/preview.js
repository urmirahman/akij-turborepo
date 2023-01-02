import '../src/styles/globals.css';
import * as NextImage from "next/image"
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { FormatImageUrlProvider } from '../src/components/ui/contexts'

import { breakpoints } from '../src/components/ui/foundations/breakpoints'
import { grid } from '../src/components/ui/foundations/grid'
import { themes } from '../src/components/ui/foundations/theming'
import { RouterContext } from 'next/dist/shared/lib/router-context';

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => (
    <OriginalNextImage
      {...props}
      unoptimized
    />
  ),
});

const viewportSizes = {
  xsViewport: {
    name: 'Extra Small (xs)',
    styles: {
      width: `${Math.max(breakpoints.values.xs, grid.site.minWidth)}px`,
      height: '100%',
    },
  },
  smViewport: {
    name: 'Small (sm)',
    styles: {
      width: `${breakpoints.values.sm}px`,
      height: '100%',
    },
  },
  mdViewport: {
    name: 'Medium (md)',
    styles: {
      width: `${breakpoints.values.md}px`,
      height: '100%',
    },
  },
  lgViewport: {
    name: 'Large (lg)',
    styles: {
      width: `${breakpoints.values.lg}px`,
      height: '100%',
    },
  },
  xlViewport: {
    name: 'Extra Large (xl)',
    styles: {
      width: `${Math.min(breakpoints.values.xl, grid.site.maxWidth)}px`,
      height: '100%',
    },
  },
}

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: { disable: true },
  layout: 'centered',
  nextRouter: {
    Provider: RouterContext.Provider,
  },
  controls: {
    expanded: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      method: 'alphabetical',
      order: ['Design System', 'Foundation', 'Elements', 'Modules', 'Features', 'Pages'],
    },
  },
  viewport: {
    viewports: {
      ...viewportSizes,
      ...INITIAL_VIEWPORTS,
    },
  },
}

export const globalTypes = {
  selectedThemeName: {
    name: 'Theme',
    description: 'Change the theme',
    defaultValue: 'white-brown',
    toolbar: {
      icon: 'switchalt',
      items: [...Object.keys(themes)],
      showName: true,
    },
  },
}

function placeholderBasedFormatImageUrl(imageUrl, { width }) {
  let formatted = imageUrl
  let startIndex
  while ((startIndex = formatted.indexOf('{h=')) !== -1) {
    const endIndex = formatted.indexOf('}', startIndex)
    const multiplier = +formatted.substring(startIndex + 3, endIndex)
    formatted = formatted.substring(0, startIndex) + Math.round(width * multiplier) + formatted.substring(endIndex + 1)
  }
  return formatted.replace(/{w}/g, width)
}

const withThemeProvider = (Story, { globals: { selectedThemeName } }) => {
  const selectedTheme = themes[selectedThemeName] ?? themes['white-brown']

  setTimeout(() => {
    ;[document.body, ...document.querySelectorAll('.docs-story')].forEach(($el) => {
      $el.style.setProperty('background', selectedTheme.body.background.color)
      $el.style.setProperty('color', selectedTheme.body.text.color)
    })
    ;[document.querySelector('#root'), ...document.querySelectorAll('[scale]')].forEach(($el) => {
      $el && $el.style.setProperty('max-width', '100%')
    })
  })
  
  return (
    <FormatImageUrlProvider value={placeholderBasedFormatImageUrl}>
      <MuiThemeProvider theme={selectedTheme}>
        <CssBaseline />
        <Story />
      </MuiThemeProvider>
    </FormatImageUrlProvider>  
  )
}

export const decorators = [withThemeProvider]
