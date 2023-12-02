import Checkbox from '@mui/material/Checkbox';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useMemo, useState } from 'react';
import EnhancedTableHead from '~/shared/components/ui/EnhancedTable/EnhancedTableHead';
import { getComparator, stableSort } from '~/shared/utils/helpers/tableSort';
import { HeadCell, Order } from '~/shared/utils/models/tableSort';

interface IProps<T> {
  /**
   * Specify header list of table to be rendered in EnhancedTableHead
   */
  headCells: readonly HeadCell<T>[];
  /**
   * Specify data in EnhancedTable
   */
  tableData: readonly T[];
  /**
   * Specify array of item that is being selected in EnhancedTable
   */
  itemsSelected: readonly string[];
  /**
   * Specify function sort from table in EnhancedTableHead
   */
  onSetItemSelected: (newSelected: readonly string[]) => void;
}

const EnhancedTable = <T extends { id: string }>({
  headCells,
  tableData,
  itemsSelected,
  onSetItemSelected
}: IProps<T>) => {
  const [order, setOrder] = useState<Order>(Order.asc);
  const [orderBy, setOrderBy] = useState<keyof T>('id' as keyof T);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const visibleRows = useMemo(
    () =>
      stableSort(tableData, getComparator(order, orderBy)).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [order, orderBy, page, rowsPerPage, tableData]
  );

  const handleSelectRow = (id: string) => {
    const selectedIndex = itemsSelected.indexOf(id);
    let newSelected: readonly string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(itemsSelected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(itemsSelected.slice(1));
    } else if (selectedIndex === itemsSelected.length - 1) {
      newSelected = newSelected.concat(itemsSelected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(itemsSelected.slice(0, selectedIndex), itemsSelected.slice(selectedIndex + 1));
    }
    onSetItemSelected(newSelected);
  };

  const handleRequestSort = (event: React.MouseEvent<unknown>, property: keyof T) => {
    const isAsc = orderBy === property && order === Order.asc;
    setOrder(isAsc ? Order.desc : Order.asc);
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = tableData.map((n) => n.id);
      onSetItemSelected(newSelected);
      return;
    }
    onSetItemSelected([] as string[]);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (name: string) => itemsSelected.indexOf(name) !== -1;

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - tableData.length) : 0;

  return (
    <>
      <TableContainer className='tw-max-h-[500px]'>
        <Table stickyHeader aria-labelledby='Users' size='medium' className='tw-min-w-[500px] tw-bg-background'>
          <EnhancedTableHead
            headCells={headCells}
            numSelected={itemsSelected.length}
            order={order}
            orderBy={orderBy.toString()}
            rowCount={tableData.length}
            onSelectAllClick={handleSelectAllClick}
            onRequestSort={handleRequestSort}
          />
          <TableBody>
            {visibleRows.map((row) => {
              const isItemSelected = isSelected(row.id);

              return (
                <TableRow
                  hover
                  onClick={() => handleSelectRow(row.id)}
                  role='checkbox'
                  aria-checked={isItemSelected}
                  tabIndex={-1}
                  key={row.id}
                  selected={isItemSelected}
                  className='tw-cursor-pointer tw-h-14'
                >
                  <TableCell padding='checkbox'>
                    <Checkbox className='tw-checkbox' checked={isItemSelected} />
                  </TableCell>
                  {headCells.map((col) => {
                    const property = col.id.toString();
                    const value = row[property as keyof typeof row] as string;
                    return (
                      <TableCell
                        key={property + row.id}
                        component='th'
                        scope='row'
                        align={col.numeric ? 'right' : 'left'}
                        padding={col.disablePadding ? 'none' : 'normal'}
                        className='tw-text-foreground'
                      >
                        {value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
            {emptyRows > 0 && (
              <TableRow
                style={{
                  height: 56 * emptyRows
                }}
              >
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 20, 30]}
        component='div'
        count={tableData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        className='tw-text-foreground'
      />
    </>
  );
};

export default EnhancedTable;
