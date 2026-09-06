import { createContext, useContext } from 'react'

// Lets a routed page (Home, About, ...) read the shared header's actual
// rendered height, and tell it how far to scroll before switching to its
// solid state, since each page's own "hero" is a different height.
export const HeaderThresholdContext = createContext({
  headerHeight: 0,
  setThreshold: () => {},
})

export function useHeaderLayout() {
  return useContext(HeaderThresholdContext)
}
