# sardiusAdServer types

## Useful information for humans

Optional VAST / ad-server player settings stored next to existing Sardius Ads
(`plugins.sardiusAds`). Direct-asset preroll/postroll URLs stay on `sardiusAds`.
This object is Bitmovin BAM v1 only; it is not Video.js.

Fields match the SE-16297 creative matrix in api-players `docs/ads.md`.

## Useful information for AI

- Do **not** add properties to `SardiusAds` / `AdSettings`.
- Plugin key: `PlayerPlugins.sardiusAdServer`.
- `tagType` v1: `'vast'`. `'vmap'` is reserved.
- `tagUrl` is a string (external or Sardius feed). Do not add a mode enum.
- Marker flags are independent booleans, not a required set.
- Fallback `postroll` and `percentage` are VOD-only at runtime (SE-16302).
- Tests: `adServer.test.ts` (compile-time assignability via `tsc --noEmit`).
