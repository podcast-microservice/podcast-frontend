import { routes } from '~/routes';

export interface NavigationLink {
  title: string;
  path: string;
}

export const mainNavigationLinks: Array<NavigationLink> = [
  {
    title: 'Home',
    path: routes.homePath
  },
  {
    title: 'Podcast',
    path: routes.podcastPath
  },
  {
    title: 'Course',
    path: routes.coursePath
  },
  {
    title: 'Blog',
    path: routes.blogPath
  },
  {
    title: 'News',
    path: routes.newsPath
  }
];
