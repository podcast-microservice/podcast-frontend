import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

interface IProps extends ButtonProps {
  /**
   * Specify name to be showed in ButtonFileUpload
   */
  nameContent: string;
}

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1
});

const ButtonFileUpload = ({ nameContent, ...props }: IProps) => {
  return (
    <Button
      variant='contained'
      component='label'
      startIcon={<CloudUploadIcon className='tw-text-[20px] tw-text-black' />}
      {...props}
    >
      {nameContent}
      <VisuallyHiddenInput type='file' />
    </Button>
  );
};

export default ButtonFileUpload;
