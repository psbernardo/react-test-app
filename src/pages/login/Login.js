import React, { useEffect, useState } from 'react';
import {
  Grid,
  Typography,
  Button,
  TextField,
  Fade,
  InputLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
  FormLabel,
} from '@material-ui/core';
import { Link, withRouter } from 'react-router-dom';


import {
  UserServiceClient,
  User,
} from '../../proto/usrpb/user_grpc_web_pb';

import authSvc from '../../services/AuthService';
import { changePassword } from 'services/AdministratorService';

// logo
import SASLogo from '../../images/Sas-logo.png';
import googleGraphics from '../../images/enter-to-google.svg';
import useStyles from './styles';

import { auth } from 'lib/auth/Auth';

function Login(props) {
 // const { } = process.env;
  const classes = useStyles();
  // local
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [isAuthentication, setIsAuthentication] = useState(false);
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [isPasswordChanged, setIsPasswordChanged] = useState(false);
  const [data, setData] = useState({
    email: '',
    password: '',
    usrId: '',
    code: '',
    mode: '',
    authenticationMode: 'Email',
  });

  const handleChange = ({ currentTarget: input }) => {
    const copy = { ...data };
    copy[input.name] = input.value;
    setData(copy);
  };


  const service = new UserServiceClient(
     window.env.GRPC_ENDPOINT,
    {},
  );

  console.log(window.env.GRPC_ENDPOINT);
  
  const handleSubmit = async (e) => {
    e.preventDefault();


    const req = new User();
    req.setName("pat pogi");
     new Promise((resolve, reject) => {
    service.userTestCall(req, {}, (error, response) => {
      if (error) {
     
        console.log(error);
      } else {
        console.log(response.toObject());
        resolve(response.toObject());
      }
    });
  });



    // try {
    //   e.preventDefault();
    //   setErrorMsg('');

    //   data.mode = 'Log In';
    //   data.usrId = await authSvc.login(data);

    //   // show code authentication screen
    //   setIsLogin(false);
    //   setIsAuthentication(true);
    // } catch (error) {
    //   if (error.message) {
    //     setErrorMsg(error.message);
    //   }
    //   console.error(error);
    // }
  };

  useEffect(() => {
    console.log("teset");
  }, []);

  const handleValidateCode = async (e) => {
    if (data.code === '') {
      setErrorMsg('Authentication Code is required.');
      return;
    }

    try {
      e.preventDefault();
      setErrorMsg('');
      const res = await authSvc.validateAuthCode(data);

      if (res.status !== 'Success') {
        setErrorMsg(res.msg);

        if (res.msg === 'Code expired') {
          // return screen to email and password input
          setIsAuthentication(false);
          setIsLogin(true);

          // remove values of email and password fields
          const copy = {
            email: '',
            password: '',
            usrId: '',
            code: '',
            lastPassword: '',
            newPassword: '',
            confirmPassword: '',
          };
          setData(copy);
        }

        return;
      }

      window.location = '/';
    } catch (error) {
      if (error.message) {
        setErrorMsg(error.message);
      }
    }
  };

  const handleForgotPassword = async (e) => {
    console.log('Forgot Password');

    // Get email for display
    const copyData = { ...data, email: data.email };
    setData(copyData);

    // Show Forgot Password View
    setIsLogin(false);
    setIsForgotPassword(true);
    setIsCodeSent(false);
    setIsPasswordChanged(false);
  };

  const validate = () => {
    return false;
  };

  const handleSendCode = async (e) => {
    console.log('Code Sent');

    // Check if email is not empty
    if (data.email === '') {
      setErrorMsg('Username is required before sending code');
      return;
    }

    // Send Forget Password Code
    try {
      e.preventDefault();
      setErrorMsg('');

      data.mode = 'Forgot Password';
      data.usrId = await authSvc.login(data);

      // Delete Access token
      authSvc.logout();
    } catch (error) {
      if (error.message) {
        setErrorMsg(error.message);
        return;
      }
    }

    // Enable code field
    // Disable "Send Code" button
    setIsCodeSent(true);
  };

  const handleChangePassword = async (e) => {
    try {
      e.preventDefault();
      setErrorMsg('');

      // Check if authentication code is provided
      if (!data.code || data.code === '' || !isCodeSent) {
        setErrorMsg('Authentication Code is required.');
        return;
      }

      // Check if confirm password is correct
      if (data.confirmPassword !== data.newPassword) {
        setErrorMsg('Confirm Password is incorrect.');
        return;
      }

      // Get Access Token
      data.mode = '';
      data.usrId = await authSvc.login(data);

      // Validate Code
      var res = await authSvc.validateAuthCode(data);

      // Check if code validation is successful
      if (res.status !== 'Success') {
        setErrorMsg(res.msg);

        // Check if code expired
        // Re-enable send code button
        if (res.msg === 'Code expired') {
          setIsCodeSent(false);
        }

        //Delete Access Token
        authSvc.logout();
        return;
      }

      // Change Password
      res = await authSvc.changePassword(data);

      //Delete Access Token
      authSvc.logout();

      // Check if change password is successful
      if (res.status !== 'Success') {
        setErrorMsg(res.msg);
        return;
      } else {
        // Disable Submit Button
        setErrorMsg('');
        setSuccessMsg(res.msg);
        setIsPasswordChanged(true);
      }
    } catch (error) {
      if (error.message) {
        setErrorMsg(error.message);
      }
    }
  };

  const handleBackToLogin = async (e) => {
    // Get email for display
    const copyData = { email: data.email };
    setData(copyData);

    // Remove Error / Success Msg
    setErrorMsg('');
    setSuccessMsg('');

    // Delete Access token
    authSvc.logout();

    // Show Log in View
    setIsForgotPassword(false);
    setIsLogin(true);
  };

  return (
    <Grid container className={classes.container}>
      <div className={classes.logotypeContainer}>
        <img
          alt="sign-in"
          className={classes.signinVecotr}
          src={googleGraphics}
        ></img>
      </div>
      <div className={classes.formContainer}>
        <div className={classes.form}>
          <React.Fragment>
            <Grid container>
              <Grid item>
                <img
                  className="align-middle"
                  style={{
                    width: 120,
                    height: 'auto',
                    display: 'block',
                  }}
                  alt="SAS"
                  src={SASLogo}
                ></img>
              </Grid>
            </Grid>
            {isAuthentication && (
              <form style={{ marginTop: 50 }} onSubmit={handleValidateCode}>
                <div className={classes.grdRow}>
                  <div className={classes.grdCell1}>
                    <TextField
                      fullWidth
                      required
                      name="code"
                      label="Authentication Code"
                      value={data.code ? data.code : ''}
                      onChange={handleChange}
                      inputProps={{ maxLength: 6 }}
                      InputLabelProps={{ shrink: true }}
                    />
                  </div>
                  <div className={classes.grdCell1} style={{ marginTop: 20 }}>
                    <Button
                      variant="contained"
                      color="secondary"
                      size="large"
                      type="submit"
                    >
                      Submit
                    </Button>
                  </div>
                </div>
              </form>
            )}

            {isLogin && (
              <form style={{ marginTop: 50 }} onSubmit={handleSubmit}>
                <div className={classes.grdRow}>
                  <div className={classes.grdCell1}>
                    <TextField
                      fullWidth
                      required
                      name="email"
                      label="Email"
                      value={data.email ? data.email : ''}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                    />
                  </div>
                  <div className={classes.grdCell1} style={{ marginTop: 20 }}>
                    <TextField
                      fullWidth
                      required
                      name="password"
                      label="Password"
                      type="password"
                      value={data.password ? data.password : ''}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                    />
                  </div>
                  <div className={classes.grdRow}>
                    <span className={classes.grdCell}>
                      <Link
                        style={{ marginTop: 5, marginLeft: 200 }}
                        to="#"
                        onClick={handleForgotPassword}
                      >
                        Forgot password?
                      </Link>
                    </span>
                    <span className={classes.grdCell}>
                      <InputLabel shrink>
                        Send code authentication via:
                      </InputLabel>
                      <RadioGroup
                        style={{ flexDirection: 'row' }}
                        name="authenticationMode"
                        value={data.authenticationMode}
                        onChange={handleChange}
                      >
                        <FormControlLabel
                          name="authenticationMode"
                          label={
                            <Typography style={{ fontSize: 12 }}>
                              Text
                            </Typography>
                          }
                          value="Text"
                          control={<Radio />}
                        />
                        <FormControlLabel
                          name="authenticationMode"
                          label={
                            <Typography style={{ fontSize: 12 }}>
                              Email
                            </Typography>
                          }
                          value="Email"
                          control={<Radio />}
                        />
                      </RadioGroup>
                    </span>
                  </div>

                  <div className={classes.grdCell1} style={{ marginTop: 5 }}>
                    <Button
                      variant="contained"
                      color="secondary"
                      size="large"
                      disabled={validate()}
                      type="submit"
                    >
                      Login
                    </Button>
                  </div>
                </div>
              </form>
            )}

            {isForgotPassword && (
              <form style={{ marginTop: 50 }} onSubmit={handleChangePassword}>
                <div className={classes.grdRow}>
                  <div className={classes.grdCell1}>
                    <FormLabel>Forgot Password</FormLabel>
                  </div>
                  <div className={classes.grdCell1} style={{ marginTop: 20 }}>
                    <TextField
                      fullWidth
                      required
                      name="email"
                      label="Username"
                      value={data.email ? data.email : ''}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                    />
                  </div>
                  <div className={classes.grdCell1} style={{ marginTop: 20 }}>
                    <TextField
                      fullWidth
                      required
                      name="lastPassword"
                      label="Enter the last password you remember"
                      type="password"
                      value={data.lastPassword ? data.lastPassword : ''}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                    />
                  </div>
                  <div className={classes.grdCell1} style={{ marginTop: 20 }}>
                    <TextField
                      fullWidth
                      required
                      name="newPassword"
                      label="New Password"
                      type="password"
                      value={data.newPassword ? data.newPassword : ''}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                    />
                  </div>
                  <div className={classes.grdCell1} style={{ marginTop: 20 }}>
                    <TextField
                      fullWidth
                      required
                      name="confirmPassword"
                      label="Confirm New Password"
                      type="password"
                      value={data.confirmPassword ? data.confirmPassword : ''}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                    />
                  </div>
                  <div className={classes.grdCell1} style={{ marginTop: 20 }}>
                    <TextField
                      required
                      name="code"
                      label="Authentication Code"
                      disabled={!isCodeSent}
                      value={data.code ? data.code : ''}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                    />

                    <Button
                      variant="contained"
                      color="primary"
                      size="small"
                      onClick={handleSendCode}
                      disabled={isCodeSent}
                    >
                      Send Code
                    </Button>
                  </div>
                  <div className={classes.grdCell1} style={{ marginTop: 40 }}>
                    <Button
                      variant="contained"
                      color="secondary"
                      size="large"
                      type="submit"
                      disabled={isPasswordChanged}
                    >
                      Submit
                    </Button>

                    <Link
                      to="#"
                      shrink="true"
                      style={{
                        position: 'absolute',
                        marginTop: 20,
                        marginLeft: 60,
                      }}
                      href="#"
                      onClick={handleBackToLogin}
                    >
                      Back to signin page
                    </Link>
                  </div>
                </div>
              </form>
            )}

            <Fade in={errorMsg !== ''} style={{ marginTop: 20 }}>
              <Typography color="error" className={classes.errorMessage}>
                {errorMsg}
              </Typography>
            </Fade>
            <Fade in={successMsg !== ''} style={{ marginTop: 20 }}>
              <Typography
                style={{ color: 'green' }}
                className={classes.errorMessage}
              >
                <b>{successMsg}</b>
              </Typography>
            </Fade>
          </React.Fragment>
        </div>
        <Typography color="primary" className={classes.copyright}>
          <b>Powered By</b>: Software Algo Solutions
        </Typography>
      </div>
    </Grid>
  );
}

export default withRouter(Login);
