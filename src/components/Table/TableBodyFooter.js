import React from 'react';
import { TableFooter, TableRow, TableCell } from '@material-ui/core';
import { formatCurrency, formatPercentage, formatQty } from 'lib/fmt';
import useStyles from '../../styles';

const quantity = 'quantity';
const amount = 'amount';
const percentage = 'percentage';

export default function TableBodyFooter({
  columnOrder,
  columns,
  columnsWithAmt,
  columnsWithQty,
  columnsWithPercentage,
  rows,
  selectableRows,
}) {
  const classes = useStyles();

  const getType = (colName) => {
    if (columnsWithAmt && columnsWithAmt.includes(colName)) return amount;
    else if (columnsWithQty && columnsWithQty.includes(colName))
      return quantity;
    else if (columnsWithPercentage && columnsWithPercentage.includes(colName))
      return percentage;
  };

  const getColumnSum = (col, type) => {
    const total = rows.reduce((runningTotal, row) => {
      return runningTotal + parseFloat(row[col.name] || 0);
    }, 0);

    const bgColor = { background: total < 0 ? '#f44336' : '#4caf50' };
    let displayValue = total;
    switch (type) {
      case amount:
        displayValue = formatCurrency(total);
        break;
      case quantity:
        displayValue = formatQty(total);
        break;
      case percentage:
        displayValue = formatPercentage(total);
        break;
      default:
        break;
    }

    return (
      <b style={bgColor} className={classes.totalBadge}>
        {displayValue}
      </b>
    );
  };

  return (
    <TableFooter>
      <TableRow>
        {selectableRows === 'multiple' ||
        selectableRows === true ||
        selectableRows === undefined ? (
          <TableCell key="select-column" />
        ) : null}
        {columnOrder.map((order, index) => {
          const col = columns[order];

          if (!col.name) return <TableCell key={order} />;

          if (col.display !== 'true') return null;

          const type = getType(col.name);
          if (!type) return <TableCell key={order} />;

          return (
            <TableCell align="right" key={order}>
              {getColumnSum(col, type)}
            </TableCell>
          );
        })}
      </TableRow>
    </TableFooter>
  );
}
