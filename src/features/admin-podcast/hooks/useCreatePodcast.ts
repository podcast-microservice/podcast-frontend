import { UseFormReset } from 'react-hook-form';
import { useMutation } from 'react-query';
import { useDispatch } from 'react-redux';
import { queryClient } from '~/configs/queryClient';
import { adminPodcastActions, adminPodcastKeys, adminPodcastApi } from '..';
import { PodcastCreatePayload } from '../models/PodcastCreatePayload';

export const useCreatePodcast = (resetFunction: UseFormReset<PodcastCreatePayload>) => {
  const dispatch = useDispatch();
  return useMutation(adminPodcastApi.createPodcast, {
    onSuccess: () => {
      dispatch(adminPodcastActions.setIsCreatingPodcast(false));
      resetFunction({ title: '', description: '' });
      queryClient.invalidateQueries(adminPodcastKeys.lists());
    }
  });
};
