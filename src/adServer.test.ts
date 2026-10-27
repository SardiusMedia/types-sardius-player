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
  tagUrl: 'https://ads.example.com/vast',
  overlayPlacement: 'lowerThird',
  showCloseButton: true,
  skipPrerollWhenCueAtStart: false,
  skipPostrollWhenCueAtEnd: true,
  fallback: {
    enabled: true,
    entries: [
      { timing: 'intervalMinutes', value: 5 },
      {
        timing: 'percentage',
        value: 50,
        mediaUrl: 'https://cdn.example.com/spot.mp4',
        clickThroughUrl: 'https://example.com/go',
      },
    ],
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

const topPlacement: SardiusAdServer = {
  overlayPlacement: 'top',
};
const middleCenterPlacement: SardiusAdServer = {
  overlayPlacement: 'middleCenter',
};

const invalidPlacement: SardiusAdServer = {
  // @ts-expect-error overlay placement is a fixed set
  overlayPlacement: 'fullBleed',
};
const removedUpperThird: SardiusAdServer = {
  // @ts-expect-error upperThird was replaced by top
  overlayPlacement: 'upperThird',
};

void topPlacement;
void middleCenterPlacement;
void invalidPlacement;
void removedUpperThird;
