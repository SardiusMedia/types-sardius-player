// https://developers.google.com/youtube/v3/docs/videos

interface Thumbnail {
  height?: number;
  url?: string;
  width?: number;
}
interface Thumbnails {
  [key: string]: Thumbnail;
}
interface Localized {
  description?: string;
  title?: string;
}

interface Snippet {
  categoryId?: string;
  channelId?: string;
  channelTitle?: string;
  defaultAudioLanguage?: string;
  defaultLanguage?: string;
  description?: string;
  liveBroadcastContent?: string;
  localized?: Localized;
  publishedAt?: string;
  tags?: string[];
  thumbnails?: Thumbnails;
  title?: string;
}

interface RegionRestriction {
  allowed?: string[];
  blocked?: string[];
}

interface ContentRating {
  acbRating?: string;
  agcomRating?: string;
  anatelRating?: string;
  bbfcRating?: string;
  bfvcRating?: string;
  bmukkRating?: string;
  catvRating?: string;
  catvfrRating?: string;
  cbfcRating?: string;
  cccRating?: string;
  cceRating?: string;
  chfilmRating?: string;
  chvrsRating?: string;
  cicfRating?: string;
  cnaRating?: string;
  cncRating?: string;
  csaRating?: string;
  cscfRating?: string;
  czfilmRating?: string;
  djctqRating?: string;
  djctqRatingReasons?: string[];
  ecbmctRating?: string;
  eefilmRating?: string;
  egfilmRating?: string;
  eirinRating?: string;
  fcbmRating?: string;
  fcoRating?: string;
  fmocRating?: string;
  fpbRating?: string;
  fpbRatingReasons?: string[];
  fskRating?: string;
  grfilmRating?: string;
  icaaRating?: string;
  ifcoRating?: string;
  ilfilmRating?: string;
  incaaRating?: string;
  kfcbRating?: string;
  kijkwijzerRating?: string;
  kmrbRating?: string;
  lsfRating?: string;
  mccaaRating?: string;
  mccypRating?: string;
  mcstRating?: string;
  mdaRating?: string;
  medietilsynetRating?: string;
  mekuRating?: string;
  mibacRating?: string;
  mocRating?: string;
  moctwRating?: string;
  mpaaRating?: string;
  mpaatRating?: string;
  mtrcbRating?: string;
  nbcRating?: string;
  nbcplRating?: string;
  nfrcRating?: string;
  nfvcbRating?: string;
  nkclvRating?: string;
  oflcRating?: string;
  pefilmRating?: string;
  rcnofRating?: string;
  resorteviolenciaRating?: string;
  rtcRating?: string;
  rteRating?: string;
  russiaRating?: string;
  skfilmRating?: string;
  smaisRating?: string;
  smsaRating?: string;
  tvpgRating?: string;
  ytRating?: string;
}

interface ContentDetails {
  caption?: string;
  contentRating?: ContentRating;
  definition?: string;
  dimension?: string;
  duration?: string;
  hasCustomThumbnail?: boolean;
  licensedContent?: boolean;
  projection?: string;
  regionRestriction?: RegionRestriction;
}

interface Status {
  embeddable?: boolean;
  failureReason?: string;
  license?: string;
  madeForKids?: boolean;
  privacyStatus?: string;
  publicStatsViewable?: boolean;
  publishAt?: string;
  rejectionReason?: string;
  selfDeclaredMadeForKids?: boolean;
  uploadStatus?: string;
}

interface Statistics {
  commentCount?: string;
  dislikeCount?: string;
  favoriteCount?: string;
  likeCount?: string;
  viewCount?: string;
}

interface Player {
  embedHeight?: number;
  embedHtml?: string;
  embedWidth?: number;
}

interface TopicDetails {
  relevantTopicIds?: string[];
  topicCategories?: string[];
  topicIds?: string[];
}

interface RecordingDetails {
  recordingDate?: string;
}

interface VideoStream {
  aspectRatio?: number;
  bitrateBps?: number;
  codec?: string;
  frameRateFps?: number;
  heightPixels?: number;
  rotation?: string;
  vendor?: string;
  widthPixels?: number;
}

interface AudioStream {
  bitrateBps?: number;
  channelCount?: number;
  codec?: string;
  vendor?: string;
}

interface FileDetails {
  fileName?: string;
  fileSize?: number;
  fileType?: string;
  container?: string;
  videoStreams?: VideoStream[];
  audioStreams?: AudioStream[];
  durationMs?: number;
  bitrateBps?: number;
  creationTime?: string;
}

interface ProcessingProgress {
  partsProcessed?: number;
  partsTotal?: number;
  timeLeftMs?: number;
}

interface ProcessingDetails {
  editorSuggestionsAvailability?: string;
  fileDetailsAvailability?: string;
  processingFailureReason?: string;
  processingIssuesAvailability?: string;
  processingProgress?: ProcessingProgress;
  processingStatus?: string;
  tagSuggestionsAvailability?: string;
  thumbnailsAvailability?: string;
}

interface TagSuggestion {
  categoryRestricts?: string[];
  tag?: string;
}

interface Suggestions {
  editorSuggestions?: string[];
  processingErrors?: string[];
  processingHints?: string[];
  processingWarnings?: string[];
  tagSuggestions?: TagSuggestion[];
}

interface LiveStreamingDetails {
  activeLiveChatId?: string;
  actualEndTime?: string;
  actualStartTime?: string;
  concurrentViewers?: number;
  scheduledEndTime?: string;
  scheduledStartTime?: string;
}

export interface YoutubeApiVideo {
  contentDetails?: ContentDetails;
  etag?: string;
  fileDetails?: FileDetails;
  id?: string;
  kind?: string;
  liveStreamingDetails?: LiveStreamingDetails;
  localizations?: { [key: string]: Localized };
  player?: Player;
  processingDetails?: ProcessingDetails;
  recordingDetails?: RecordingDetails;
  snippet?: Snippet;
  statistics?: Statistics;
  status?: Status;
  suggestions?: Suggestions;
  topicDetails?: TopicDetails;
}

export interface YoutubeApiResponse {
  items?: YoutubeApiVideo[];
}
