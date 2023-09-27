export interface AccountTier {
  assets?: {
    create?: boolean;
    enabled?: boolean;
    limit?: number | null;
    linked?: boolean;
    metadata?: boolean;
    upload?: boolean;
  };
  sites?: {
    enabled?: boolean;
    layoutsAll?: boolean;
    layouts?: string[];
    siteAccess?: string[];
    overlays?: boolean;
    editExperience?: boolean;
    sponsors?: boolean;
  };
  feeds?: {
    enabled?: boolean;
  };
  calendars?: {
    enabled?: boolean;
  };
  pendingEvents?: {
    enabled?: boolean;
  };
  user?: {
    enabled?: boolean;
  };
  polls?: {
    enabled?: boolean;
  };
  tickets?: {
    enabled?: boolean;
  };
  coupons?: {
    enabled?: boolean;
  };
  categories?: {
    enabled?: boolean;
  };
  transcode?: {
    enabled?: boolean;
  };
  chat?: {
    enabled?: boolean;
  };
  bios?: {
    enabled?: boolean;
  };
  playerStats?: {
    enabled?: boolean;
  };
  accounts?: {
    enabled?: boolean;
  };
  scp?: {
    enabled?: boolean;
  };
  roles?: {
    enabled?: boolean;
  };
}

interface BillingInfoObject {
  billingAddress?: string | null;
  billingCity?: string | null;
  billingCountry?: string | null;
  billingState?: string | null;
  billingZip?: string | null;
}

interface ContactInfoObject {
  contactEmail?: string | null;
  contactName?: string | null;
  contactPhone?: string | null;
  contactTitle?: string | null;
}

export interface FireBaseObject {
  apiKey: string;
  authDomain: string;
  databaseURL: string;
  projectId: string;
}

interface PaymentsObject {
  card: {
    cardType: string;
    country: string;
    expMonth: number;
    expYear: number;
    last4: string;
  };
  createdAt?: number;
  currency?: string;
  customerId?: string;
  paymentId?: string;
  subscriptionId?: string;
}

interface MediaSourcesObjects {
  apiKey?: string;
  id?: string;
  name: string;
  password?: string;
  type?: string;
  username?: string;
  value: string;
}

/* publishing profile fields */
export interface PublishingProfilesObjects {
  destination?: string;
  id?: string;
  rules?: Array<RulesObjects>;
  title?: string;
}

interface RulesObjects {
  folder?: string;
  height?: string | number;
  output: string;
  time?: number;
  width?: number;
  interval?: number;
  bitrate?: number;
  extension?: string;
  video_codec?: string;
  audio_bitrate?: string;
  audio_channels_number?: string;
  audio_sample_rate?: string;
  stream?: Array<StreamObjects>;
}

interface StreamObjects {
  audio_bitrate?: number;
  bitrate: number;
  keyframe: number;
  optimize_bitrate: number;
  audio_codec?: string;
  size: string;
}

export interface AccountModel {
  access?: Array<AccessLevel>;
  accountManager?: string;
  active: boolean;
  allowedTokens?: number;
  apiKeys?: {
    stripe: string;
    stripePublic: string;
  };
  autoArchive?: boolean;
  billingInfo?: BillingInfoObject;
  chatTitles?: Array<string>;
  childAccounts?: {
    key: string;
  };
  clippingFeedId?: string;
  contactInfo?: ContactInfoObject;
  controlPanel?: {
    accessTier?: AccountTier;
    advancedSimLive?: {
      enabled: boolean;
    };
    assetSubText?: string[];
    disabledPIDEdits?: {
      enabled: boolean;
    };
    makito?: boolean;
    ott?: {
      enabled: boolean;
    };
    places?: {
      enabled: boolean;
    };
    rooms?: {
      enabled: boolean;
    };
    simLive?: {
      enabled: boolean;
    };
    simLiveFeed?: {
      enabled: boolean;
    };
    siteAccess?: ('Event' | 'Stream Only' | 'Video on Demand')[];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
  };
  defaultPlayerId?: string;
  description?: string | null;
  development?: boolean;
  firebase?: FireBaseObject;
  id: string;
  links?: {
    termsOfService?: string;
  };
  logo?: string;
  loginType?: string;
  login?:KeyValueTyped;
  mediaSources?: KeyValueTyped<MediaSourcesObjects>;
  name: string;
  orgSize?: string | null;
  payments?: PaymentsObject;
  preRollUrls?: Array<string>;
  publishingProfileDefault?: string;
  publishingProfiles?: Array<PublishingProfilesObjects>;
  tier?: string;
  qEncodeApiKey?: string | null;
  trial?: number | null;
  gcp?: {
    public?: FireBaseObject;
    private?: {
      firebaseServiceEmail?: string;
      firebaseServiceKey?: string;
      projectId?: string;
      databaseUrl?: string;
    };
  };
  mpx?: {
    username?: string;
    password?: string;
    id?: string;
    type?: string;
    hash?: string;
  };
  youtubeApiKey?: string;
}

export interface AccessLevel {
  sk: string;
  createdAt: string;
  createdBy: string;
  id: string;
  title: string;
  type: string;
}

export interface AccountsList {
  [key: string]: AccountModel;
}
