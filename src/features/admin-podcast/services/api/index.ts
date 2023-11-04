import { fetchPodcasts } from './fetchPodcasts';
import { createPodcast } from './createPodcast';

export const adminPodcastKeys = {
  all: ['admin-podcasts'] as const,
  lists: () => [...adminPodcastKeys.all, 'list'] as const
};

export const adminPodcastApi = {
  fetchPodcasts,
  createPodcast
};
