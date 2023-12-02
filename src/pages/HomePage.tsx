import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authActions, authSelectors } from '~/features/auth';
import { HeroSection } from '~/features/homepage/components/HomePageHeroSection';
import { ProblemsSection } from '~/features/homepage/components/ProblemsSection';
import { RecentPodcastSection } from '~/features/homepage/components/RecentPodcastSection';
import { CourseSection } from '~/features/homepage/components/CourseSection';

const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isUserAuthenticated = useSelector(authSelectors.isUserAuthenticated);

  const logout = () => {
    dispatch(authActions.setIsAuthenticated(false));
  };
  return (
    <>
      <HeroSection />
      <ProblemsSection />
      <RecentPodcastSection />
      <CourseSection />
    </>
  );
};

export default HomePage;
