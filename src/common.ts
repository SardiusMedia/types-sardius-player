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
  'nl', // Dutch
  'pl', // Polish
  'pt', // Portuguese
  'ru', // Russian
  'th', // Thai
  'zh', // Mandarin
] as const;

export type LanguageCode = typeof languageCodes[number];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Writeable<T extends { [x: string]: any }, K extends string> = {
  [P in K]: T[P];
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type TSCheckType = any;

export interface VCMSEvent {
  accountId?: string | number;
  assetId?: string;
  assetType?: string;
  excludeAssetTypes?: unknown;
  id?: string;
  password?: string;
  protocol?: string;
  type?: string;
  username?: string;
  token?: string;
}
