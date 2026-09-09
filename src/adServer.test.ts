/**
 * Compile-time checks for SE-16300. Run via `yarn test` (`tsc --noEmit`).
 */
import type { AdSettings, PlayerPlugins, SardiusAds } from './player';
import type { SardiusAdServer } from './adServer';

const existingDirectAssetAds: SardiusAds = {
  amount: 1,
  frequencyEach: 86400,
  preroll: {
    amount: 1,
    skippable: true,
    showCountdown: true,
    urls: ['https://cdn.example.com/preroll.mp4'],
  },
  postroll: {
    urls: ['https://cdn.example.com/postroll.mp4'],
  },
};

const adSettings: AdSettings = existingDirectAssetAds.preroll || {};

const vastAdServer: SardiusAdServer = {
  enabled: true,
  tagUrl: 'https://feeds.example.com/exampleAccount01/exampleFeed01/vast',
  tagType: 'vast',
  markerSources: {
    storedCues: true,
    dateRange: true,
    scte35: true,
    cueTags: true,
  },
  acceptedCreativeTypes: ['linear', 'nonLinear', 'companion'],
  linear: {
    minDurationSeconds: 15,
    maxDurationSeconds: 30,
    skippable: true,
    skipOffsetSeconds: 5,
  },
  nonLinear: {
    width: 300,
    height: 250,
    showCloseButton: true,
  },
  companionSlots: [{ width: 300, height: 250 }],
  fallback: {
    enabled: true,
    preroll: true,
    postroll: true,
    intervalSeconds: 300,
    percentage: 25,
  },
};

const pluginsWithBoth: PlayerPlugins = {
  spMenuBar: { items: [] },
  sardiusAds: existingDirectAssetAds,
  sardiusAdServer: vastAdServer,
};

const pluginsAdsDisabled: PlayerPlugins = {
  spMenuBar: { items: [] },
  sardiusAds: false,
  sardiusAdServer: false,
};

const omittedAdServer: PlayerPlugins = {
  spMenuBar: { items: [] },
  sardiusAds: existingDirectAssetAds,
};

type AssertTrue<T extends true> = T;

type SardiusAdsHasNoTagUrl = AssertTrue<
  'tagUrl' extends keyof SardiusAds ? false : true
>;
type PluginsKeepSardiusAds = AssertTrue<
  PlayerPlugins['sardiusAds'] extends false | SardiusAds | undefined
    ? true
    : false
>;

void adSettings;
void pluginsWithBoth;
void pluginsAdsDisabled;
void omittedAdServer;
void 0 as unknown as SardiusAdsHasNoTagUrl;
void 0 as unknown as PluginsKeepSardiusAds;

const invalidTagType: SardiusAdServer = {
  // @ts-expect-error tagType is vast or vmap only
  tagType: 'vpaid',
};

const invalidCreativeType: SardiusAdServer = {
  // @ts-expect-error Video.js-only creative types are not on this object
  acceptedCreativeTypes: ['vjsOverlay'],
};

void invalidTagType;
void invalidCreativeType;
