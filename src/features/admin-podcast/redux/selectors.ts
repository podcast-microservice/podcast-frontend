import { RootState } from '~/configs/reduxStore';

const getIsCreatingPodcast = (state: RootState): boolean => state?.adminPodcasts?.isCreatingPodcast;

const getIsUpdatingPodcast = (state: RootState): boolean => state?.adminPodcasts?.isUpdatingPodcast;

const getIsDeletingPodcast = (state: RootState): boolean => state?.adminPodcasts?.isDeletingPodcast;

const getPodcastsSelected = (state: RootState): readonly string[] => state?.adminPodcasts?.podcastsSelected;

export const adminPodcastSelectors = {
  getIsCreatingPodcast,
  getIsUpdatingPodcast,
  getIsDeletingPodcast,
  getPodcastsSelected
};
