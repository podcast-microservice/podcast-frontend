import cx from 'classnames';
import { Link, useLocation } from 'react-router-dom';
import { NavigationLink } from '~/shared/utils/constants/navigation-link';

interface IProps {
  /**
   * Specify navigation list to be rendered in NavigationMenu
   */
  navigationLinks: Array<NavigationLink>;
}

const NavigationMenu = ({ navigationLinks }: IProps) => {
  const location = useLocation();
  const currentRoute = location.pathname;
  return (
    <div className='tw-navigation-menu'>
      {navigationLinks.map((item: NavigationLink) => {
        const linkClass = cx(
          'tw-navigation-menu-item',
          currentRoute && currentRoute.includes(item.path) && 'tw-selected'
        );
        return (
          <Link className={linkClass} key={item.title} to={item.path}>
            {item.title}
          </Link>
        );
      })}
    </div>
  );
};

export default NavigationMenu;
