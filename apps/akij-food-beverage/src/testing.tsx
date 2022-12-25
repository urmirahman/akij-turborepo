import type { PropsWithChildren } from "react";

import { MockValidationProvider } from "./components/ui/contexts/ValidationContext.mock";
import { MockThemeProvider } from "./components/ui/foundations/theming/ThemeProvider.mock";

export function wrapper({ children }: PropsWithChildren<unknown>) {
  return (
    <MockValidationProvider>
      <MockThemeProvider>{children}</MockThemeProvider>
    </MockValidationProvider>
  );
}
