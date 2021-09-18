import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
    boxSizing: 'border-box',
  },
  paper: {
    width: '100%',
    boxSizing: 'border-box',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
  textBold: {
    fontWeight: 'bold',
  },
  grdRow: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
  },
  grdRowInlineFlex: {
    display: 'inline-flex',
    flex: 1,
    flexDirection: 'row',
  },
  grdCol: {
    display: 'flex',
    flexDirection: 'column',
  },
  grdCell1: {
    flex: 1,
    marginBottom: 30,
  },
  grdCell1NM: {
    flex: 1,
  },
  grdCell2: {
    flex: 2,
    marginBottom: 30,
  },
  grdCellNone: {
    flex: 'none',
    marginBottom: 30,
  },
  grdCellNoneNM: {
    flex: 'none',
  },
  actionContainer: {
    display: 'flex',
    marginTop: 20,
  },
  actionFooter: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  pageContainer: {
    padding: 20,
  },
  searchField: {
    width: 275,
  },
  fadeModalMd: {
    maxWidth: 700,
    width: '100%',
    margin: '40px auto',
    padding: '20px 25px 25px 25px',
    backgroundColor: '#ffffff',
    border: 'none',
    borderRadius: 5,
    boxShadow: '0px 0px 10px #333333',
    boxSizing: 'border-box',
    outline: 'none',
  },
  modalBackdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalForm: {
    marginTop: 20,
  },
  modalFooter: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    marginTop: 20,
  },
  container: {
    padding: '25px 30px 5px 30px',
    backgroundColor: '#ffffff',
    border: '1px solid #e8e8e8',
    borderRadius: 5,
  },
  containerTitle: {
    marginBottom: 30,
  },
}));
