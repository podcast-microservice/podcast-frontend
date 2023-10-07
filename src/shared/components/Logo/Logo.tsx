import logoSvg from '~/assets/images/logo.svg';

interface IProps {
  /**
   * Specify a className to be added to Logo
   */
  className?: string;
}

const Logo = ({ className }: IProps) => {
  return <img src={logoSvg} alt='' className={className} />;
};

export default Logo;
