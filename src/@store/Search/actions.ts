import { Type } from 'types/youtube';

export enum SEARCH {
  REQUESTED = 'SEARCH_REQUESTED',
  STARTED = 'SEARCH_STARTED',
  SUCCEED = 'SEARCH_SUCCEED',
  FAILED = 'SEARCH_FAILED',
  FINISHED = 'SEARCH_FINISHED',
};

export enum SEARCH_TYPE {
  REQUESTED = 'SEARCH_TYPE_REQUESTED',
  STARTED = 'SEARCH_STARTED',
  SUCCEED = 'SEARCH_TYPE_SUCCEED',
  FAILED = 'SEARCH_FAILED',
  FINISHED = 'SEARCH_FINISHED',
};

export const requestSearch = (query: string) => ({
  query,
  type: SEARCH.REQUESTED,
});

export const requestSearchByType = (query: string, results: number = 15, queryType: Type = Type.VIDEO) => ({
  query,
  queryType,
  results,
  type: SEARCH_TYPE.REQUESTED,
});
