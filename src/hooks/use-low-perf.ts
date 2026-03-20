import { useMemo } from 'react';

const MOBILE_BREAKPOINT = 768;

export function useIsLowPerf() {
  return useMemo(() => {
    if (typeof window === 'undefined') return false;
    return window.innerWidth < MOBILE_BREAKPOINT;
  }, []);
}
