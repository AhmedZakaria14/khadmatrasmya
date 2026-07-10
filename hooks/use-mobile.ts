import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    let isMounted = true;
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    
    if (isMounted) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }

    const onChange = () => {
      if (isMounted) {
         setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
      }
    }
    mql.addEventListener("change", onChange)
    
    return () => {
      isMounted = false;
      mql.removeEventListener("change", onChange)
    }
  }, [])

  return !!isMobile
}
