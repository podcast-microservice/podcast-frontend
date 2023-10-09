import { RootState } from '~/configs/reduxStore';

const getIsCreatingPodcast = (state: RootState): boolean => state?.podcasts?.isCreatingPodcast;

const getIsUpdatingPodcast = (state: RootState): boolean => state?.podcasts?.isUpdatingPodcast;

const getIsDeletingPodcast = (state: RootState): boolean => state?.podcasts?.isDeletingPodcast;

const getPodcastsSelected = (state: RootState): readonly string[] => state?.podcasts?.podcastsSelected;

export const podcastSelectors = {
  getIsCreatingPodcast,
  getIsUpdatingPodcast,
  getIsDeletingPodcast,
  getPodcastsSelected
};
