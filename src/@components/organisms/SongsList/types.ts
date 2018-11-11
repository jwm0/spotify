import { PlaylistDetails } from 'types/youtube';

export type Props = {
  songIds: string[],
  getSongDetails: (ids: string | string[]) => void,
  playlist: PlaylistDetails[],
};
