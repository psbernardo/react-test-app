import React, { useState, useEffect } from 'react';
import { CSVLink } from 'react-csv';
import {
  listRoles,
  addRole,
  listUserRole,
  saveRoles,
  deleteRole,
} from '../../../services/RoleService';
import {
  notifyError,
  notifySuccess,
} from 'components/Notification/Notification';
import {
  TableCell,
  TableRow,
  Button,
  Box,
  Checkbox,
  MenuItem,
  InputLabel,
  Select,
  CircularProgress,
  TextField,
  Backdrop,
  Typography,
  Modal,
  Fade,
} from '@material-ui/core';
import {
  CheckCircle as SaveIcon,
  Add as AddIcon,
  Delete as DeleteIcon,
} from '@material-ui/icons';
import { useConfirm } from 'material-ui-confirm';
import Table from 'components/Table/Table';
import moment from 'moment-timezone';
import { formatPbDate } from 'lib/fmt';
import useStyles from '../../../styles';

function keyRandomizer() {
  return Math.random()
    .toString(36)
    .substring(7);
}

export function RoleTable({ params }) {
  const classes = useStyles();
  const confirm = useConfirm();

  const [page, setPageState] = useState({
    currentPage: 0,
    displayedRows: 100,
    totalRows: 0,
    searchSrc: '',
    sortOrder: {},
    filter: [],
  });

  useEffect(() => {
    if (page.data) {
      /*sorting*/
      let sortField = page.sortOrder.name;
      let sortDir = page.sortOrder.direction;

      let fullData = page.data.sort((a, b) => {
        let val1 = a[sortField];
        let val2 = b[sortField];

        if (typeof val1 === 'object') {
          if (val1.seconds) {
            val1 = a[sortField]
              ? moment(new Date(a[sortField].seconds * 1000)).format(
                  'MM/DD/YYYY hh:mm'
                )
              : '--';
            val2 = b[sortField]
              ? moment(new Date(b[sortField].seconds * 1000)).format(
                  'MM/DD/YYYY hh:mm'
                )
              : '--';
          } else {
            val1 = formatPbDate(a[sortField]);
            val2 = formatPbDate(b[sortField]);
          }
        }
        if (val1 < val2) {
          return 1 * (sortDir === 'asc' ? -1 : 1);
        } else if (val1 > val2) {
          return -1 * (sortDir === 'asc' ? -1 : 1);
        } else {
          return 0;
        }
      });

      /*filter*/
      if (page.filter.length > 0) {
        let columnFilter = page.filter;
        let filterParams = {
          access:
            columnFilter[0].value !== undefined ? [columnFilter[0].value] : [],
          name:
            columnFilter[1].value !== undefined ? [columnFilter[1].value] : [],
          role:
            columnFilter[2].value !== undefined ? [columnFilter[2].value] : [],
          service:
            columnFilter[3].value !== undefined ? [columnFilter[3].value] : [],
        };

        const buildFilter = (filter) => {
          let query = {};
          for (let keys in filter) {
            if (filter[keys].constructor === Array && filter[keys].length > 0) {
              query[keys] = filter[keys];
            }
          }
          return query;
        };

        const filterData = (data, query) => {
          const filteredData = data.filter((item) => {
            for (let key in query) {
              if (key.includes('Date')) {
                item[key] =
                  typeof item[key] === 'object'
                    ? formatPbDate(item[key])
                    : item[key];
              }
              if (item[key] === undefined || !query[key].includes(item[key])) {
                return false;
              }
            }
            return true;
          });
          return filteredData;
        };

        const query = buildFilter(filterParams);
        fullData = filterData(page.data, query);
      }

      var pageData = fullData.slice(
        page.currentPage * page.displayedRows,
        (page.currentPage + 1) * page.displayedRows
      );

      setRows(
        pageData.map((data) => ({
          role: roleValue,
          service: data.service,
          read: data.read,
          write: data.write,
          download: data.download,
          hasDownload: data.hasdownload,
        }))
      );

      setDownloadableRows(
        fullData.map((data) => ({
          role: roleValue,
          service: data.service,
          read: data.read,
          write: data.write,
          download: data.download,
          hasDownload: data.hasdownload,
        }))
      );

      setLoading(false);
    } // eslint-disable-next-line
  }, [page]);

  const search = async (
    type,
    cPage,
    rowsPerPage,
    field,
    sortDirection,
    filterValue
  ) => {
    if (type === 'search') {
      const pathWithParams =
        currentPath + '?search=true' + (roleValue ? '&role=' + roleValue : '');
      window.history.pushState({}, null, pathWithParams);

      try {
        const { rolesList } = await listUserRole(roleValue);
        setPageState({
          ...page,
          totalRows: rolesList.length,
          searchSrc: type,
          currentPage: cPage,
          displayedRows: rowsPerPage,
          data: rolesList,
          sortOrder: { name: field, direction: sortDirection },
        });
      } catch (error) {
        notifyError(error.message);
      }
    } else {
      setPageState({
        ...page,
        searchSrc: type,
        currentPage: cPage,
        displayedRows: rowsPerPage,
        sortOrder: { name: field, direction: sortDirection },
        filter: filterValue,
      });
    }
  };

  const columns = [
    {
      id: '1',
      name: 'role',
      label: 'Role',
      visibleState: useState(false),
      align: 'left',
      order: 0,
    },
    {
      id: '2',
      name: 'service',
      label: 'Service',
      visibleState: useState(true),
      align: 'left',
      order: 1,
    },
    {
      id: '3',
      name: 'read',
      label: 'Read',
      visibleState: useState(true),
      align: 'left',
      order: 2,
    },
    {
      id: '4',
      name: 'write',
      label: 'Write',
      visibleState: useState(true),
      align: 'left',
      order: 3,
    },
    {
      id: '5',
      name: 'download',
      label: 'PDF Download',
      visibleState: useState(true),
      align: 'left',
      order: 4,
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

  const sortedColumns = columns.slice(0);
  sortedColumns.sort(function(a, b) {
    return a.order - b.order;
  });

  const setVisibles = {};
  columns.forEach((col) => {
    if (col.name === '') {
      col.options = {
        display: true,
        viewColumns: false,
        empty: true,
      };
      return;
    }

    if (col.options === undefined) {
      col.options = {
        display: col.visibleState[0],
      };
    }

    setVisibles[col.name] = col.visibleState[1];
    return;
  });

  const customTableRow = (data, dataIndex, rowIndex) => {
    if (!rows[rowIndex]) {
      return;
    }

    return (
      <TableRow hover role="checkbox" tabIndex={-1} key={keyRandomizer()}>
        <TableCell padding="checkbox"></TableCell>
        {sortedColumns
          .filter((v) => (v.options.empty ? false : v.options.display))
          .map((col) => (
            <TableCell align={col.align || 'left'} key={col.name}>
              {col.name === 'download' ? (
                rows[rowIndex]['hasDownload'] ? (
                  <Checkbox
                    disabled={!rows[rowIndex]['hasDownload']}
                    checked={rows[rowIndex][col.name]}
                    onClick={() => {
                      let rowsCopy = [...rows];
                      rowsCopy[rowIndex][col.name] = !rows[rowIndex][col.name];
                      setRows(rowsCopy);
                      setSaved(false);
                    }}
                  />
                ) : (
                  rows[rowIndex][col.name]
                )
              ) : typeof rows[rowIndex][col.name] === 'boolean' ? (
                <Checkbox
                  checked={rows[rowIndex][col.name]}
                  onClick={() => {
                    let rowsCopy = [...rows];
                    rowsCopy[rowIndex][col.name] = !rows[rowIndex][col.name];
                    setRows(rowsCopy);
                    setSaved(false);
                  }}
                />
              ) : (
                rows[rowIndex][col.name]
              )}
            </TableCell>
          ))}
      </TableRow>
    );
  };

  const showHideColumns = (column, action) => {
    setVisibles[column](action === 'remove' ? false : true);
  };

  const fileName =
    'Role_' + moment().format('MMMM Do YYYY, h:mm:ss a') + '.csv';

  const options = {
    filterType: 'select',
    customRowRender: customTableRow,
    onColumnViewChange: showHideColumns,
    download: true,
    filter: false,
    search: false,
    print: false,
    sort: true,
    viewColumns: false,
    columnOrder: [0, 1, 2, 3, 4],
    selectableRowsHeader: false,
    count: page.totalRows,
    serverSide: true,
    rowsPerPage: page.displayedRows,
    onDownload: () => {
      document.getElementById('csvDL').click();
      return false;
    },
    onTableChange: (action, tableState) => {
      switch (action) {
        case 'filterChange': {
          let filterValues = [];

          for (let i = 0; i < tableState.filterList.length; i++) {
            if (tableState.filterList[i].length > 0) {
              filterValues.push({
                columnIndex: i,
                value: tableState.filterList[i][0],
              });
            } else {
              filterValues.push({
                columnIndex: i,
                value: tableState.filterList[i][0],
              });
            }
          }
          search(
            'filterChange',
            tableState.page,
            tableState.rowsPerPage,
            '',
            tableState.sortOrder.direction,
            filterValues
          );
          break;
        }
        case 'resetFilters': {
          search('search', 0, page.displayedRows);
          break;
        }
        case 'changePage': {
          search(
            'pageChange',
            tableState.page,
            tableState.rowsPerPage,
            '',
            '',
            page.filter
          );
          break;
        }
        case 'sort': {
          search(
            'sortChange',
            tableState.page,
            tableState.rowsPerPage,
            tableState.columns[tableState.activeColumn].name,
            tableState.sortOrder.direction,
            page.filter
          );
          break;
        }
        case 'changeRowsPerPage': {
          search(
            'pageChange',
            tableState.page,
            tableState.rowsPerPage,
            '',
            '',
            page.filter
          );
          break;
        }
        case 'propsUpdate': {
          return { ...tableState, count: page.totalRows };
        }
        default: {
          break;
        }
      }
    },
  };

  /*=========================================================================================
  End of table modifications
  ===========================================================================================*/
  const [rows, setRows] = useState([]);
  const [roles, setRoles] = useState([]);
  const [downloadableRows, setDownloadableRows] = useState([]);
  const [loading, setLoading] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    loadRoles();
    // eslint-disable-next-line
  }, []);

  const handleSaveRoles = async () => {
    if (rows) {
      try {
        await saveRoles(roleValue, rows);

        setSaved(true);
        notifySuccess('Role has been updated');
      } catch (error) {
        notifyError(error.message);
      }
    }
  };

  const loadRoles = async () => {
    try {
      const data = await listRoles();
      setRoles(data.rolesList);
    } catch (error) {
      notifyError(error.message);
    }
  };

  //add new role function
  async function handleAddRole() {
    if (!modalRoleValue) {
      notifyError('Role is required.');
      return;
    }

    try {
      await addRole(modalRoleValue);
      notifySuccess('New Role has been created');
    } catch (error) {
      notifyError(error.message);
    }
    loadRoles();
    handleClose();
  }

  const handleSearch = (page) => {
    search('search', 0, page.displayedRows);
  };

  const [currentPath, setCurrentPath] = React.useState('');

  useEffect(() => {
    if (roles) {
      const query = new URLSearchParams(params.location.search);
      const path = params.truepath;
      const data = {
        role: query.get('role'),
      };

      setRoleValue(data.role);

      setCurrentPath(path);
    } // eslint-disable-next-line
  }, [params]);

  const [roleValue, setRoleValue] = React.useState('');
  const [modalRoleValue, setModalRoleValue] = React.useState('');

  const [open, setOpen] = React.useState(false);
  const [modalTitleValue, setModalTitleValue] = React.useState('Add New');

  useEffect(() => {
    if (roles) {
      roles.forEach((r) => {
        if (roleValue === r.role) {
          handleSearch(page);
        }
      });
    } // eslint-disable-next-line
  }, [roleValue, roles]);

  const handleOpen = (rowData) => {
    setModalRoleValue('');

    setModalTitleValue('Add New');
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleRemoveRole = async () => {
    confirm({
      description:
        "You are about to delete role '" +
        roleValue +
        "' in your system. Please confirm your action.",
      confirmationText: 'Yes, Delete',
    })
      .then(async () => {
        try {
          const data = await deleteRole(roleValue);
          console.log(data);
          notifySuccess("'" + roleValue + "' has been deleted successfully!");
          loadRoles();
          setRoleValue('');
          setRows([]);
        } catch (error) {
          notifyError(error.messsage);
        }
      })
      .catch(() => {});
  };

  /*=========================================================================================
  Table component
  ===========================================================================================*/
  return (
    <div className={classes.root}>
      <Box component="div" mt={5}>
        <div>
          <div className={classes.grdRow}>
            <div className={classes.grdCell1} style={{ marginRight: 30 }}>
              <InputLabel shrink>Role</InputLabel>
              <Select
                displayEmpty
                fullWidth
                value={roleValue}
                onChange={(e) => {
                  setLoading(true);
                  setRoleValue(e.target.value);
                }}
              >
                {roles.map(function(item) {
                  return (
                    <MenuItem key={keyRandomizer()} value={item.role || ''}>
                      {item.role}
                    </MenuItem>
                  );
                })}
              </Select>
            </div>
            <div className={classes.grdCellNone} style={{ marginRight: 10 }}>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                startIcon={<DeleteIcon />}
                onClick={handleRemoveRole}
              >
                Delete
              </Button>
            </div>
            <div className={classes.grdCell1}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                startIcon={<AddIcon />}
                onClick={handleOpen}
              >
                Add New Role
              </Button>
            </div>
          </div>
        </div>
      </Box>
      <Box component="div" mt={2}>
        {downloadableRows && (
          <CSVLink
            id="csvDL"
            data={downloadableRows}
            filename={fileName}
            target="_blank"
          />
        )}
        {loading ? (
          <CircularProgress disableShrink />
        ) : (
          <Table
            title={'Roles'}
            data={rows}
            columns={columns}
            options={options}
          />
        )}
      </Box>
      <Box>
        <div className={classes.actionContainer}>
          <div className={classes.grdCellNone} style={{ float: 'right' }}>
            <Button
              disabled={saved}
              variant="contained"
              color="primary"
              size="large"
              startIcon={<SaveIcon />}
              onClick={handleSaveRoles}
            >
              {saved ? 'Changes has been saved!' : 'Save Changes'}
            </Button>
          </div>
        </div>
      </Box>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modalBackdrop}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500 }}
      >
        <Fade in={open}>
          <div className={classes.fadeModalMd}>
            <Typography
              id="transition-modal-title"
              variant="h4"
              className={classes.textBold}
              gutterBottom
            >
              {modalTitleValue} Role
            </Typography>
            <Box mt={5}>
              <form noValidate autoComplete="off">
                <div className={classes.grdRow}>
                  <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                    <TextField
                      required
                      label="Role"
                      fullWidth
                      InputLabelProps={{ shrink: true }}
                      value={modalRoleValue}
                      onChange={(e) => setModalRoleValue(e.target.value)}
                    />
                  </div>
                </div>
                <div className={classes.modalFooter}>
                  <div
                    className={classes.grdCellNone}
                    style={{ marginRight: 10 }}
                  >
                    <Button
                      variant="contained"
                      color="secondary"
                      size="large"
                      onClick={handleClose}
                    >
                      Close
                    </Button>
                  </div>
                  <div className={classes.grdCellNone}>
                    <Button
                      variant="contained"
                      color="primary"
                      size="large"
                      onClick={handleAddRole}
                    >
                      Save
                    </Button>
                  </div>
                </div>
              </form>
            </Box>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
