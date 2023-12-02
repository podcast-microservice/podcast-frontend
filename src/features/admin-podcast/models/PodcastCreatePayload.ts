import { Podcast } from './Podcast';

export type PodcastCreatePayload = Pick<Podcast, 'title' | 'description'>;
