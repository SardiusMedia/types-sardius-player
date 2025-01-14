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
  'ur', // Urdu
  'vi', // Vietnamese
  'xz', // ASL
  'zh', // Mandarin
  'af',
  'sq',
  'hy',
  'az',
  'bn',
  'bs',
  'bl',
  'my',
  'hr',
  'cs',
  'da',
  'et',
  'tl',
  'fi',
  'ka',
  'el',
  'gu',
  'he',
  'hu',
  'is',
  'kn',
  'kk',
  'km',
  'rw',
  'lo',
  'lv',
  'lt',
  'mk',
  'ms',
  'ml',
  'mt',
  'mr',
  'ne',
  'no',
  'ps',
  'fa',
  'ro',
  'sr',
  'si',
  'sk',
  'sl',
  'so',
  'sw',
  'sv',
  'ta',
  'te',
  'tr',
  'uk',
  'uz',
  'as',
  'cat',
  'fj',
  'ha',
  'hmn',
  'ig',
  'jv',
  'ku',
  'mg',
  'or',
  'sm',
  'tgl',
  'ti',
  'myn',
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
  'UR', // Urdu
  'VI', // Vietnamese
  'XZ', // ASL
  'ZH', // Mandarin
  'AF',
  'SQ',
  'HY',
  'AZ',
  'BN',
  'BS',
  'BL',
  'MY',
  'HR',
  'CS',
  'DA',
  'ET',
  'TL',
  'FI',
  'KA',
  'EL',
  'GU',
  'HE',
  'HU',
  'IS',
  'KN',
  'KK',
  'KM',
  'RW',
  'LO',
  'LV',
  'LT',
  'MK',
  'MS',
  'ML',
  'MT',
  'MR',
  'NE',
  'NO',
  'PS',
  'FA',
  'RO',
  'SR',
  'SI',
  'SK',
  'SL',
  'SO',
  'SW',
  'SV',
  'TA',
  'TE',
  'TR',
  'UK',
  'UZ',
  'AS',
  'CAT',
  'FJ',
  'HA',
  'HMN',
  'IG',
  'JV',
  'KU',
  'MG',
  'OR',
  'SM',
  'TGL',
  'TI',
  'MYN',
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
  'URCC', // Urdu
  'VICC', // Vietnamese
  'XZCC', // ASL
  'ZHCC', // Mandarin
  'AFCC',
  'SQCC',
  'HYCC',
  'AZCC',
  'BNCC',
  'BSCC',
  'BLCC',
  'MYCC',
  'HRCC',
  'CSCC',
  'DACC',
  'ETCC',
  'TLCC',
  'FICC',
  'KACC',
  'ELCC',
  'GUCC',
  'HECC',
  'HUCC',
  'ISCC',
  'KNCC',
  'KKCC',
  'KMCC',
  'RWCC',
  'LOCC',
  'LVCC',
  'LTCC',
  'MKCC',
  'MSCC',
  'MLCC',
  'MTCC',
  'MRCC',
  'NECC',
  'NOCC',
  'PSCC',
  'FACC',
  'ROCC',
  'SRCC',
  'SICC',
  'SKCC',
  'SLCC',
  'SOCC',
  'SWCC',
  'SVCC',
  'TACC',
  'TECC',
  'TRCC',
  'UKCC',
  'UZCC',
  'ASCC',
  'CATCC',
  'FJCC',
  'HACC',
  'HMNCC',
  'IGCC',
  'JVCC',
  'KUCC',
  'MGCC',
  'ORCC',
  'SMCC',
  'TGLCC',
  'TICC',
  'MYNCC',
] as const;

export type LanguageCode = (typeof languageCodes)[number];
export type LanguageCodesUppercase = (typeof languageCodesUppercase)[number];
export type LanguageCodesUppercaseCC =
  (typeof languageCodesUppercaseCC)[number];
export type LanguageCodeAny =
  | LanguageCode
  | LanguageCodesUppercase
  | LanguageCodesUppercaseCC;
