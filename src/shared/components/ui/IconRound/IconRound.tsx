import React from 'react';

interface IProps {
  /**
   * Specify a icon to be added to icon in IconRound
   */
  icon: JSX.Element;
  /**
   * Specify whether the IconRound has double circle, or not
   */
  hasDoubleCircle?: boolean;
  /**
   * Specify the background of the IconRound
   */
  backgroundColor: 'primary' | 'secondary' | 'background';
  /**
   * Specify a className to be added to IconRound
   */
  className?: string;
}

const IconRound = ({ icon, hasDoubleCircle, backgroundColor, className }: IProps) => {
  const DefaultIconRound = (
    <div
      className={`tw-flex tw-items-center tw-justify-center tw-h-7 tw-w-7 tw-bg-${backgroundColor} tw-rounded-full ${
        !hasDoubleCircle && className
      }`}
    >
      {icon}
    </div>
  );
  if (!hasDoubleCircle) {
    return DefaultIconRound;
  }
  return (
    <div
      className={`tw-inline-flex tw-items-center tw-justify-center tw-h-10 tw-w-10 tw-bg-${backgroundColor}/30 tw-rounded-full ${
        hasDoubleCircle && className
      }`}
    >
      {DefaultIconRound}
    </div>
  );
};

export default IconRound;
