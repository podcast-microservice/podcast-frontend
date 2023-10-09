import cx from 'classnames';
import { z } from 'zod';
import { useDispatch, useSelector } from 'react-redux';
import { Controller, useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { zodResolver } from '@hookform/resolvers/zod';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { podcastActions, podcastSelectors } from '../..';
import { useCreatePodcast } from '../../hooks/useCreatePodcast';
import { PodcastCreatePayload } from '../../models/PodcastCreatePayload';

const FormSchema = z.object({
  title: z.string(),
  description: z.string().min(10)
});

const PodcastCreateDrawer = () => {
  const dispatch = useDispatch();
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset
  } = useForm<PodcastCreatePayload>({
    defaultValues: { title: '', description: '' },
    resolver: zodResolver(FormSchema)
  });

  const isCreatingPodcast = useSelector(podcastSelectors.getIsCreatingPodcast);

  const { mutate: createPodcast, isLoading: isCreatingPodcastAsync } = useCreatePodcast(reset);

  const onSubmitCreatePodcast = (formData: PodcastCreatePayload) => {
    createPodcast(formData);
  };
  return (
    <Drawer
      variant='temporary'
      anchor='right'
      open={isCreatingPodcast}
      onClose={() => {
        dispatch(podcastActions.setIsCreatingPodcast(false));
      }}
      transitionDuration={{ enter: 500, exit: 300 }}
      className='tw-drawer'
    >
      <Typography className='tw-text-xl tw-text-primary'>Add new podcast</Typography>
      <Typography className='tw-text-sm tw-text-foreground/50 tw-mt-1'>
        Enter all fields to add new podcast. Click add when you're done
      </Typography>
      <form className='tw-grid tw-gap-4 tw-py-4' onSubmit={handleSubmit(onSubmitCreatePodcast)}>
        <Controller
          name='title'
          control={control}
          render={({ field }) => {
            const inputClass = cx('tw-input', errors.title && 'tw-input-invalid');
            return (
              <div>
                <TextField label='Title' variant='outlined' className={inputClass} size='small' required {...field} />
                <ErrorMessage
                  errors={errors}
                  name='title'
                  render={({ message }) => (
                    <Typography className='tw-text-red-500 tw-text-sm tw-mt-1'>{message}</Typography>
                  )}
                />
              </div>
            );
          }}
        />
        <Controller
          name='description'
          control={control}
          render={({ field }) => {
            const inputClass = cx('tw-input', errors.description && 'tw-input-invalid');
            return (
              <div>
                <TextField
                  label='Description'
                  variant='outlined'
                  className={inputClass}
                  size='small'
                  required
                  {...field}
                />
                <ErrorMessage
                  errors={errors}
                  name='description'
                  render={({ message }) => (
                    <Typography className='tw-text-red-500 tw-text-sm tw-mt-1'>{message}</Typography>
                  )}
                />
              </div>
            );
          }}
        />
        <div className='tw-text-right'>
          <Button
            type='submit'
            variant='contained'
            size='medium'
            className='tw-btn tw-btn-primary tw-text-black tw-w-20'
            disabled={isCreatingPodcastAsync}
          >
            Add
          </Button>
        </div>
      </form>
    </Drawer>
  );
};

export default PodcastCreateDrawer;
