import React, { useState, useEffect } from 'react';
import {
  notifySuccess,
  notifyInfo,
  notifyError,
} from 'components/Notification/Notification';
import { IconButton, Button, Box, TextField, Tooltip } from '@material-ui/core';
import Table, { columnType } from 'components/Table/Table';
import { useConfirm } from 'material-ui-confirm';
import {
  Delete as DeleteIcon,
  Add as AddIcon,
  Create as EditIcon,
  Visibility as ViewIcon,
} from '@material-ui/icons';
import QueryParam from '../../../services/QueryParamService';
import {
  // updateFaqs,
  listNonMroFile,
  readNonMroFile,
} from '../../../services/NonMroService';
import useStyles from '../../../styles';
import SearchButton from '../../../components/Button/Search';
import SelectPage from '../../../components/AutoComplete/SelectNonMro';
import NonMroModal from './NonMroModal';
import { getSystemDate } from '../../../services/ProfileService';
import SelectNonMro from '../../../components/AutoComplete/SelectNonMro';

export default function NonMroTable() {
  const classes = useStyles();
  useEffect(
    () => {
      async function init() {
        if (searchData.systemDate) return;

        const systemDate = await getSystemDate();
        // setSysDate(systemDate);
        setSearchData({ ...searchData, systemDate: systemDate });
      }

      init();
    },
    // eslint-disable-next-line
    []
  );

  const confirm = useConfirm();
  const [sysDate, setSysDate] = React.useState(null);
  const options = {
    // onRowsDelete: (selectedItems) => {
    //   handleDelete(selectedItems.data);
    //   return false;
    // },
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
              style={{ margin: 0, padding: 0, maxWidth: 100 }}
            >
              <div className={classes.grdCellNone}>
                <Tooltip title="View" arrow>
                  <div>
                    <IconButton
                      aria-label="view"
                      onClick={() => {
                        handleView(rows[dataIndex]);
                      }}
                    >
                      <ViewIcon />
                    </IconButton>
                  </div>
                </Tooltip>
              </div>
            </div>
          );
        },
      },
    },
    {
      name: 'fileName',
      label: 'File',
    },
    {
      name: 'fileDownload',
      label: 'File Name',
    },
    {
      name: 'a-selectAll',
      label: 'Select All',
      options: {
        display: true,
        print: false,
        download: false,
        filter: false,
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

  const [rowData, setRowData] = React.useState({});
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [saving, setSaving] = React.useState(false);
  const [showFilter, setShowFilter] = React.useState(true);
  const [rows, setRows] = useState([]);
  const [searchData, setSearchData] = React.useState(
    QueryParam.get({
      systemDate: '',
      fileName: '',
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
      const data = await readNonMroFile(searchData);
      setRows(data.filesList);

      notifyInfo(data.filesList.length + ' search results.');
    } catch (error) {
      console.error(error);
      notifyError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleClose = async (data, isEdit, answer) => {
    if (!data) {
      setOpen(false);
      return;
    }

    let valid = true;

    // if (!data.pageId) {
    //   notifyError('Page name is required.');
    //   valid = false;
    // }
    if (!data.question) {
      notifyError('Question is required.');
      valid = false;
    }

    if (!answer) {
      notifyError('Answer is required.');
      valid = false;
    }

    if (!valid) {
      return;
    }

    if (answer) {
      data.answer = answer;
    }

    setSaving(true);

    // if (data.faqId > 0) {
    //   //EDIT
    //   updateFaqs(data)
    //     .then((resp) => {
    //       const rowsCopy = [...rows];
    //       const index = rows.indexOf(rowData);
    //       rowsCopy[index] = resp.faqs;
    //       setRows(rowsCopy);
    //       notifySuccess('Question and Answer has been updated.');
    //       setSaving(false);
    //       setOpen(false);
    //     })
    //     .catch((error) => {
    //       setSaving(false);
    //       notifyError(error.message);
    //     });
    // } else {
    //   //ADD
    //   createFaqs(data)
    //     .then((resp) => {
    //       setRows([resp.faqs, ...rows]);
    //       notifySuccess('New Q&A has been added.');
    //       setSaving(false);
    //       setOpen(false);
    //     })
    //     .catch((error) => {
    //       setSaving(false);
    //       notifyError(error.message);
    //     });
    // }

    // try {
    //   const resp = await updateFaqs(data);
    //   const rowsCopy = [...rows];
    //   const index = rows.indexOf(rowData);
    //   rowsCopy[index] = resp.faqs;

    //   if (isEdit && data.action !== 'Add') {
    //     setRows(rowsCopy);
    //     notifySuccess('Question and Answer has been updated.');
    //   } else {
    //     setRows([resp.faqs, ...rows]);
    //     notifySuccess('Question and Answer has been added.');
    //   }

    //   setSaving(false);
    //   setOpen(false);
    // } catch (error) {
    //   console.error(error);
    //   setSaving(false);
    //   notifyError(error.message);
    // }
  };

  const handleView = (data) => {
    let messageKey = '';

    setRowData(data);
    setOpen(true);
  };

  return (
    <div className={classes.root}>
      <Box component="div" mt={5}>
        {showFilter ? (
          <div>
            <div className={classes.grdRow}>
              <div className={classes.grdCellNone} style={{ marginRight: 30 }}>
                <TextField
                  fullWidth
                  name="systemDate"
                  label="System Date"
                  type="date"
                  required
                  value={searchData.systemDate}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                />
              </div>
              <div className={classes.grdCellNone} style={{ marginRight: 30 }}>
                <SelectNonMro
                  style={{ width: 288 }}
                  name="fileName"
                  label="File"
                  freeSolo
                  value={searchData.fileName}
                  onChange={handleChange}
                ></SelectNonMro>
              </div>
            </div>
          </div>
        ) : null}
        <div className={classes.actionContainer}>
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
        <Table title={'File'} data={rows} columns={columns} options={options} />
      </Box>
      {open && (
        <NonMroModal
          onClose={handleClose}
          open={open}
          value={rowData}
        ></NonMroModal>
      )}
    </div>
  );
}
