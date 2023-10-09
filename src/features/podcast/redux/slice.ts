import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isCreatingPodcast: false,
  isUpdatingPodcast: false,
  isDeletingPodcast: false,
  podcastsSelected: []
};

const podcastSlice = createSlice({
  name: 'podcasts',
  initialState,
  reducers: {
    setIsCreatingPodcast: (state, { payload }) => {
      state.isCreatingPodcast = payload;
    },
    setIsUpdatingPodcast: (state, { payload }) => {
      state.isUpdatingPodcast = payload;
    },
    setIsDeletingPodcast: (state, { payload }) => {
      state.isDeletingPodcast = payload;
    },
    setPodcastSelected: (state, { payload }) => {
      state.podcastsSelected = payload;
    }
  }
});

export const { name, actions, reducer } = podcastSlice;
