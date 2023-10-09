import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import { HeadCell, Order } from '~/shared/utils/models/tableSort';

interface IProps<T> {
  /**
   * Specify header list of table to be rendered in EnhancedTableHead
   */
  headCells: readonly HeadCell<T>[];
  /**
   * Specify order type to be sorted in EnhancedTableHead (ascending | descending)
   */
  order: Order;
  /**
   * Specify property to be sorted in EnhancedTableHead
   */
  orderBy: string;
  /**
   * Specify number of selected items from table in EnhancedTableHead
   */
  numSelected?: number;
  /**
   * Specify total row of table in EnhancedTableHead
   */
  rowCount?: number;
  /**
   * Specify function select all items from table in EnhancedTableHead
   */
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /**
   * Specify function sort from table in EnhancedTableHead
   */
  onRequestSort: (event: React.MouseEvent<unknown>, property: keyof T) => void;
}

const EnhancedTableHead = <T extends object>({
  headCells,
  order,
  orderBy,
  numSelected = 0,
  rowCount = 0,
  onSelectAllClick,
  onRequestSort
}: IProps<T>) => {
  const createSortHandler = (property: keyof T) => (event: React.MouseEvent<unknown>) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding='checkbox'>
          <Checkbox
            className='tw-checkbox'
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id.toString()}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : Order.asc}
              onClick={createSortHandler(headCell.id)}
              className='tw-text-foreground hover:tw-text-primary'
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component='span' className='tw-hidden'>
                  {order === Order.desc ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default EnhancedTableHead;
