interface DashSegmentTimelineS {
  d: number;
  r: number;
  t: number;
}

interface DashSegmentTimeline {
  S: DashSegmentTimelineS | DashSegmentTimelineS[];
}

interface DashSegmentTemplate {
  initialization: string;
  media: string;
  presentationTimeOffset: number;
  SegmentTimeline: DashSegmentTimeline | DashSegmentTimeline[];
  startNumber: number;
  timescale: number;
}

export interface DashRepresentation {
  audioSamplingRate: number;
  bandwidth: number;
  codecs: string;
  height: number;
  id: number;
  SegmentTemplate: DashSegmentTemplate | DashSegmentTemplate[];
  width: number;
}

export interface DashAdaptationSet {
  bitstreamSwitching: boolean;
  mimeType: string;
  Representation: DashRepresentation | DashRepresentation[];
  segmentAlignment: boolean;
  startWithSAP: number;
  subsegmentAlignment: boolean;
  subsegmentStartsWithSAP: number;
}

interface DashSpliceTime {
  ptsTime: number;
}

interface DashSpliceProgram {
  SpliceTime: DashSpliceTime | DashSpliceTime[];
}

interface DashSpliceInsert {
  availNum: number;
  availsExpected: number;
  outOfNetworkIndicator: boolean;
  Program: DashSpliceProgram | DashSpliceProgram[];
  spliceEventCancelIndicator: boolean;
  spliceEventId: number;
  spliceImmediateFlag: boolean;
  uniqueProgramId: number;
}

interface DashSpliceInfo {
  protocolVersion: number;
  ptsAdjustment: number;
  SpliceInsert: DashSpliceInsert | DashSpliceInsert[];
  tier: number;
}

interface DashEvent {
  SpliceInfoSection: DashSpliceInfo | DashSpliceInfo[];
}

interface DashEventStream {
  Event: DashEvent | DashEvent[];
  schemeIdUri: string;
  timescale: number;
}

export interface DashPeriod {
  AdaptationSet: DashAdaptationSet | DashAdaptationSet[];
  duration: string;
  EventStream?: DashEventStream | DashEventStream[];
  id: number;
  start: string;
}

export interface DashManifest {
  MPD?: {
    Period?: DashPeriod | DashPeriod[];
  };
}

export interface DashOptions {
  allowBooleanAttributes: boolean;
  attributeNamePrefix: string;
  ignoreAttributes: boolean;
  ignoreNameSpace: boolean;
  parseAttributeValue: boolean;
  parseNodeValue: boolean;
  parseTrueNumberOnly: boolean;
  trimValues: boolean;
}

export interface DashLevel {
  attributes: {
    RESOLUTION?: {
      height: number;
      width: number;
    };
    BANDWIDTH: number;
  };
  uri: string;
  bandwidth?: number;
  resolution?: {
    width?: number;
    height?: number;
  };
}
