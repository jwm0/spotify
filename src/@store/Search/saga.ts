import { all, takeLatest, put, call } from 'redux-saga/effects';

import { Type, Category } from 'types/youtube';
import { Search } from '@services/youtube';

import { SEARCH, SEARCH_TYPE } from './actions';

const getArtist = (title: string) => {
  // TODO: improve regex
  const arr = title.match(/[^-]+/g);

  if (arr) {
    const [artistName = '', title = ''] = arr;
    return {
      artistName: artistName.trim(),
      title: title.trim(),
    };
  }
  return {};
};

function* fetchSearchData(action) {
  try {
    yield put({ type: SEARCH.STARTED, query: action.query });

    const { data: songData } = yield call(Search.list, action.query, 6, Type.VIDEO, Category.MUSIC);
    const { data: artistData } = yield call(Search.list, action.query, 4, Type.CHANNEL);
    const { data: playlistData } = yield call(Search.list, action.query, 4, Type.PLAYLIST);
    const songs = songData.items.map((song) => {
      const { artistName, title } = getArtist(song.snippet.title);
      return {
        artistName,
        thumbnail: song.snippet.thumbnails.default,
        title,
      };
    });
    console.log('artist', artistData);
    console.log('play', playlistData)
    const artist = {};
    const playlist = {};

    yield put({
      payload: { data: { songs, artist, playlist } },
      type: SEARCH.SUCCEED,
    });
  } catch (error) {
    yield put({
      payload: { error },
      type: SEARCH.FAILED,
    });
  }
  yield put({ type: SEARCH.FINISHED });
}

function* fetchSearchDataByType(action) {
  try {
    yield put({ type: SEARCH.STARTED, query: action.query });

    const { data } = yield call(Search.list, action.query, action.results, action.queryType);

    yield put({
      payload: { data: data.items },
      type: SEARCH.SUCCEED,
    });
  } catch (error) {
    yield put({
      payload: { error },
      type: SEARCH.FAILED,
    });
  }
  yield put({ type: SEARCH.FINISHED });
}


export default function* searchSaga() {
  yield all([
    // TODO: fix type casting
    takeLatest(SEARCH.REQUESTED as any, fetchSearchData),
    takeLatest(SEARCH_TYPE.REQUESTED as any, fetchSearchDataByType),
  ]);
}