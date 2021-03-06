import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  container: {
    height: '100vh',
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  signinVecotr: {
    maxWidth: 480,
    height: 'auto',
    display: 'block',
    margin: '0px 40px',
  },
  logotypeContainer: {
    backgroundColor: theme.palette.primary.main,
    width: '60%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      width: '50%',
    },
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  logotypeImage: {
    width: 65,
    height: 'auto',
    marginRight: 20,
    display: 'block',
  },
  logotypeText: {
    fontWeight: 700,
    fontSize: 33,
    textTransform: 'capitalize',
  },
  formContainer: {
    width: '40%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      width: '50%',
    },
  },
  form: {
    width: 320,
  },
  tab: {
    fontWeight: 400,
    fontSize: 18,
  },
  greeting: {
    fontWeight: 500,
    textAlign: 'center',
    marginTop: theme.spacing(4),
  },
  subGreeting: {
    fontWeight: 500,
    textAlign: 'center',
    marginTop: theme.spacing(2),
  },
  googleButton: {
    padding: 9,
    marginTop: theme.spacing(2),
    boxShadow: theme.customShadows.widget,
    backgroundColor: 'white',
    width: '100%',
    textTransform: 'none',
  },
  googleButtonCreating: {
    marginTop: 0,
  },
  googleIcon: {
    width: 24,
    marginRight: theme.spacing(2),
  },
  creatingButtonContainer: {
    marginTop: theme.spacing(2.5),
    height: 46,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  createAccountButton: {
    height: 46,
    textTransform: 'none',
  },
  formDividerContainer: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    display: 'flex',
    alignItems: 'center',
  },
  formDividerWord: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  formDivider: {
    flexGrow: 1,
    height: 1,
    backgroundColor: theme.palette.text.hint + '40',
  },
  errorMessage: {
    textAlign: 'center',
  },
  textFieldUnderline: {
    '&:before': {
      borderBottomColor: theme.palette.primary.light,
    },
    '&:after': {
      borderBottomColor: theme.palette.primary.main,
    },
    '&:hover:before': {
      borderBottomColor: `${theme.palette.primary.light} !important`,
    },
  },
  textField: {
    borderBottomColor: theme.palette.background.light,
  },
  formButtons: {
    width: '100%',
    marginTop: theme.spacing(4),
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  forgetButton: {
    textTransform: 'none',
    fontWeight: 400,
  },
  loginLoader: {
    marginLeft: theme.spacing(4),
  },
  copyright: {
    marginTop: theme.spacing(4),
    whiteSpace: 'nowrap',
    [theme.breakpoints.up('md')]: {
      position: 'absolute',
      bottom: theme.spacing(5),
    },
  },
}));
