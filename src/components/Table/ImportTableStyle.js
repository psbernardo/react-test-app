import { createMuiTheme } from '@material-ui/core/styles';

export default function tableTheme() {
  const getMuiTheme = () =>
    createMuiTheme({
      overrides: {
        MUIDataTable: {
          paper: {
            boxShadow: '0px 1px 5px 0px #cdcfdd',
            overflowY: 'auto',
          },
          responsiveBase: { maxHeight: '550px' },
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
        MuiTableCell: {
          body: {
            color: '#4A4A4A',
          },
          root: {
            fontSize: 13,
            padding: '6px 16px',
            whiteSpace: 'nowrap',
          },
        },
        MuiIconButton: {
          root: {
            padding: '1px 5px',
          },
        },
        MUIDataTableSelectCell: {
          headerCell: {
            backgroundColor: '#131215',
            fontWeight: 'bold',
            color: '#ffffff',
          },
        },
        MUIDataTableHeadCell: {
          fixedHeader: {
            backgroundColor: '#131215',
            fontWeight: 'bold',
            color: '#ffffff',
            padding: '10px 16px',
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
          },
        },
        PrivateSwitchBase: {
          root: {
            padding: 12,
          },
        },
        MUIDataTableFilterList: {
          root: {
            margin: 0,
            padding: '0px 16px 1px 16px',
            backgroundColor: '#131215',
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
        MuiChip: {
          root: {
            backgroundColor: '#d5dcff',
            opacity: 0.8,
          },
        },
      },
    });

  return getMuiTheme;
}
