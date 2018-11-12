export enum PLAYER {
  SET_NOW_PLAYING = 'SET_NOW_PLAYING',
  CUE_SONG = 'CUE_SONG',
  NEXT_SONG = 'NEXT_SONG',
  PREVIOUS_SONG = 'PREVIOUS_SONG',
};

export const setNowPlaying = (id, artist, title) => ({
  artist,
  id,
  title,
  type: PLAYER.SET_NOW_PLAYING,
});

export const addSongToQueue = (id, artist, title) => ({
  artist,
  id,
  title,
  type: PLAYER.CUE_SONG,
});

export const playNextSong = () => ({
  type: PLAYER.NEXT_SONG,
})

export const playPreviousSong = () => ({
  type: PLAYER.PREVIOUS_SONG,
})