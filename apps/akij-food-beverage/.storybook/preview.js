import '../src/styles/globals.css';

import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

import { breakpoints } from '../src/components/ui/foundations/breakpoints'
import { grid } from '../src/components/ui/foundations/grid'

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
