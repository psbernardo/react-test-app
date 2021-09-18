import React from 'react';
import { Button } from '@material-ui/core';
import {
  NotificationsNone as NotificationsIcon,
  Info as InfoIcon,
  ShoppingCart as ShoppingCartIcon,
  LocalOffer as TicketIcon,
  BusinessCenter as DeliveredIcon,
  SmsFailed as FeedbackIcon,
  DiscFull as DiscIcon,
  Email as MessageIcon,
  Report as ReportIcon,
  Error as DefenceIcon,
  AccountBox as CustomerIcon,
  Done as ShippedIcon,
  Publish as UploadIcon,
} from '@material-ui/icons';
import { useTheme } from '@material-ui/core/styles';
import classnames from 'classnames';
import tinycolor from 'tinycolor2';

// styles
import useStyles from './styles';

// components
import { Typography } from '../Wrappers';
import { toast } from 'react-toastify';

const typesIcons = {
  'e-commerce': <ShoppingCartIcon />,
  notification: <NotificationsIcon />,
  offer: <TicketIcon />,
  info: <InfoIcon />,
  message: <MessageIcon />,
  feedback: <FeedbackIcon />,
  customer: <CustomerIcon />,
  shipped: <ShippedIcon />,
  delivered: <DeliveredIcon />,
  defence: <DefenceIcon />,
  report: <ReportIcon />,
  upload: <UploadIcon />,
  disc: <DiscIcon />,
};

export default function Notification({ variant, ...props }) {
  var classes = useStyles();
  var theme = useTheme();

  const icon = getIconByType(props.type);
  const iconWithStyles = React.cloneElement(icon, {
    classes: {
      root: classes.notificationIcon,
    },
    style: {
      color:
        variant !== 'contained' &&
        theme.palette[props.color] &&
        theme.palette[props.color].main,
    },
  });

  return (
    <div
      className={classnames(classes.notificationContainer, props.className, {
        [classes.notificationContained]: variant === 'contained',
        [classes.notificationContainedShadowless]: props.shadowless,
      })}
      style={{
        backgroundColor:
          variant === 'contained' &&
          theme.palette[props.color] &&
          theme.palette[props.color].main,
      }}
    >
      <div
        className={classnames(classes.notificationIconContainer, {
          [classes.notificationIconContainerContained]: variant === 'contained',
          [classes.notificationIconContainerRounded]: variant === 'rounded',
        })}
        style={{
          backgroundColor:
            variant === 'rounded' &&
            theme.palette[props.color] &&
            tinycolor(theme.palette[props.color].main)
              .setAlpha(0.15)
              .toRgbString(),
        }}
      >
        {iconWithStyles}
      </div>
      <div className={classes.messageContainer}>
        <Typography
          className={classnames({
            [classes.containedTypography]: variant === 'contained',
          })}
          variant={props.typographyVariant}
          size={variant !== 'contained' && !props.typographyVariant && 'md'}
        >
          {props.message}
        </Typography>
        {props.extraButton && props.extraButtonClick && (
          <Button
            onClick={props.extraButtonClick}
            disableRipple
            className={classes.extraButton}
          >
            {props.extraButton}
          </Button>
        )}
      </div>
    </div>
  );
}

// ####################################################################
function getIconByType(type = 'offer') {
  return typesIcons[type];
}

function notifySuccess(msg, options) {
  return toast(
    <Notification
      type="shipped"
      message={msg}
      variant="contained"
      color="success"
    />,
    options
  );
}

function notifyInfo(msg, options) {
  return toast(
    <Notification
      type="info"
      message={msg}
      variant="contained"
      color="primary"
    />,
    options
  );
}

function notifyError(msg, options) {
  let color = 'warning';
  if (msg.length > 3 && ['-2', '-1'].includes(msg.slice(0, 2))) {
    color = 'error';
  }

  return toast(
    <Notification
      type="feedback"
      message={msg}
      variant="contained"
      color={color}
    />,
    {
      // prevent duplicate
      toastId: msg,
      ...options,
    }
  );
}

function notifyWarning(msg, options) {
  return toast(
    <Notification
      type="report"
      message={msg}
      variant="contained"
      color="warning"
    />,
    options
  );
}

export { notifySuccess, notifyInfo, notifyError, notifyWarning };
