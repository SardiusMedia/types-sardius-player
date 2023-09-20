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
  'AM', // Amharic
  'AR', // Arabic
  'CA', // Cantonese
  'DE', // German
  'EN', // English
  'ES', // Spanish
  'FR', // French
  'HI', // Hindi
  'ID', // Indonesian
  'IT', // Italian
  'JA', // Japanese
  'KO', // Korean
  'MN', // Mongolian
  'MO', // Mongolian
  'NL', // Dutch
  'PL', // Polish
  'PT', // Portuguese
  'RU', // Russian
  'TH', // Thai
  'XZ', // ASL
  'ZH', // Mandarin
] as const;

const languageCodesUppercaseCC = [
  'XZCC', // American Sign Language
  'AMCC', // Amharic
  'ARCC', // Arabic
  'CACC', // Cantonese
  'DECC', // German
  'ENCC', // English
  'ESCC', // Spanish
  'FRCC', // French
  'HICC', // Hindi
  'IDCC', // Indonesian
  'ITCC', // Italian
  'JACC', // Japanese
  'KOCC', // Korean
  'MNCC', // Mongolian
  'MOCC', // Mongolian
  'NLCC', // Dutch
  'PLCC', // Polish
  'PTCC', // Portuguese
  'RUCC', // Russian
  'THCC', // Thai
  'XZCC', // ASL
  'ZHCC', // Mandarin
] as const;

export type LanguageCode = (typeof languageCodes)[number];
export type LanguageCodesUppercase = (typeof languageCodesUppercase)[number];
export type LanguageCodesUppercaseCC =
  (typeof languageCodesUppercaseCC)[number];
export type LanguageCodeAny = LanguageCode |
  LanguageCodesUppercase |
  LanguageCodesUppercaseCC;
