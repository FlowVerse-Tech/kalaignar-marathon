"use client";

import { useState, useEffect } from "react";

/**
 * Hook to check if component is mounted on the client.
 * Prevents SSR / React 19 hydration style mismatches with animated components.
 */
export function useMounted(): boolean {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted;
}
