export enum USER_PLAYLISTS {
  REQUESTED = 'USER_PLAYLISTS_REQUESTED',
  STARTED = 'USER_PLAYLISTS_STARTED',
  SUCCEED = 'USER_PLAYLISTS_SUCCEED',
  FAILED = 'USER_PLAYLISTS_FAILED',
  FINISHED = 'USER_PLAYLISTS_FINISHED',
};

export enum PLAYLIST {
  REQUEST_CREATE = 'REQUEST_CREATE_PLAYLIST',
  CREATE = 'CREATE_PLAYLIST',
  REQUEST_DELETE = 'REQUEST_DELETE_PLAYLIST',
  DELETE = 'DELETE_PLAYLIST',
  REQUEST_ADD_TO = 'REQUEST_ADD_TO_PLAYLIST',
  ADD_TO = 'ADD_TO_PLAYLIST',
  REQUEST_EDIT = 'REQUEST_EDIT_PLAYLIST',
  EDIT = 'EDIT_PLAYLIST',
};

export enum USER {
  REQUEST_LOGIN = 'REQUEST_LOGIN',
  START_LOGIN = 'START_LOGIN',
  LOGIN = 'LOGIN',
  REQUEST_LOGOUT = 'REQUEST_LOGOUT',
  LOGOUT = 'LOGOUT',
};

export const requestLogin = (provider: string) => ({
  provider,
  type: USER.REQUEST_LOGIN,
});

export const requestLogout = () => ({
  type: USER.REQUEST_LOGOUT,
});

export const requestUserPlaylists = () => ({
  type: USER_PLAYLISTS.REQUESTED,
});

export const requestPlaylistCreate = (data) => ({
  data,
  type: PLAYLIST.REQUEST_CREATE,
});

export const requestPlaylistDelete = (id: string) => ({
  id,
  type: PLAYLIST.REQUEST_DELETE,
});

export const requestAddSongToPlaylist = (playlistId: string, songId: string) => ({
  playlistId,
  songId,
  type: PLAYLIST.REQUEST_ADD_TO,
});

export const requestEditPlaylist = (id: string) => ({
  id,
  type: PLAYLIST.REQUEST_EDIT,
});

export const startLogin = (information) => ({
  information,
  type: USER.START_LOGIN,
});