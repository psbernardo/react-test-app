import React from 'react';
import OwnerModal from './OwnerModal';
import { Button, Box, IconButton } from '@material-ui/core';
import { useConfirm } from 'material-ui-confirm';
import Table, { columnType } from 'components/Table/Table';
import {
  notifySuccess,
  notifyError,
} from 'components/Notification/Notification';
import {
  Add as AddIcon,
  Create as EditIcon,
  Delete as DeleteIcon,
  CheckCircle as CheckCircleIcon,
} from '@material-ui/icons';

import {
  updateOwner,
  deleteOwner,
  readOwner,
} from '../../../services/OwnerService';

import useStyles from '../../../styles';

export default function OwnerTable({
  accountId,
  list: rows,
  set: setRows,
  importMode: isImport,
}) {
  const classes = useStyles();
  const confirm = useConfirm();

  const [rowData, setRowData] = React.useState({});
  const [validation, setValidation] = React.useState({});
  const [open, setOpen] = React.useState(false);

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
              style={{
                margin: 0,
                padding: 0,
              }}
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
      name: 'ownerType',
      label: 'Owner Type',
    },
    {
      name: 'firstName',
      label: 'First Name',
    },
    {
      name: 'middleName',
      label: 'Middle Name',
    },
    {
      name: 'lastName',
      label: 'Last Name',
    },
    {
      name: 'country',
      label: 'Country',
    },
    {
      name: 'citizenship',
      label: 'Citizenship',
    },
    {
      name: 'dateOfBirth',
      label: 'Date Of Birth',
      type: columnType.date,
    },
    {
      name: 'employmentStatus',
      label: 'Employment Status',
    },
    {
      name: 'employmentName',
      label: 'Employment Name',
    },
    {
      name: 'employmentOccupation',
      label: 'Employment Occupation',
    },
    {
      name: 'ownership',
      label: 'Ownership',
      options: {
        display: false,
        customBodyRenderLite: (dataIndex) => {
          return rows[dataIndex].ownership ? <CheckCircleIcon /> : null;
        },
      },
    },
    {
      name: 'stockOwnership',
      label: 'Stock Symbol',
    },
    {
      name: 'brokerMember',
      label: 'Broker Member',
      options: {
        display: false,
        customBodyRenderLite: (dataIndex) => {
          return rows[dataIndex].brokerMember ? <CheckCircleIcon /> : null;
        },
      },
    },
    {
      name: 'brokerName',
      label: 'Broker Name',
    },
    {
      name: 'affiliatePerson',
      label: 'Affiliated Person',
    },
    {
      name: 'affiliatePersonPosition',
      label: 'Affiliated Person Position',
    },
    {
      name: 'status',
      label: 'Status',
    },
    {
      name: 'ofacStatus',
      label: 'OFAC Status',
    },
    {
      name: 'ofacDate',
      label: 'OFAC Date',
      type: columnType.date,
    },
    {
      name: 'kycStatus',
      label: 'KYC Status',
    },
    {
      name: 'kycDate',
      label: 'KYC Date',
      type: columnType.date,
    },
    {
      name: 'officer',
      label: 'Officer',
      options: {
        customBodyRenderLite: (dataIndex) => {
          return rows[dataIndex].officer ? <CheckCircleIcon /> : null;
        },
      },
    },
    {
      name: 'owner',
      label: 'Owner',
      options: {
        customBodyRenderLite: (dataIndex) => {
          return rows[dataIndex].owner ? <CheckCircleIcon /> : null;
        },
      },
    },
    {
      name: 'ownershipPercent',
      label: 'Ownership Percent',
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

  const handleDelete = (rowsToDelete) => {
    let messageKey = '';
    if (rowsToDelete.length === 1) {
      messageKey = rows[rowsToDelete[0].dataIndex].ownerId;
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
          await deleteOwner(rows[index].ownerId);
          idsToDelete.push(rows[index].ownerId);
        }
      } catch (error) {
        notifyError(error.message);
      } finally {
        for (let i = 0; i < rowsCopy.length; i++) {
          if (idsToDelete.includes(rowsCopy[i].ownerId)) {
            rowsCopy[i].status = 'Disabled';
          }
        }
        setRows(rowsCopy);
        notifySuccess(messageKey + ' Owner has been deleted');
      }
    });
  };

  const handleOpen = (data) => {
    if (!data) {
      // ADD default values
      data = {
        ownerId: 0,
        accountId: accountId,
        ownerType: 'Secondary',
        firstName: '',
        middleName: '',
        lastName: '',
        citizenship: 'US',
        dateOfBirth: '',
        status: 'Active',
        employmentStatus: '',
        employmentOccupation: '',
        employmentName: '',
        ownership: false,
        stockOwnership: '',
        brokerMember: false,
        brokerName: '',
        affiliatePerson: '',
        affiliatePersonPosition: '',
        ofacStatus: 'Pending',
        ofacDate: '',
        kycStatus: 'Pending',
        kycDate: '',
        imgSignature: '',
        officer: false,
        owner: false,
        ownershipPercent: '',
      };
    }

    setRowData(data);
    setOpen(true);
  };

  const validateDateOfBirth = (date) => {
    let splitedDate = date.split('-');
    let dateOfBirth = new Date(
      splitedDate[1] + '/' + splitedDate[2] + '/' + splitedDate[0]
    );
    let currentDate = new Date();

    if (currentDate.getFullYear() - dateOfBirth.getFullYear() < 18) {
      return false;
    }

    if (currentDate.getFullYear() - dateOfBirth.getFullYear() == 18) {
      if (currentDate.getMonth() < dateOfBirth.getMonth()) {
        return false;
      }
      if (currentDate.getMonth() == dateOfBirth.getMonth()) {
        if (currentDate.getDate() < dateOfBirth.getDate()) {
          return false;
        }
      }
    }

    return true;
  };

  const handleClose = async (data, isEdit, linkedOwnerId) => {
    if (linkedOwnerId && !isEdit) {
      try {
        const { owner } = await readOwner(linkedOwnerId, accountId);
        setRows([owner, ...rows]);
        setOpen(false);
      } catch (error) {
        console.error(error);
      }
      return;
    }

    if (!data) {
      setOpen(false);
      setValidation({});
      return;
    }

    let valid = true;

    setValidation({
      ownerType: !data.ownerType,
      firstName: !data.firstName,
      lastName: !data.lastName,
      citizenship: !data.citizenship,
      status: !data.status,
      dateOfBirth:
        !data.dateOfBirth ||
        (data.ownerType === 'Primary' &&
          data.dateOfBirth &&
          validateDateOfBirth(data.dateOfBirth) === false),
      employmentStatus: !data.employmentStatus,
      stockOwnership: data.ownership == true ? !data.stockOwnership : false,
      brokerName: data.brokerMember == true ? !data.brokerName : false,
      affiliatePerson:
        data.brokerMember == true ? !data.affiliatePerson : false,
      affiliatePersonPosition:
        data.brokerMember == true ? !data.affiliatePersonPosition : false,
    });

    if (!data.ownerType) {
      notifyError('Owner Type is required.');
      valid = false;
    }
    if (!data.firstName) {
      notifyError('First Name is required.');
      valid = false;
    }
    if (!data.lastName) {
      notifyError('Last Name is required.');
      valid = false;
    }
    if (!data.citizenship) {
      notifyError('Citizenship is required.');
      valid = false;
    }
    if (!data.status) {
      notifyError('Status is required.');
      valid = false;
    }
    if (!data.dateOfBirth) {
      notifyError('Date of Birth is required.');
      valid = false;
    }
    if (data.ownerType === 'Primary' && data.dateOfBirth) {
      if (validateDateOfBirth(data.dateOfBirth) === false) {
        notifyError('Age should be atleast 18 years old.');
        valid = false;
      }
    }
    if (!data.employmentStatus) {
      notifyError('Employment status is required.');
      valid = false;
    }

    if (data.ownership === true) {
      if (!data.stockOwnership) {
        notifyError('Stock Symbol is required.');
        valid = false;
      }
    }

    if (data.owner === true) {
      if (!data.ownershipPercent) {
        notifyError('Ownership percent is required.');
        valid = false;
      }
    } else {
      data.ownershipPercent = '';
    }

    if (data.brokerMember === true) {
      if (!data.brokerName) {
        notifyError('Company Name is required.');
        valid = false;
      }

      if (!data.affiliatePerson) {
        notifyError('Person Affiliated is required.');
        valid = false;
      }

      if (!data.affiliatePersonPosition) {
        notifyError('Position of Affiliated Person is required.');
        valid = false;
      }
    }

    if (!valid) {
      return;
    }

    try {
      const { owner } = await updateOwner(accountId, data);

      if (linkedOwnerId || !isEdit) {
        // ADD or Linked
        setRows([owner, ...rows]);
        notifySuccess('New Owner has been added.');
      } else {
        // EDIT
        const index = rows.indexOf(rowData);
        const rowsCopy = [...rows];
        rowsCopy[index] = owner;
        setRows(rowsCopy);
        notifySuccess('Owner has been updated.');
      }

      setValidation({});
      setOpen(false);
    } catch (error) {
      notifyError(error.message);
      console.error(error);
    }
  };

  return (
    <div className={classes.root}>
      <Box component="div">
        <div className={classes.grdRow}>
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
        </div>
      </Box>
      <Box component="div" mt={2}>
        <Table
          title={'OWNERS'}
          data={rows}
          columns={columns}
          options={options}
        />
      </Box>
      {open && (
        <OwnerModal
          onClose={handleClose}
          open={open}
          value={rowData}
          importMode={isImport}
          validation={validation}
        ></OwnerModal>
      )}{' '}
    </div>
  );
}
