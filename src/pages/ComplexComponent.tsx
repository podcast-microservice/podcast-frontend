import * as React from 'react';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import EnhancedTableHead from '~/shared/components/ui/Table/EnhancedTableHead';
import EnhancedTableToolbar from '~/shared/components/ui/Table/EnhancedTableToolbar';
import { getComparator, stableSort } from '~/shared/utils/helpers/tableSort';
import { Data, mockHeadCells, tableData } from '~/shared/utils/mockData/table';
import { Order } from '~/shared/utils/models/tableSort';

export default function ComplexComponent() {
  const [order, setOrder] = React.useState<Order>(Order.asc);
  const [orderBy, setOrderBy] = React.useState<keyof Data>('name');
  const [selected, setSelected] = React.useState<readonly string[]>([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleRequestSort = (event: React.MouseEvent<unknown>, property: keyof Data) => {
    const isAsc = orderBy === property && order === Order.asc;
    setOrder(isAsc ? Order.desc : Order.asc);
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = tableData.map((n) => n.name);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event: React.MouseEvent<unknown>, name: string) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected: readonly string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (name: string) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - tableData.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      stableSort(tableData, getComparator(order, orderBy)).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [order, orderBy, page, rowsPerPage]
  );

  return (
    <Box className='tw-py-6'>
      <Paper className='tw-bg-background tw-shadow tw-shadow-border tw-border-border/50 tw-border-solid tw-border tw-scrollbar'>
        <EnhancedTableToolbar tableName='Users' numSelected={selected.length} />
        <TableContainer className='tw-max-h-[500px]'>
          <Table stickyHeader aria-labelledby='Users' size='medium' className='tw-min-w-[500px] tw-bg-background'>
            <EnhancedTableHead
              headCells={mockHeadCells}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              rowCount={tableData.length}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              selected
            />
            <TableBody>
              {visibleRows.map((row) => {
                const isItemSelected = isSelected(row.name);

                return (
                  <TableRow
                    hover
                    onClick={(event) => handleClick(event, row.name)}
                    role='checkbox'
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.name}
                    selected={isItemSelected}
                    className='tw-cursor-pointer'
                  >
                    <TableCell padding='checkbox'>
                      <Checkbox className='tw-checkbox' checked={isItemSelected} />
                    </TableCell>
                    <TableCell component='th' scope='row' padding='none' className='tw-text-foreground'>
                      {row.name}
                    </TableCell>
                    <TableCell align='right' className='tw-text-foreground'>
                      {row.calories}
                    </TableCell>
                    <TableCell align='right' className='tw-text-foreground'>
                      {row.fat}
                    </TableCell>
                    <TableCell align='right' className='tw-text-foreground'>
                      {row.carbs}
                    </TableCell>
                    <TableCell align='right' className='tw-text-foreground'>
                      {row.protein}
                    </TableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: 53 * emptyRows
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
      </Paper>
    </Box>
  );
}
