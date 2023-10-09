import { fetchPodcasts } from './fetchPodcasts';
import { createPodcast } from './createPodcast';

export const podcastKeys = {
  all: ['podcasts'] as const,
  lists: () => [...podcastKeys.all, 'list'] as const
};

export const podcastApi = {
  fetchPodcasts,
  createPodcast
};
