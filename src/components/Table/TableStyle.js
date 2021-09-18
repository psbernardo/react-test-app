import { createMuiTheme } from '@material-ui/core/styles';

export default function tableTheme(title) {
  const getMuiTheme = () =>
    createMuiTheme({
      overrides: {
        MUIDataTable: {
          paper: {
            boxShadow: '0px 1px 5px 0px #cdcfdd',
          },
        },
        MuiIconButton: {
          root: {
            color: '#4b514e',
            '&:hover, &:focus': {
              color: '#00ce7d',
            },
            padding: '0px',
            margin: '0 5px',
          },
        },
        MUIDataTableToolbar: {
          icon: {
            '&:hover, &:focus': {
              color: '#00ce7d',
            },
            color: '#4b514e',
          },
          iconActive: {
            color: '#00ce7d',
          },
        },
        MUIDataTableSearch: {
          searchIcon: {
            color: '#f1f1f1',
          },
        },
        MuiInputBase: {
          input: {
            color: title !== 'Locations' ? '#ffffff' : '#131215',
            padding: '3px 7px',
          },
        },
        MuiSelect: {
          select: {
            color: '#000000',
          },
        },
        MuiInput: {
          underline: {
            '&:before': {
              borderBottom: '2px solid #f1f1f1',
            },
            '&:after': {
              borderBottom: '2px solid black',
            },
          },
        },
        MUIDataTableResize: {
          resizer: {
            border: 0,
            borderLeft: '2px solid #4b514e',
            height: '56px',
          },
        },
        MuiCheckbox: {
          colorSecondary: {
            color: '#4b514e !important',
            '&$checked': {
              color: '#00ce7d !important',
            },
          },
          colorPrimary: {
            color: '#4b514e !important',
            '&$checked': {
              color: '#00ce7d !important',
            },
          },
        },
        MuiToolbar: {
          root: {
            backgroundColor: '#131215',
            fontWeight: 'bold',
            color: '#ffffff',
            borderTopLeftRadius: '5px',
            borderTopRightRadius: '5px',
          },
        },
        MuiTableHead: {
          root: {
            background: '#131215',
          },
        },
        MuiTableCell: {
          body: {
            color: '#131215',
          },
          root: {
            fontSize: 13,
            padding: '4px 16px',
            whiteSpace: 'nowrap',
          },
          footer: {
            padding: '7px 14px',
            background: '#ececec',
          },
        },
        MUIDataTableSelectCell: {
          headerCell: {
            backgroundColor: '#131215',
            fontWeight: 'bold',
            color: '#ffffff',
          },
        },
        MuiTableRow: {
          root: {
            '&$selected': {
              backgroundColor: '#ebf0ef',
              '&:hover, &:focus': {
                backgroundColor: '#f2f2f2',
              },
            },
          },
        },
        MUIDataTableHeadCell: {
          fixedHeader: {
            backgroundColor: '#131215',
            fontWeight: 'bold',
            color: '#ffffff',
            padding: '10px 16px',
            whiteSpace: 'nowrap',
          },
          sortActive: {
            color: '#00ce7d',
          },
          sortAction: {
            '& svg': {
              fill: '#00ce7d', // or whatever you need
            },
          },
        },
        MuiTypography: {
          h6: {
            textTransform: 'uppercase',
            fontWeight: 'bold',
          },
        },
        MUIDataTablePagination: {
          toolbar: {
            backgroundColor: '#ffffff',
            color: '#555555',
            padding: 15,
          },
          navContainer: {
            backgroundColor: '#ffffff',
          },
          tableCellContainer: {
            padding: 0,
          },
        },
        PrivateSwitchBase: {
          root: {
            padding: 3,
          },
        },
        MUIDataTableFilterList: {
          root: {
            margin: 0,
            padding: '0px 16px 6px 16px',
            backgroundColor: '#131215',
          },
        },
        MuiChip: {
          root: {
            backgroundColor: '#2f2f2f',
            opacity: 0.9,
            color: '#f1f1f1',
          },
          deleteIcon: {
            color: '#131215',
            '&:hover, &:focus': {
              color: 'rgb(238, 63, 63)',
            },
          },
        },
        MuiSvgIcon: {
          root: {
            width: '.9em',
            height: '.9em',
          },
        },
      },
    });

  return getMuiTheme;
}
