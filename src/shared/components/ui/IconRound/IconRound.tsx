import cx from 'classnames';

interface IProps {
  /**
   * Specify a icon to be added to icon in IconRound
   */
  icon: JSX.Element;
  /**
   * Specify whether the IconRound has double circle, or not
   */
  hasRing?: boolean;
  /**
   * Specify the background of the IconRound
   */
  backgroundColor: 'primary' | 'secondary' | 'background' | 'foreground' | 'white';
  /**
   * Specify a className to be added to IconRound
   */
  className?: string;
}

const IconRound = ({ icon, hasRing, backgroundColor, className }: IProps) => {
  const defaultClass = cx(
    'tw-inline-flex tw-items-center tw-justify-center tw-h-7 tw-w-7',
    {
      'tw-bg-primary': backgroundColor === 'primary',
      'tw-bg-secondary': backgroundColor === 'secondary',
      'tw-bg-background': backgroundColor === 'background',
      'tw-bg-foreground': backgroundColor === 'foreground',
      'tw-bg-white': backgroundColor === 'white'
    },
    'tw-rounded-full',
    !hasRing && className
  );

  const ringClass = cx(
    'tw-inline-flex tw-items-center tw-justify-center tw-h-10 tw-w-10',
    {
      'tw-bg-primary/30': backgroundColor === 'primary',
      'tw-bg-secondary/30': backgroundColor === 'secondary',
      'tw-bg-background/30': backgroundColor === 'background',
      'tw-bg-foreground/30': backgroundColor === 'foreground',
      'tw-bg-white/30': backgroundColor === 'white'
    },
    'tw-rounded-full',
    hasRing && className
  );

  const DefaultIconRound = <div className={defaultClass}>{icon}</div>;
  if (!hasRing) {
    return DefaultIconRound;
  }
  return <div className={ringClass}>{DefaultIconRound}</div>;
};

export default IconRound;
