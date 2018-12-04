export type Props = {
  isOpen?: boolean,
  onClose: () => void,
  playlists: {}[],
  addToPlaylist: (playlistId: string) => void,
};

export type State = {
  scrollPosition: number,
};
