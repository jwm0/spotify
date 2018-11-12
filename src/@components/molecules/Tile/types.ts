export type Props = {
  background?: string,
  title?: string,
  artistName?: string,
  size?: number,
  isRound?: boolean,
  id: string,
  name?: string,
  setPlaying: (id: string, artist: string, title: string) => void,
};
