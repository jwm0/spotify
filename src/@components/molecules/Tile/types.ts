export type Props = {
  background?: string,
  title?: string,
  artistName?: string,
  size?: number,
  isRound?: boolean,
  id: string,
  name?: string,
  type?: 'song' | 'playlist' | 'artist' | 'add',
  setPlaying: (id: string, artist: string, title: string) => void,
  customOnClick?: any,
};
