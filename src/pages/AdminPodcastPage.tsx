import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import {
  PodcastCreateDrawer,
  PodcastTable,
  adminPodcastActions,
  adminPodcastSelectors
} from '~/features/admin-podcast';
import EnhancedTableToolbar from '~/shared/components/ui/EnhancedTable/EnhancedTableToolbar';

const AdminPodcastPage = () => {
  const dispatch = useDispatch();
  const podcastsSelected = useSelector(adminPodcastSelectors.getPodcastsSelected);

  const handleCreateItem = () => {
    dispatch(adminPodcastActions.setIsCreatingPodcast(true));
  };

  const handleEditData = () => {
    console.log(podcastsSelected[0]);
  };

  const handleOpenDeleteDialog = () => {
    dispatch(adminPodcastActions.setIsDeletingPodcast(true));
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

export default AdminPodcastPage;
