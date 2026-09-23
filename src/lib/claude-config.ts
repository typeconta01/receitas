export const PRODUCT_NAME = "Guia Prático do Claude AI";
export const PRODUCT_NAME_TM = "Guia Prático do Claude AI™";
export const PRODUCT_PRICE = "US$ 5,90";
export const PRODUCT_PRICE_FROM = "US$ 19,90";
export const FULL_VALUE = "US$ 42,60";
export const CHECKOUT_URL = "#";

export const CHECKOUT_URL_BY_LANG = {
  pt: CHECKOUT_URL,
  en: "https://pay.hotmart.com/O107729627M?off=47zfjy6e&checkoutMode=10",
  es: "https://pay.hotmart.com/L107729869T?off=evkdhsmr&checkoutMode=10",
} as const;

export function getCheckoutUrl(
  lang: keyof typeof CHECKOUT_URL_BY_LANG = "pt",
): string {
  return CHECKOUT_URL_BY_LANG[lang] ?? CHECKOUT_URL;
}
export const GUARANTEE_DAYS = "7";
export const SUPPORT_URL = "/contato";
export const PRIVACY_URL = "/privacidade";
export const TERMS_URL = "/termos";
export const COPYRIGHT_NAME = "Guia Prático do Claude AI";

/** Deixe vazio para o mockup CSS. Coloque um caminho tipo `/images/claude-cover.webp` para substituir. */
export const GUIDE_COVER_SRC = "";

/** Preencha só quando tiver IDs reais. Não use placeholders. */
export const META_PIXEL_ID = "";
export const META_PIXEL_ID_BY_LANG = {
  pt: META_PIXEL_ID,
  en: "2307602136723013",
  es: "1990320615146402",
} as const;

export function getMetaPixelId(
  lang: keyof typeof META_PIXEL_ID_BY_LANG = "pt",
): string {
  return META_PIXEL_ID_BY_LANG[lang] ?? META_PIXEL_ID;
}

export const GA_MEASUREMENT_ID = "";
