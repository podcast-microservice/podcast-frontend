import axiosConfig from '~/configs/axiosConfig';
import { apiEndpoints } from '~/shared/utils/constants/api-endpoints';

export const fetchPodcasts = () => {
  return axiosConfig.get(apiEndpoints.podcasts);
};
