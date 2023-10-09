import { useQuery, UseQueryResult } from 'react-query';
import { podcastKeys } from '..';
import { fetchPodcasts } from '../services/api/fetchPodcasts';
import { Podcast } from '../models/Podcast';

export const usePodcasts = (): UseQueryResult<Podcast[]> => {
  return useQuery(podcastKeys.lists(), fetchPodcasts);
};
