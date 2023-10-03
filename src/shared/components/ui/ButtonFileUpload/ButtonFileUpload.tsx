import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ButtonFileUpload = ({ name, ...props }: any) => {
  return (
    <Button variant='contained' component='label' startIcon={<CloudUploadIcon />} {...props}>
      {name}
      <VisuallyHiddenInput type='file' />
    </Button>
  );
};

export default ButtonFileUpload;
