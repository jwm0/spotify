import { Type } from 'types/youtube';

export enum SEARCH {
  REQUESTED = 'SEARCH_REQUESTED',
  STARTED = 'SEARCH_STARTED',
  SUCCEED = 'SEARCH_SUCCEED',
  FAILED = 'SEARCH_FAILED',
  FINISHED = 'SEARCH_FINISHED',
};

export const requestSearch = (query: string, results: number = 15, queryType?: Type) => ({
  query,
  queryType,
  results,
  type: SEARCH.REQUESTED,
});
