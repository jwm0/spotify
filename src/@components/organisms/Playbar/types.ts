export type Props = {
  // TODO: add proper types
  player: any,
  nextSong: () => void,
  prevSong: () => void,
};

export type State = {
  showVideo: boolean,
  currentTime: number,
  duration: number,
};
