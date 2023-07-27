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

export type LanguageCode = (typeof languageCodes)[number];
export type LanguageCodesUppercase = (typeof languageCodesUppercase)[number];
