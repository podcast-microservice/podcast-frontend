import axiosConfig from '~/configs/axiosConfig';
import { PodcastCreatePayload } from '../../models/PodcastCreatePayload';
import { apiEndpoints } from '~/shared/utils/constants/api-endpoints';

export const createPodcast = (podcast: PodcastCreatePayload) => {
  return axiosConfig.post(apiEndpoints.podcasts, podcast);
};
