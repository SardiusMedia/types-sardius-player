/**
 * Bitmovin BAM v1 VAST/ad-server settings (SE-16300).
 * Stored at `plugins.sardiusAdServer`. Independent of `plugins.sardiusAds`.
 *
 * @module src/adServer
 */

/** v1 schedules VAST tags. `vmap` is reserved and must not be required. */
export type SardiusAdServerTagType = 'vast' | 'vmap';

/** Creative families BAM can request from a VAST tag / Sardius feed. */
export type SardiusAdServerCreativeType = 'linear' | 'nonLinear' | 'companion';

/**
 * Which in-stream signals may schedule a break. Independent flags so SCP can
 * opt into stored cues, HLS DATERANGE, SCTE, and/or CUETAG without a mode enum.
 */
export interface SardiusAdServerMarkerSources {
  storedCues?: boolean;
  dateRange?: boolean;
  scte35?: boolean;
  cueTags?: boolean;
}

/** Linear VAST slot preferences (Sardius feed query hints; not skip UI for sardiusAds). */
export interface SardiusAdServerLinearSettings {
  minDurationSeconds?: number;
  maxDurationSeconds?: number;
  skippable?: boolean;
  skipOffsetSeconds?: number;
}

/** Non-linear overlay slot preferences. */
export interface SardiusAdServerNonLinearSettings {
  width?: number;
  height?: number;
  showCloseButton?: boolean;
}

/** Companion slot size. */
export interface SardiusAdServerCompanionSlot {
  width: number;
  height: number;
}

/**
 * Opt-in breaks when no stored/manifest markers exist.
 * `postroll` and `percentage` are VOD-only at runtime.
 */
export interface SardiusAdServerFallback {
  enabled?: boolean;
  preroll?: boolean;
  postroll?: boolean;
  intervalSeconds?: number;
  percentage?: number;
}

/**
 * New ad-server / VAST config. External tags use `tagUrl` unchanged except
 * caller-defined placeholders; Sardius feed URLs may add slot query params
 * in the feeds ticket.
 */
export interface SardiusAdServer {
  enabled?: boolean;
  tagUrl?: string;
  tagType?: SardiusAdServerTagType;
  markerSources?: SardiusAdServerMarkerSources;
  acceptedCreativeTypes?: SardiusAdServerCreativeType[];
  linear?: SardiusAdServerLinearSettings;
  nonLinear?: SardiusAdServerNonLinearSettings;
  companionSlots?: SardiusAdServerCompanionSlot[];
  fallback?: SardiusAdServerFallback;
}
