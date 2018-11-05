import { get } from '@config/youtube';
import { Type } from 'types/youtube';

export const Search = {
  list: (query: string, results: number, type?: Type) => get('search/',{ params: {
    maxResults: results,
    part: 'snippet',
    q: query,
    type,
  } })
};
