export const SUPPORTED_LOCALES = ['en', 'ru'];
export const DEFAULT_LOCALE = 'en';

function normalizePathname(pathname = '') {
  return pathname.replace(/^\/+|\/+$/g, '');
}

export function getLocaleFromPathname(pathname = '') {
  const [firstSegment = ''] = normalizePathname(pathname).split('/');

  return SUPPORTED_LOCALES.includes(firstSegment) ? firstSegment : DEFAULT_LOCALE;
}

export function getPathForLocale(locale, options = {}) {
  const normalizedLocale = SUPPORTED_LOCALES.includes(locale) ? locale : DEFAULT_LOCALE;
  const { hash = '', search = '' } = options;

  return `/${normalizedLocale}${search}${hash}`;
}
