export enum DETAILS {
  REQUESTED = 'SONG_DETAILS_REQUESTED',
  STARTED = 'SONG_DETAILS_STARTED',
  SUCCEED = 'SONG_DETAILS_SUCCEED',
  FAILED = 'SONG_DETAILS_FAILED',
  FINISHED = 'SONG_DETAILS_FINISHED',
};

export const requestSongDetails = (ids: string | string[]) => ({
  ids,
  type: DETAILS.REQUESTED,
});
