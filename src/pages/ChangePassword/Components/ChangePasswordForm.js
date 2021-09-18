/*ReactJS*/
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

/*Styles*/
import useStyles from '../../../styles';

/*Material UI Components*/
import { Button, TextField } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import {
  notifySuccess,
  notifyError,
} from 'components/Notification/Notification';

import { changePassword } from '../../../services/AdministratorService';
import authSvc from '../../../services/AuthService';

export default function ChangePasswordForm() {
  const classes = useStyles();
  const [mounted, setMounted] = React.useState(false);
  const history = useHistory();

  const [data, setData] = useState({
    usrId: '',
    email: '',
    password: '',
    defaultAccess: '',
  });

  const handleSave = async () => {
    if (!data) {
      notifyError('Something went wrong.');
      return;
    }

    let valid = true;

    try {
      if (!data.oldPassword) {
        notifyError('Old Password is required.');
        valid = false;
      }

      if (!data.newPassword) {
        notifyError('New Password is required.');
        valid = false;
      } else if (!data.confirmNewPassword) {
        notifyError('Confirm Password.');
        valid = false;
      } else if (data.newPassword !== data.confirmNewPassword) {
        notifyError('Confirm Password mismatch.');
        valid = false;
      } else if (data.newPassword === data.oldPassword) {
        notifyError('New Password cannot be equal to Old Password.');
        valid = false;
      }

      if (!valid) {
        return;
      }

      await changePassword(data);

      notifySuccess('Password has been updated. Will now logout.');
      setTimeout(function() {
        history.push('/logout');
      }, 2000);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    const input = e.currentTarget.name ? e.currentTarget : e.target;

    setData({
      ...data,
      [input.name]: input.value,
    });
  };

  useEffect(() => {
    if (!mounted) {
      const user = authSvc.getCurrentUser();
      setData({
        usrId: user.UserId,
        username: user.Username,
        oldPassword: '',
        newPassword: '',
        confirmNewPassword: '',
      });
    }
    // eslint-disable-next-line
    return () => {
      setMounted(true);
    };
  }, [mounted]);

  return (
    <Card style={{ width: '50rem' }}>
      <CardContent>
        <form noValidate autoComplete="off">
          <div className={classes.grdRow}>
            <TextField
              InputProps={{ readOnly: true }}
              name="username"
              required
              label="Username"
              fullWidth
              InputLabelProps={{ shrink: true }}
              value={data.username}
            />
          </div>
          <div className={classes.grdRow}>
            <TextField
              name="oldPassword"
              required
              label="Old Password"
              type="password"
              fullWidth
              autoComplete="new-password"
              InputLabelProps={{ shrink: true }}
              value={data.oldPassword}
              onChange={handleChange}
            />
          </div>
          <div className={classes.grdRow}>
            <TextField
              name="newPassword"
              required
              label="New Password"
              type="password"
              fullWidth
              autoComplete="new-password"
              InputLabelProps={{ shrink: true }}
              value={data.newPassword}
              onChange={handleChange}
            />
          </div>
          <div className={classes.grdRow}>
            <TextField
              name="confirmNewPassword"
              required
              label="Confirm New Password"
              type="password"
              fullWidth
              autoComplete="new-password"
              InputLabelProps={{ shrink: true }}
              value={data.confirmNewPassword}
              onChange={handleChange}
            />
          </div>
        </form>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          onClick={() => {
            handleSave();
          }}
        >
          Save
        </Button>
      </CardActions>
    </Card>
  );
}
