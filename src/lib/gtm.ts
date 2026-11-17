// Global dataLayer type definition for TypeScript
declare global {
  interface Window {
    dataLayer: Record<string, any>[];
  }
}

export const GTM_ID = "GTM-KNX47FH7";

/**
 * Push generic events to GTM dataLayer safely
 */
export const pushDataLayer = (data: Record<string, any>) => {
  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(data);
  }
};

/**
 * Standard Tracking Helper Events for Tushar Labs
 */
export const trackPageView = (url: string) => {
  pushDataLayer({
    event: "page_view",
    page_path: url,
    page_location: typeof window !== "undefined" ? window.location.href : "",
    page_title: typeof document !== "undefined" ? document.title : "",
  });
};

export const trackWhatsAppClick = (params?: {
  location?: string;
  destination_url?: string;
  [key: string]: any;
}) => {
  pushDataLayer({
    event: "whatsapp_click",
    click_type: "whatsapp",
    ...params,
  });
};

export const trackFormSubmit = (params?: {
  form_id?: string;
  form_name?: string;
  service?: string;
  currency?: string;
  [key: string]: any;
}) => {
  pushDataLayer({
    event: "form_submit",
    ...params,
  });
};

export const trackEmailClick = (params?: {
  email?: string;
  location?: string;
  [key: string]: any;
}) => {
  pushDataLayer({
    event: "email_click",
    click_type: "email",
    ...params,
  });
};

export const trackPhoneClick = (params?: {
  phone?: string;
  location?: string;
  [key: string]: any;
}) => {
  pushDataLayer({
    event: "phone_click",
    click_type: "phone",
    ...params,
  });
};
