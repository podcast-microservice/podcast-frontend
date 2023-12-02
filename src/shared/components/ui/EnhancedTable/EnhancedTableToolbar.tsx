import cx from 'classnames';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import Zoom from '@mui/material/Zoom';

interface IProps {
  /**
   * Specify table name in EnhancedTableToolbar
   */
  tableName: string;
  /**
   * Specify number of selected items from table in EnhancedTableToolbar
   */
  numSelected: number;
  /**
   * Specify a className to be added to EnhancedTableToolbar
   */
  className?: string;
  /**
   * Specify function on edit item in EnhancedTableHead
   */
  onCreateItem: () => void;
  /**
   * Specify function on edit item in EnhancedTableHead
   */
  onEditItem: () => void;
  /**
   * Specify function on deletes items in EnhancedTableHead
   */
  onDeleteItems: () => void;
}

const EnhancedTableToolbar = ({
  tableName,
  numSelected,
  className,
  onCreateItem,
  onEditItem,
  onDeleteItems
}: IProps) => {
  const handleCreate = () => {
    onCreateItem();
  };
  const handleEdit = () => {
    onEditItem();
  };
  const handleDelete = () => {
    onDeleteItems();
  };
  const toolbarClass = cx(
    'tw-flex tw-flex-row tw-items-center tw-justify-between tw-pl-4 tw-pr-2',
    numSelected > 0 && 'tw-bg-border/20',
    className
  );

  return (
    <Toolbar className={toolbarClass}>
      {numSelected > 0 ? (
        <Typography className='tw-text-foreground'>{numSelected} selected</Typography>
      ) : (
        <Typography className='tw-text-foreground' variant='h6'>
          {tableName}
        </Typography>
      )}
      {numSelected > 0 ? (
        <div>
          {numSelected === 1 && (
            <Tooltip title='Edit' placement='top' arrow TransitionComponent={Zoom}>
              <IconButton
                onClick={handleEdit}
                className='tw-text-border hover:tw-text-primary hover:tw-bg-primary/30 tw-p-2.5'
              >
                <EditIcon className='tw-text-[20px]' />
              </IconButton>
            </Tooltip>
          )}
          <Tooltip title='Delete' placement='top' arrow TransitionComponent={Zoom}>
            <IconButton
              onClick={handleDelete}
              className='tw-text-border hover:tw-text-red-600 hover:tw-bg-red-600/30 tw-p-2.5 tw-ml-2'
            >
              <DeleteIcon className='tw-text-[20px]' />
            </IconButton>
          </Tooltip>
        </div>
      ) : (
        <div>
          <Tooltip title='Filter' placement='top' arrow TransitionComponent={Zoom}>
            <IconButton className='tw-text-border hover:tw-bg-border/20'>
              <FilterListIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title='Create' placement='top' arrow TransitionComponent={Zoom}>
            <IconButton
              onClick={handleCreate}
              className='tw-text-border hover:tw-text-primary hover:tw-bg-primary/30 tw-ml-2'
            >
              <AddIcon />
            </IconButton>
          </Tooltip>
        </div>
      )}
    </Toolbar>
  );
};

export default EnhancedTableToolbar;
