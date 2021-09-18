import React from 'react';
import { TableFooter, TableRow, TableCell } from '@material-ui/core';
import useStyles from '../../styles';

export default function ServerSideTableBodyFooter({
  columnOrder,
  columns,
  data,
  additionalCell,
}) {
  const classes = useStyles();

  const getFooterCell = (col, index) => {
    if (!col) return null;
    if (col.display !== 'true') return null;

    // Checked if add footer is enabled
    if (col.addFooter === false ) return <TableCell key={index} />;

    if (data[col.name] === undefined) return <TableCell key={index} />;

    const bgColor = {
      background: data[col.name].includes('-') ? '#f44336' : '#4caf50',
    };
    return (
      <TableCell align="right" key={index}>
        <b style={bgColor} className={classes.totalBadge}>
          {data[col.name] || 0}
        </b>
      </TableCell>
    );
  };

  return (
    <TableFooter>
      <TableRow>
        {additionalCell ? <TableCell key="action" /> : null}
        {columnOrder.map((order, index) => {
          const col = columns[order];

          return getFooterCell(col, order);
        })}
      </TableRow>
    </TableFooter>
  );
}
