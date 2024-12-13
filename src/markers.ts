export interface MarkerToAdd {
  duration: number;
  overlayText: string;
  text: string;
  time: number;
}

export interface Marker extends MarkerToAdd {
  key: string;
}

export interface MarkersPluginOptions {
  markerStyle: KeyValueTyped;
  markerTip: {
    display: boolean;
    skip: boolean;
    text: (marker: Marker) => string;
    time: (marker: Marker) => number;
    endTime: (marker: Marker) => number;
  };
  breakOverlay: {
    display: boolean;
    displayTime: number;
    text: (marker: Marker) => string;
    style: KeyValueTyped;
  };
  onMarkerClicked: (marker: Marker) => void;
  onMarkerReached: (marker: Marker, index: number) => void;
  markers: Marker[];
}

export interface MarkersPlugin {
  add: (markers: MarkerToAdd[]) => void;
  destroy: () => void;
  getMarkers: () => Marker[];
  next: () => void;
  prev: () => void;
  remove: (index: number) => void;
  removeAll: () => void;
  reset: (markers: MarkerToAdd[]) => void;
  updateTime: (force: boolean) => void;
}
