import React from 'react';
import { TableFooter, TableRow, TableCell } from '@material-ui/core';
import { formatCurrency } from 'lib/fmt';
import useStyles from '../../styles';

export default function CustomTableBodyFooter({
  columnOrder,
  columns,
  columnsWithAmt,
  columnsWithQty,
  rows,
}) {
  const classes = useStyles();

  const getFooterSum = (col, index) => {
    if (col.display !== 'true') return null;

    let type = '';

    if (columnsWithAmt.includes(col.name)) type = 'amt';
    else if (columnsWithQty.includes(col.name)) type = 'qty';

    if (type === '') return <TableCell key={index} />;

    const total = rows.reduce((runningTotal, row) => {
      return runningTotal + parseFloat(row[col.name] || 0);
    }, 0);

    const bgColor = { background: total < 0 ? '#f44336' : '#4caf50' };

    return (
      <TableCell align="right" key={index}>
        <b style={bgColor} className={classes.totalBadge}>
          {type === 'amt' ? formatCurrency(total) : total}
        </b>
      </TableCell>
    );
  };

  return (
    <TableFooter>
      <TableRow>
        {columnOrder.map((order, index) => {
          const col = columns[order];

          return getFooterSum(col, order);
        })}
      </TableRow>
    </TableFooter>
  );
}
