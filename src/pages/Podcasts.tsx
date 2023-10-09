import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { podcastActions, podcastSelectors } from '~/features/podcast';
import PodcastCreateDrawer from '~/features/podcast/components/PodcastCreateDrawer';
import PodcastTable from '~/features/podcast/components/PodcastTable';
import EnhancedTableToolbar from '~/shared/components/ui/EnhancedTable/EnhancedTableToolbar';

const Podcasts = () => {
  const dispatch = useDispatch();
  const podcastsSelected = useSelector(podcastSelectors.getPodcastsSelected);

  const handleCreateItem = () => {
    dispatch(podcastActions.setIsCreatingPodcast(true));
  };

  const handleEditData = () => {
    console.log(podcastsSelected[0]);
  };

  const handleOpenDeleteDialog = () => {
    dispatch(podcastActions.setIsDeletingPodcast(true));
  };
  return (
    <>
      <Paper className='tw-my-12 tw-text-foreground tw-bg-background tw-shadow tw-shadow-border tw-border-border/50 tw-border-solid tw-border tw-scrollbar'>
        <EnhancedTableToolbar
          tableName='Podcast'
          numSelected={podcastsSelected.length}
          onCreateItem={handleCreateItem}
          onEditItem={handleEditData}
          onDeleteItems={handleOpenDeleteDialog}
        />
        <PodcastTable />
      </Paper>
      <PodcastCreateDrawer />
    </>
  );
};

export default Podcasts;
