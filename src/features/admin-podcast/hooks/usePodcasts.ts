import { useQuery, UseQueryResult } from 'react-query';
import { adminPodcastKeys } from '..';
import { fetchPodcasts } from '../services/api/fetchPodcasts';
import { Podcast } from '../models/Podcast';

export const usePodcasts = (): UseQueryResult<Podcast[]> => {
  return useQuery(adminPodcastKeys.lists(), fetchPodcasts);
};
