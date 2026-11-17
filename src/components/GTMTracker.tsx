"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { trackPageView, trackWhatsAppClick, trackEmailClick, trackPhoneClick } from "@/lib/gtm";

/**
 * GTMTracker handles:
 * 1. Automatic client-side page_view events on Next.js App Router route changes
 * 2. Event delegation for global clicks:
 *    - WhatsApp clicks (wa.me / api.whatsapp.com)
 *    - Email clicks (mailto:)
 *    - Phone clicks (tel:)
 */
export default function GTMTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Track page_view on client route change
  useEffect(() => {
    if (!pathname) return;
    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : "");
    trackPageView(url);
  }, [pathname, searchParams]);

  // Global click delegate for whatsapp_click, email_click, and phone_click
  useEffect(() => {
    const handleGlobalClick = (event: MouseEvent) => {
      const target = (event.target as HTMLElement)?.closest("a");
      if (!target || !target.href) return;

      const href = target.href;

      if (href.includes("wa.me") || href.includes("api.whatsapp.com") || href.includes("whatsapp")) {
        trackWhatsAppClick({
          destination_url: href,
          link_text: target.innerText?.trim() || "",
          location: window.location.pathname,
        });
      } else if (href.startsWith("mailto:")) {
        const email = href.replace("mailto:", "").split("?")[0];
        trackEmailClick({
          email,
          location: window.location.pathname,
        });
      } else if (href.startsWith("tel:")) {
        const phone = href.replace("tel:", "").split("?")[0];
        trackPhoneClick({
          phone,
          location: window.location.pathname,
        });
      }
    };

    window.addEventListener("click", handleGlobalClick, { capture: true });
    return () => {
      window.removeEventListener("click", handleGlobalClick, { capture: true });
    };
  }, []);

  return null;
}
