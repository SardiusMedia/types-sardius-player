/*
 ** A list of all Sardius Player Events, where the key is the event name
 ** and the value is the message logged to the console if logging is enabled
 **
 ** Important Terms:
 ** MSE: Media Source Element
 ** ABR: Auto Bit Rate
 ** PTS: Presentation Time Stamp
 **
 */

export default {
  /* ------------------------------------------------------- */
  /* ---------- STREAMING PROTOCOL LIBRARY EVENTS ---------- */
  /* ------------------------------------------------------- */

  // fired when the instance of the respective protocol library has been initialized
  SP_LIB_READY: 'Protocol Library Successfully Initialized',
  // fired when the instance of the respective protocol library begins to destroy
  SP_LIB_DESTROY: 'Protocol Library Destroying',

  /* ---------------------------------- */
  /* ---------- MEDIA EVENTS ---------- */
  /* ---------------------------------- */

  // fired before the source media is attached to the MSE
  SP_MEDIA_BEFORE_ATTACH: 'Media Attaching to MSE',
  // fired after the source media is attached to the MSE
  SP_MEDIA_AFTER_ATTACH: 'Media Successfully Attached to MSE',
  // fired before the media source is detached from the MSE
  SP_MEDIA_BEFORE_DETACH: 'Media Detaching from MSE',
  // fired after the media source is detached from the MSE
  SP_MEDIA_AFTER_DETACH: 'Media Successfully Detached from MSE',
  // fired when there is enough data available to be played
  SP_MEDIA_READY: 'Media Ready to be Played',
  // fired when an increased amount of dropped frames is detected
  SP_MEDIA_FRAME_DROP: 'Increased Amount of Dropped Frames Detected',
  // fired when an increased amount of dropped frames triggers auto level capping for ABR
  SP_MEDIA_FRAME_DROP_LEVEL_CAP:
    'ABR Capped Due to Increase Amount of Dropped Frames',
  // fired when a decrypt key begins to load
  SP_MEDIA_START_DECRYPT_KEY: 'Decrypt Key Loading',
  // fired when a decrypt key has successfully loaded
  SP_MEDIA_AFTER_DECRYPT_KEY: 'Decrypt Key Successfully Loaded',
  // fired when playback has ended
  SP_MEDIA_END: 'Playback has ended',
  // fired when all relevant metadata has loaded
  SP_MEDIA_LOADED_METADATA: 'Metadata Loaded',
  // fired when playback is not or is not yet allowed
  SP_MEDIA_BLOCKED_PLAYBACK: 'Playback Not Allowed',
  // fired when playback has been paused
  SP_MEDIA_PAUSED: 'Playback has Paused',
  // fired when playback has begun
  SP_MEDIA_PLAY: 'Playback has Begun',
  // fired when playback has resumed after a pause
  SP_MEDIA_RESUMED: 'Playback has Resumed',
  // fired when progress has been made in the video
  SP_MEDIA_PROGRESS: 'Playback Progressed',
  // fired when the time attribute has been updated
  SP_MEDIA_UPDATED_TIME: 'Current Time Updated',
  // fired when playback has stopped to wait for data to load
  SP_MEDIA_WAITING: 'Waiting for Data Load',
  // fired when the playback rate has changed
  SP_MEDIA_RATE_CHANGE: 'Playback Rate Change',
  // fired when a scrub event has been requested
  SP_MEDIA_START_SCRUB: 'Scrubbing has Started',
  // fired when a scrub event is in progress
  SP_MEDIA_DURING_SCRUB: 'Scrubbing in Progress',
  // fired when a scrub event has successfully completed
  SP_MEDIA_AFTER_SCRUB: 'Scrubbing Complete',

  /* ----------------------------------- */
  /* ---------- METRIC EVENTS ---------- */
  /* ----------------------------------- */

  // fired when a new metic type has been added
  SP_METRIC_NEW_ADDED: 'A New Metric Has been Added',
  // fired when a metric changes: added, updated, cleared
  SP_METRIC_CHANGE: "A Metric's state has been changed",
  // fired when a known metric is Updated
  SP_METRIC_UPDATED: 'A Metric has been updated',
  // fired when there is an overall change to the metrics
  SP_METRIC_LIST_CHANGE: 'The Overall Metrics have Changed',

  /* ----------------------------------- */
  /* ---------- BUFFER EVENTS ---------- */
  /* ----------------------------------- */

  // fired when codec needed for the source buffer is known
  SP_BUFFER_FOUND_CODEC: 'Source Buffer Codec Found',
  // fired when the source buffer has been successfully added
  SP_BUFFER_AFTER_ADD: 'Source Buffer Successfully Added',
  // fired when a the source buffer's state is changed.
  SP_BUFFER_STATE_TRANSITION: 'Buffer Event: State Change',
  // fired when the buffer's state changes from stalled to ready
  SP_BUFFER_STATE_READY: 'Buffer Event: State Change to Ready',
  // fired before the source buffer will be reset
  SP_BUFFER_BEFORE_RESET: 'Source Buffer Resetting',
  // fired when a fragment is appending to the source buffer
  SP_BUFFER_START_APPEND: 'Fragment Appending to Source Buffer',
  // fired when a fragment has been successfully appended to the source buffer
  SP_BUFFER_AFTER_APPEND: 'Fragment Successfully Appended to Source Buffer',
  // fired when the stream has ended and no more data will be added to the source buffer
  SP_BUFFER_END_STREAM: 'All Stream Data is Added to Source Buffer',
  // fired when the source buffer will be flushed
  SP_BUFFER_START_FLUSH: 'Source Buffer Flushing',
  // fired when the source buffer has been successfully flushed
  SP_BUFFER_AFTER_FLUSH: 'Source Buffer Flushed',

  /* ------------------------------------- */
  /* ---------- MANIFEST EVENTS ---------- */
  /* ------------------------------------- */

  // fired when a manifest starts to load
  SP_MANIFEST_START_LOAD: 'Manifest Loading',
  // fired when a manifest is successfully loaded
  SP_MANIFEST_AFTER_LOAD: 'Manifest Successfully Loaded',
  // fired when a manifest is successfully parsed
  SP_MANIFEST_AFTER_PARSE: 'Manifest Successfully Parsed',
  // fired when a manifest validity
  SP_MANIFEST_FUTURE: 'Manifest is Valid in Future',
  // fired when a manifest validity expires
  SP_MANIFEST_EXPIRED: 'Manifest validity time expired',
  // fired when a manifest period is ready for playback
  SP_MANIFEST_PERIOD_READY: 'Manifest period is ready for playback',
  // fired when a period switch starts
  SP_MANIFEST_PERIOD_START_SWITCH: 'A Manifest Period Switch has Started',
  // fired when a period has successfully switched
  SP_MANIFEST_PERIOD_AFTER_SWITCH: 'Manifest Period Successfully Switched',

  /* ------------------------------------------------ */
  /* ---------- VIDEO QUALITY LEVEL EVENTS ---------- */
  /* ------------------------------------------------ */

  // fired when a level starts to load
  SP_LEVEL_START_LOAD: 'Video Quality Level Loading',
  // fired when a level is successfully loaded
  SP_LEVEL_AFTER_LOAD: 'Video Quality Level Successfully Loaded',
  // fired when a level's details have been updated
  SP_LEVEL_UPDATED_DETAILS: 'Video Quality Level Details Updated',
  // fired when a level's PTS has been updated
  SP_LEVEL_UPDATED_PTS: 'Video Quality Level PTS Updated',
  // fired when a level starts to switch
  SP_LEVEL_START_SWITCH: 'Video Quality Level Switching',
  // fired when a level has successfully switched
  SP_LEVEL_AFTER_SWITCH: 'Video Quality Level Successfully Switched',

  /* ------------------------------------------- */
  /* ---------- VIDEO FRAGMENT EVENTS ---------- */
  /* ------------------------------------------- */

  // fired when a fragment starts to load
  SP_FRAGMENT_START_LOAD: 'Video Fragment Loading has Started',
  // fired when a fragment is loading
  SP_FRAGMENT_DURING_LOAD: 'Video Fragment is Loading',
  // fired when a fragment has successfully loaded
  SP_FRAGMENT_AFTER_LOAD: 'Video Fragment Successfully Loaded',
  // fired when a fragment load is aborted due to ABR down-switch
  SP_FRAGMENT_ABORT_LOAD: 'Video Fragment Load Aborted due to ABR Switch',
  // fired when a fragment is successfully decrypted
  SP_FRAGMENT_AFTER_DECRYPT: 'Video Fragment Successfully Decrypted',
  // fired when a the initial PTS is found on a fragment
  SP_FRAGMENT_FOUND_PTS_INIT: 'Initial Video Fragment PTS Found',
  // fired when a the initial fragment has been parsed
  SP_FRAGMENT_AFTER_PARSE_INIT: 'Initial Video Fragment Successfully Parsed',
  // fired when a fragment has been successfully parsed
  SP_FRAGMENT_AFTER_PARSE: 'Video Fragment Successfully Parsed',
  // fired when a fragment's data has been successfully parsed - frag data/metadata
  SP_FRAGMENT_AFTER_PARSE_DATA:
    'Video Fragment Data and Metadata Successfully Parsed',
  // fired when a fragment's metadata has been successfully parsed - id3s
  SP_FRAGMENT_AFTER_PARSE_METADATA:
    'Video Fragment id3 Data Successfully Parsed',
  // fired when a fragment's user data has been successfully parsed - sei text
  SP_FRAGMENT_AFTER_PARSE_USERDATA:
    'Video Fragment SEI Text Data Successfully Parsed',
  // fired when a fragment has been successfully added to the buffer
  SP_FRAGMENT_AFTER_APPEND_BUFFER:
    'Video Fragment Successfully Appended to Buffer',
  // fired when a fragment at the current playback has changed
  SP_FRAGMENT_AFTER_CHANGE: 'Video Fragment Switched',

  /* ---------------------------------------- */
  /* ---------- AUDIO TRACK EVENTS ---------- */
  /* ---------------------------------------- */

  // fired when an audio track starts to load
  SP_AUDIO_TRACK_START_LOAD: 'Audio Track Loading',
  // fired when an audio track is successfully loaded
  SP_AUDIO_TRACK_AFTER_LOAD: 'Audio Track Successfully Loaded',
  // fired when the audio track list been updated
  SP_AUDIO_TRACK_UPDATED_LIST: 'Audio Track List Updated',
  // fired when an audio track starts to switch
  SP_AUDIO_TRACK_START_SWITCH: 'Audio Track Switching',
  // fired when an audio track has successfully switched
  SP_AUDIO_TRACK_AFTER_SWITCH: 'Audio Track Successfully Switched',

  /* --------------------------------------- */
  /* ---------- TEXT TRACK EVENTS ---------- */
  /* --------------------------------------- */

  // fired when a subtitle starts to load
  SP_SUB_TRACK_START_LOAD: 'Subtitle Track Loading',
  // fired when a subtitle is successfully loaded
  SP_SUB_TRACK_AFTER_LOAD: 'Subtitle Track Successfully Loaded',
  // fired when a subtitle fragment is successfully loaded
  SP_TEXT_TRACK_FRAGMENT_START_LOAD: 'Text Track Fragment Successfully Loaded',
  // fired when a subtitle fragment is successfully loaded
  SP_SUB_TRACK_FRAGMENT_AFTER_LOAD:
    'Subtitle Track Fragment Successfully Loaded',
  // fired when a text track fragment has been successfully rendered
  SP_TEXT_TRACK_FRAGMENT_RENDERED: 'Text Tack Fragment Successfully Rendered',
  // fired when the subtitle list been updated
  SP_SUB_TRACK_UPDATED_LIST: 'Subtitle Track List Updated',
  // fired when a subtitle starts to switch
  SP_SUB_TRACK_START_SWITCH: 'Subtitle Track Switching',
  // fired when a subtitle has successfully switched
  SP_SUB_TRACK_AFTER_SWITCH: 'Subtitle Track Successfully Switched',
  // fired when the text track container is resized
  SP_TEXT_TRACK_CONTAINER_RESIZE: 'Text Track Container Resized',
};
