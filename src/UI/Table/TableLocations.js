import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
  TableRow: {
    position: 'absolute',
    left: 950,
  }
});

export default function CustomizedTablesLocations({ l }, props) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableBody>
          <StyledTableCell component="th" scope="row">
            {l.name}
          </StyledTableCell>
          <StyledTableCell align="right" className={classes.TableRow}>{l.type}</StyledTableCell>
          <StyledTableCell align="right">{l.dimension}</StyledTableCell>
        </TableBody>
      </Table>
    </TableContainer>
  );
}