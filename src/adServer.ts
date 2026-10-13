export const SARDIUS_AD_SERVER_OVERLAY_PLACEMENTS = [
  'lowerThird',
  'upperThird',
  'topLeft',
  'topRight',
  'bottomLeft',
  'bottomRight',
  'center',
] as const;

export type SardiusAdServerOverlayPlacement =
  (typeof SARDIUS_AD_SERVER_OVERLAY_PLACEMENTS)[number];

export interface SardiusAdServerFallbackEntry {
  timing: 'intervalMinutes' | 'percentage';
  value: number;
  mediaUrl?: string;
  clickThroughUrl?: string;
}

export interface SardiusAdServerFallback {
  enabled?: boolean;
  entries?: SardiusAdServerFallbackEntry[];
}

/**
 * Bitmovin Advertising Module settings. Separate from `sardiusAds`.
 * One HTTPS VAST URL is requested at asset cue markers that do not store a media URL.
 */
export interface SardiusAdServer {
  enabled?: boolean;
  tagUrl?: string;
  overlayPlacement?: SardiusAdServerOverlayPlacement;
  showCloseButton?: boolean;
  /** A cue at startMs 0 suppresses direct sardiusAds pre-roll. Default off. */
  skipPrerollWhenCueAtStart?: boolean;
  /** A cue at the end of the asset suppresses direct sardiusAds post-roll. Default off. */
  skipPostrollWhenCueAtEnd?: boolean;
  fallback?: SardiusAdServerFallback;
}
