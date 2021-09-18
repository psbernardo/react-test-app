import React, { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
  Box,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from '@material-ui/core';
import useStyles from '../../../styles';

export default function FieldDefinitionTableView({ data }) {
  const classes = useStyles();
  const [rows, setRows] = useState([]);

  useEffect(() => {
    setRows(data);
  }, []);

  const StyledTableCell = withStyles((theme) => ({
    root: {
      padding: '5px 16px',
    },
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
      fontSize: 14,
      fontWeight: 700,
      padding: '10px 16px',
      whiteSpace: 'nowrap',
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
      height: 0,
    },
  }))(TableRow);

  const StyledTableRowHead = withStyles(() => ({
    root: {
      height: 0,
    },
  }))(TableRow);

  const StyledTable = withStyles(() => ({
    root: {
      borderCollapse: 'inherit',
      border: '1px solid rgba(224, 224, 224, .5)',
    },
  }))(Table);

  const columns = [
    {
      name: 'field',
      label: 'Field Name',
    },
    {
      name: 'dataType',
      label: 'Data Type',
    },
    {
      name: 'sampleValue',
      label: 'Sample Value',
    },
    {
      name: 'description',
      label: 'Description',
    },
  ];

  return (
    <div className={classes.root}>
      <Box component="div" mt={2}>
        <StyledTable>
          <TableHead>
            <StyledTableRowHead>
              {columns.map((col) => (
                <StyledTableCell key={col.name}>{col.label}</StyledTableCell>
              ))}
            </StyledTableRowHead>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell>{row.field}</StyledTableCell>
                <StyledTableCell>{row.dataType}</StyledTableCell>
                <StyledTableCell>{row.sampleValue}</StyledTableCell>
                <StyledTableCell>
                  <div dangerouslySetInnerHTML={{ __html: row.description }} />
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </StyledTable>
      </Box>
    </div>
  );
}
