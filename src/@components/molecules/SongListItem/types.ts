export type Props = {
  artistName: string,
  duration: string,
  id: string,
  playCount: string,
  quality: string,
  title: string,
  nowPlayingId: string,
  setPlaying: (id: string, artist: string, title: string) => void,
  cueSong: (id: string, artist: string, title: string) => void,
};
