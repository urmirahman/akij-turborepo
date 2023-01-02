import type { ReactNode } from 'react'
import { ThemedContainer } from 'ui/components/elements/ThemedContainer'
import type { ThemeName } from 'ui/components/foundations/theming'

type LayoutProps = {
  theme?: ThemeName
  header?: ReactNode
  footer?: ReactNode
  h1?: string
  children: ReactNode
  chat?: {
    url: string
    isOpen: boolean
    handleClose: () => void
  }
}

export function Layout({ theme = 'primary-brown', header, children, footer }: LayoutProps) {
  return (
    <>
      <ThemedContainer theme={theme}>
        {header}

        <main>{children}</main>

        {footer}
      </ThemedContainer>
    </>
  )
}
