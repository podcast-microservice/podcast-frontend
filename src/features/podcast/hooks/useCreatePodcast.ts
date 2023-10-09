import { UseFormReset } from 'react-hook-form';
import { useMutation } from 'react-query';
import { useDispatch } from 'react-redux';
import { queryClient } from '~/configs/queryClient';
import { podcastActions, podcastApi, podcastKeys } from '..';
import { PodcastCreatePayload } from '../models/PodcastCreatePayload';

export const useCreatePodcast = (resetFunction: UseFormReset<PodcastCreatePayload>) => {
  const dispatch = useDispatch();
  return useMutation(podcastApi.createPodcast, {
    onSuccess: () => {
      dispatch(podcastActions.setIsCreatingPodcast(false));
      resetFunction({ title: '', description: '' });
      queryClient.invalidateQueries(podcastKeys.lists());
    }
  });
};
