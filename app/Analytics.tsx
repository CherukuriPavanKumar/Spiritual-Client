"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function Analytics() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    // @ts-ignore
    window.gtag("event", "page_view", {
      page_path: pathname,
    });
  }, [pathname]);

  return null;
}
