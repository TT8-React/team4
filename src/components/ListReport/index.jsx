import React from 'react'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material';

const BorderedTD = styled(TableCell)`
  &.MuiTableCell-root {
    border: 1px solid #D0D0D0;
    font-weight: 500;
    font-size: 14px;
    padding : 12px 16px;
  }
  &.MuiTableCell-root:first-child{
    width : 70px;
  }
`;

function createData(id, name) {
  return { id, name };
}

const rows = [
  createData(1,'Frozen yoghurt'),
  createData(2,'Ice cream sandwich'),
  createData(3,'Eclair'),
  createData(4,'Cupcake'),
  createData(5,'Gingerbread'),
];

const ListReport = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 450 }} size="small">
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <BorderedTD>{row.id}</BorderedTD>
              <BorderedTD>{row.name}</BorderedTD>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default ListReport