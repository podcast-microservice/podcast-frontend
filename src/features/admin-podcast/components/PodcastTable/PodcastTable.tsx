import { useDispatch, useSelector } from 'react-redux';
import EnhancedTable from '~/shared/components/ui/EnhancedTable/EnhancedTable';
import { HeadCell } from '~/shared/utils/models/tableSort';
import { adminPodcastActions, adminPodcastSelectors } from '../..';
import { Podcast } from '../../models/Podcast';
import { podcastHooks } from '../../hooks';

const podcastsCell: readonly HeadCell<Podcast>[] = [
  {
    id: 'title',
    numeric: false,
    disablePadding: true,
    label: 'Title'
  },
  {
    id: 'description',
    numeric: false,
    disablePadding: true,
    label: 'Description'
  }
];

const PodcastTable = () => {
  const dispatch = useDispatch();
  const podcastsSelected = useSelector(adminPodcastSelectors.getPodcastsSelected);

  const { data: podcastsData, isLoading, isError } = podcastHooks.usePodcasts();

  const handleSelectPodcast = (ids: readonly string[]) => {
    dispatch(adminPodcastActions.setPodcastSelected(ids));
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  if (!podcastsData || podcastsData.length === 0) {
    return <div>There is no data to show</div>;
  }

  return (
    <EnhancedTable
      headCells={podcastsCell}
      tableData={podcastsData}
      itemsSelected={podcastsSelected}
      onSetItemSelected={handleSelectPodcast}
    />
  );
};

export default PodcastTable;
