const languageCodes = [
  'xz', // American Sign Language
  'am', // Amharic
  'ar', // Arabic
  'ca', // Cantonese
  'de', // German
  'en', // English
  'es', // Spanish
  'fr', // French
  'hi', // Hindi
  'id', // Indonesian
  'it', // Italian
  'ja', // Japanese
  'ko', // Korean
  'mn', // Mongolian
  'mo', // Mongolian
  'nl', // Dutch
  'pl', // Polish
  'pt', // Portuguese
  'ru', // Russian
  'th', // Thai
  'xz', // ASL
  'zh', // Mandarin
] as const;

const languageCodesUppercase = [
  'XZ', // American Sign Language
  'XZCC', // American Sign Language
  'AM', // Amharic
  'AMCC', // Amharic
  'AR', // Arabic
  'ARCC', // Arabic
  'CA', // Cantonese
  'CACC', // Cantonese
  'DE', // German
  'DECC', // German
  'EN', // English
  'ENCC', // English
  'ES', // Spanish
  'ESCC', // Spanish
  'FR', // French
  'FRCC', // French
  'HI', // Hindi
  'HICC', // Hindi
  'ID', // Indonesian
  'IDCC', // Indonesian
  'IT', // Italian
  'ITCC', // Italian
  'JA', // Japanese
  'JACC', // Japanese
  'KO', // Korean
  'KOCC', // Korean
  'MN', // Mongolian
  'MNCC', // Mongolian
  'MO', // Mongolian
  'MOCC', // Mongolian
  'NL', // Dutch
  'NLCC', // Dutch
  'PL', // Polish
  'PLCC', // Polish
  'PT', // Portuguese
  'PTCC', // Portuguese
  'RU', // Russian
  'RUCC', // Russian
  'TH', // Thai
  'THCC', // Thai
  'XZ', // ASL
  'XZCC', // ASL
  'ZH', // Mandarin
  'ZHCC', // Mandarin
] as const;

export type LanguageCode = (typeof languageCodes)[number];
export type LanguageCodesUppercase = (typeof languageCodesUppercase)[number];
