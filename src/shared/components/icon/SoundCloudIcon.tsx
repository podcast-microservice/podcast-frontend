import SvgIcon from '@mui/material/SvgIcon';

interface IProps {
  /**
   * Specify a className to be added to SoundCloudIcon
   */
  className?: string;
}

const SoundCloudIcon = ({ className }: IProps) => {
  return (
    <SvgIcon className={className}>
      <svg xmlns='http://www.w3.org/2000/svg' width='256' height='256' viewBox='0 0 256 256'>
        <path
          fill='currentColor'
          d='M24 120v48a8 8 0 0 1-16 0v-48a8 8 0 0 1 16 0Zm24-32a8 8 0 0 0-8 8v96a8 8 0 0 0 16 0V96a8 8 0 0 0-8-8Zm32-8a8 8 0 0 0-8 8v104a8 8 0 0 0 16 0V88a8 8 0 0 0-8-8Zm32-32a8 8 0 0 0-8 8v136a8 8 0 0 0 16 0V56a8 8 0 0 0-8-8Zm110.84 58.34A80 80 0 0 0 144 40a8 8 0 0 0-8 8v144a8 8 0 0 0 8 8h64a48 48 0 0 0 14.84-93.66Z'
        />
      </svg>
    </SvgIcon>
  );
};

export default SoundCloudIcon;
