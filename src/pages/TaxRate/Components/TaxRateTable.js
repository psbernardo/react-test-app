import React, { useState } from 'react';
import TaxRateModal from './TaxRateModal';
import { Button, Box, IconButton } from '@material-ui/core';
import { useConfirm } from 'material-ui-confirm';
import {
  notifySuccess,
  notifyError,
  notifyInfo,
} from 'components/Notification/Notification';
import {
  Add as AddIcon,
  Create as EditIcon,
  Delete as DeleteIcon,
} from '@material-ui/icons';

import {
  createTaxRate,
  listTaxRate,
  updateTaxRate,
  deleteTaxRate,
} from '../../../services/TaxRateService';
import SelectTaxCountry from '../../../components/AutoComplete/SelectTaxCountry';
import SearchButton from '../../../components/Button/Search';
import Table, { columnType } from 'components/Table/Table';
import QueryParam from '../../../services/QueryParamService';
import useStyles from '../../../styles';

export default function TaxRateTable() {
  const classes = useStyles();
  const confirm = useConfirm();
  const options = {
    isRowSelectable: (dataIndex) => isDeleteEnabled(dataIndex),
    onRowsDelete: (selectedItems) => {
      handleDelete(selectedItems.data);
      return false;
    },
  };
  const columns = [
    {
      name: '',
      type: columnType.buttons,
      options: {
        customBodyRenderLite: (dataIndex) => {
          return (
            <div
              align={'left'}
              className={classes.grdRow}
              style={{ margin: 0, padding: 0 }}
            >
              <div className={classes.grdCellNone}>
                <IconButton
                  aria-label="delete"
                  disabled={!isDeleteEnabled(dataIndex)}
                  onClick={() => {
                    handleDelete([
                      {
                        dataIndex: dataIndex,
                      },
                    ]);
                  }}
                >
                  <DeleteIcon />
                </IconButton>
              </div>
              <div align={'left'} className={classes.grdCellNone}>
                <IconButton
                  aria-label="edit"
                  onClick={() => handleOpen(rows[dataIndex])}
                >
                  <EditIcon />
                </IconButton>
              </div>
            </div>
          );
        },
      },
    },
    {
      name: 'countryCode',
      label: 'Country Code',
    },
    {
      name: 'country',
      label: 'Country',
    },
    {
      name: 'rate',
      label: 'Rate',
      type: columnType.percentage,
    },
    {
      name: 'a-selectAll',
      label: 'Select All',
      options: {
        display: true,
        setCellHeaderProps: () => ({
          style: {
            width: '0px',
            display: 'table-cell',
            padding: 0,
            pointerEvents: 'none',
            fontSize: 0,
          },
        }),
      },
    },
  ];

  const isDeleteEnabled = (dataIndex) => {
    return rows[dataIndex].status !== 'Disabled';
  };

  const [rowData, setRowData] = React.useState({});
  const [open, setOpen] = React.useState(false);
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = React.useState(false);
  const [showFilter, setShowFilter] = React.useState(true);
  const [searchData, setSearchData] = React.useState(
    QueryParam.get({
      country: '',
    })
  );

  const handleChange = (e, x) => {
    const input = e.currentTarget.name ? e.currentTarget : e.target;

    setSearchData({
      ...searchData,
      [input.name]: input.value,
    });
  };

  const handleSearch = async () => {
    try {
      setLoading(true);
      QueryParam.set(searchData);
      const data = await listTaxRate(searchData);
      setRows(data.taxRateList);
      notifyInfo(data.taxRateList.length + ' search results.');
    } catch (error) {
      console.error(error);
      notifyError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = (rowsToDelete) => {
    let messageKey = '';
    if (rowsToDelete.length === 1) {
      messageKey = rows[rowsToDelete[0].dataIndex].account;
    } else {
      messageKey = rowsToDelete.length + ' items';
    }
    let idsToDelete = [];
    confirm({
      description:
        "You are about to delete '" +
        messageKey +
        "'. Please confirm your action.",
      confirmationText: 'Yes, delete',
    }).then(async () => {
      const rowsCopy = [...rows];
      try {
        for (const r of rowsToDelete) {
          const index = r.dataIndex;
          await deleteTaxRate(rows[index].taxRateId);
          idsToDelete.push(rows[index].taxRateId);
        }
      } catch (error) {
        console.error(error);
        notifyError(error.message);
      } finally {
        const filtered = rowsCopy.filter(
          (r) => !idsToDelete.includes(r.taxRateId)
        );
        setRows(filtered);
        notifySuccess(messageKey + ' has been disabled');
      }
    });
  };

  const handleOpen = (data) => {
    if (!data) {
      //ADD default values
      data = {
        country: '',
        countryCode: '',
        rate: '.00',
      };
    }

    setRowData(data);
    setOpen(true);
  };

  const handleClose = async (data, isEdit) => {
    if (!data) {
      setOpen(false);
      return;
    }

    let valid = true;

    if (!data.countryCode) {
      notifyError('Country is required.');
      valid = false;
    }
    if (!data.rate) {
      notifyError('Rate is required.');
      valid = false;
    }
    if (!valid) {
      return;
    }
    try {
      if (isEdit) {
        //EDIT
        const resp = await updateTaxRate(data);
        const rowsCopy = [...rows];
        const index = rows.indexOf(rowData);
        rowsCopy[index] = resp.taxRate;
        setRows(rowsCopy);
        notifySuccess('Tax rate has been updated.');
      } else {
        //ADD
        const resp = await createTaxRate(data);
        setRows([resp.taxRate, ...rows]);
        notifySuccess('New tax rate has been added.');
      }
      setOpen(false);
    } catch (error) {
      console.error(error);
      notifyError(error.message);
    }
  };

  return (
    <div className={classes.root}>
      <Box component="div" mt={5}>
        {showFilter ? (
          <div>
            <div className={classes.grdRow}>
              <div className={classes.grdCellNone} style={{ width: 390 }}>
                <SelectTaxCountry
                  name="country"
                  label="Tax Country"
                  value={searchData.country}
                  onChange={(selected) => {
                    setSearchData({
                      ...searchData,
                      country: selected?.code,
                    });
                  }}
                ></SelectTaxCountry>
              </div>
            </div>
          </div>
        ) : null}
        <div className={classes.actionContainer}>
          <div className={classes.grdCellNone} style={{ marginRight: 10 }}>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              startIcon={<AddIcon />}
              onClick={() => {
                handleOpen();
              }}
            >
              Add New
            </Button>
          </div>
          <div className={classes.grdCellNone}>
            <SearchButton
              onClick={handleSearch}
              loading={loading}
              showfilter={(status) => setShowFilter(status)}
            />
          </div>
        </div>
      </Box>
      <Box component="div" mt={2}>
        <Table
          title="TAX RATE"
          data={rows}
          columns={columns}
          options={options}
        />
      </Box>
      {open && (
        <TaxRateModal
          onClose={handleClose}
          open={open}
          value={rowData}
        ></TaxRateModal>
      )}
    </div>
  );
}
