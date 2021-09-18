import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    display: 'flex',
    maxWidth: '100vw',
    overflowX: 'hidden',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    width: `calc(100vw - 240px)`,
    minHeight: '100vh',
  },
  contentShift: {
    width: `calc(100vw - ${340 + theme.spacing(6)}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  fakeToolbar: {
    ...theme.mixins.toolbar,
  },
  toastsContainer: {
    width: 'auto',
    minWidth: 400,
    marginTop: theme.spacing(6),
    right: 0,
  },
  progress: {
    visibility: 'hidden',
  },
  notification: {
    display: 'flex',
    alignItems: 'center',
    background: 'transparent',
    boxShadow: 'none',
    overflow: 'visible',
  },
  notificationCloseButton: {
    position: 'absolute',
    right: theme.spacing(2),
  },
  userGuideButton: {
    backgroundColor: '#131215 !important',
    borderTopLeftRadius: '5px !important',
    borderBottomLeftRadius: '5px !important',
    borderTopRightRadius: '0px !important',
    borderBottomRightRadius: '0px !important',
    color: '#ffffff !important',
    display: 'inline-block !important',
    padding: '5px !important',
    height: '32px !important',
    minWidth: '33px !important',
    position: 'absolute !important',
    right: 0,
    marginTop: '45px !important',
    boxShadow:
      'rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px',
    '&:hover, &.Mui-focusVisible': { backgroundColor: '#4055d0' },
  },
  SurveillanceButton: {
    backgroundColor: '#131215 !important',
    borderTopLeftRadius: '5px !important',
    borderBottomLeftRadius: '5px !important',
    borderTopRightRadius: '0px !important',
    borderBottomRightRadius: '0px !important',
    color: '#ffffff !important',
    display: 'inline-block !important',
    padding: '5px !important',
    height: '32px !important',
    minWidth: '33px !important',
    position: 'absolute !important',
    right: 0,
    marginTop: '95px !important',
    boxShadow:
      'rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px',
    '&:hover, &.Mui-focusVisible': { backgroundColor: '#4055d0' },
  },
  pulse: {
    backgroundColor: '#00ce7d',
    width: 10,
    height: 10,
    borderRadius: 10,
    display: 'block',
    position: 'absolute',
    top: '-4px',
    left: '-4px',
    boxShadow: '0px 0px 4px #00ce7d',
  },
  accordionDetails: {
    display: 'block !important',
    padding: '0px 20px 25px 20px !important',
  },

  accordion: {
    borderRadius: '5px !important',
    boxShadow: '0px 1px 5px -2px #cdcfdd !important',
    border: '1px solid #efeff0 !important',
  },
  modalFooter: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    marginTop: 30,
  },
}));
