import { get } from '@config/youtube';
import { Type, Category } from 'types/youtube';

export const Search = {
  list: (query: string, results: number, type?: Type, category?: Category) => get('search/', { params: {
    maxResults: results,
    part: 'snippet',
    q: query,
    type,
    videoCategoryId: category,
  } }),
};

export const Details = {
  list: (ids: string | string[]) => {
    const formattedIds = Array.isArray(ids) ? ids.join(',') : ids;

    return get('videos/', { params: {
      id: formattedIds,
      part: 'snippet,contentDetails,statistics',
    }});
  }
};
