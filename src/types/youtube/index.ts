export enum Type {
  CHANNEL = 'channel',
  PLAYLIST = 'playlist',
  VIDEO = 'video',
};

export enum Category {
  MUSIC = '10',
};

type Thumbnail = {
  url: string,
  width: number,
  height: number,
};

export type PlaylistDetails = {
  artistName: string,
  duration: string,
  id: string,
  playCount: string,
  quality: string,
  thumbnail: Thumbnail,
  title: string,
};
