import React, { useEffect } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import classnames from 'classnames';
import {
  Close as CloseIcon,
  InfoOutlined as InfoOutlinedIcon,
} from '@material-ui/icons';
import TrackChangesIcon from '@material-ui/icons/TrackChanges';
import {
  notifyError,
  notifySuccess,
} from 'components/Notification/Notification';


// styles
import useStyles from './styles';
import useStyles2 from '../../styles';

import {
  Typography,
  Button,
  Modal,
  Fade,
  Backdrop,
  Box,
} from '@material-ui/core';

// components
import Header from '../Header';
import Sidebar from '../Sidebar';

// pages





import { stringToPBObjectDate } from 'services/ConvertService';



//new pages


// context
import { useLayoutState } from 'context/LayoutContext';
import { ToastContainer } from 'react-toastify';


function CloseButton({ classes }) {
  return <CloseIcon className={classes} />;
}

function Layout(props) {
  var classes = useStyles();
  var classes2 = useStyles2();

  var layoutState = useLayoutState();

  const [openModal, setOpenModal] = React.useState(false);
  const [subMenu, setSubMenu] = React.useState('');
  const [pageName, setPageName] = React.useState('');
  const [selectedUserGuide, setSelectedUserGuide] = React.useState('');
  const [rows, setRows] = React.useState([]);
  const [pageBool, setPageBool] = React.useState(false);
  const [openSurveillanceModal, setOpenSurveillanceModal] = React.useState(
    false
  );
  const [rowsSurveillance, setRowsSurveillance] = React.useState([]);

  useEffect(() => {
    setSubMenu('');
    setPageName('');
    setSelectedUserGuide('');
    setRows([]);

    const url = props.location.pathname.split('/');

    const textTransform = (words) => {
      let separateWord = words.toLowerCase().split(' ');

      for (let i = 0; i < separateWord.length; i++) {
        separateWord[i] =
          separateWord[i].charAt(0).toUpperCase() +
          separateWord[i].substring(1);
      }

      return separateWord
        .join(' ')
        .replace(/Ach /g, 'ACH/')
        .replace(/Trns/gi, 'TRNS')
        .replace(/Gl/g, 'GL')
        .replace(/Etf/g, 'ETF')
        .replace(/Sll/g, 'SLL')
        .replace(/Finra/g, 'FINRA')
        .replace(/Nscc/g, 'NSCC')
        .replace(/Cns/g, 'CNS')
        .replace(/Dtcc/g, 'DTCC')
        .replace(/Apibal/g, 'APIBAL')
        .replace(/Acats/g, 'ACATS')
        .replace(/Misc/g, 'MISC')
        .replace(/Bluesheet/g, 'BlueSheet')
        .replace(/Id/g, 'ID')
        .replace(/Cat/g, 'CAT')
        .replace(/And/g, 'and')
        .replace(/Vs/g, 'vs');
    };

    setSubMenu(textTransform(url[2].replaceAll('-', ' ')));
    setPageName(textTransform(url[3].replaceAll('-', ' ')));
    getSurveillancePages(textTransform(url[3].replaceAll('-', ' ')));
  }, [props]);

  const getSurveillancePages = async (pPageName) => {
    let data = {
      status: 'Active',
    };


   
    const resBool =  true;
    setPageBool(resBool);

    return resBool;
  };

  const getParam = async () => {
    const params = props.pages
      .filter(function(v) {
        return v.subMenu === subMenu && v.pageName === pageName ? v.pageId : 0;
      })
      .map((v) => ({
        pageId: v.pageId,
        userGuideId: v.userGuideId,
      }));

    return params[0];
  };

  const handleOpen = async () => {
    setOpenModal(true);
    setSelectedUserGuide('Please wait while we check for records...');

    const param = await getParam();




    // console.log("Params");
    // console.log(param);

   
   
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  const handleOpenSurveillance = async () => {
    try {
      let dateArrayNames = [
        'tradeDate',
        'settleDate',
        'fromDate',
        'reportDate',
      ];
      let deteRes;

      dateArrayNames.forEach(async (row, index) => {
        const res = document.getElementsByName([row])[0];
        if (res != undefined) {
          deteRes = res.value;
        }
      });
      const data = {
        pageName: pageName,
        reportDate: stringToPBObjectDate(deteRes),
        reviewer: '',
        status: '',
      };
      console.log(data);
      setRowsSurveillance(data);
      setOpenSurveillanceModal(true);
    } catch (error) {
      notifyError(error.message);
    }
  };

  const handleCloseSurveillance = async (data, note, isReviewed) => {
    try {
      if (!data) {
        setOpenSurveillanceModal(false);
        return;
      }
      let valid = true;

      if (isReviewed) {
        data.status = 'Reviewed';
      }
      data.note = note;

      if (!data.note) {
        notifyError('Note is required.');
        valid = false;
      }

      if (!valid) {
        return;
      }



      if (isReviewed) {
        notifySuccess('Surveillance Report was successfully reviewed.');
      } else {
        notifySuccess('Note was updated.');
      }
    } catch (error) {
      notifyError(error.message);
    } finally {
      setOpenSurveillanceModal(false);
    }
  };

  return (
    <div className={classes.root}>
      <Header user={props.user} history={props.history} />
      <Sidebar />
      <div
        className={classnames(classes.content, {
          [classes.contentShift]: layoutState.isSidebarOpened,
        })}
      >
        <div className={classes.fakeToolbar} />
        <div>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={true}
            newestOnTop={true}
            pauseOnFocusLoss
            pauseOnHover
            className={classes.toastsContainer}
            closeButton={
              <CloseButton
                classes={classes.notificationCloseButton}
              ></CloseButton>
            }
            toastClassName={classes.notification}
            progressClassName={classes.notificationProgress}
          />
          {pageName !== 'User Guide' ? (
            <Button className={classes.userGuideButton} onClick={handleOpen}>
              <span className={classes.pulse}></span>
              <InfoOutlinedIcon style={{ fontSize: 22 }} />
            </Button>
          ) : null}

          {pageBool ? (
            <Button
              className={classes.SurveillanceButton}
              onClick={handleOpenSurveillance}
            >
              <span className={classes.pulse}></span>
              <TrackChangesIcon style={{ fontSize: 22 }} />
            </Button>
          ) : null}

          <Switch>
      
   
           
          
           
           
            
          </Switch>
        </div>
      </div>
      <Modal
        className={classes2.modalBackdrop}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openModal}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openModal}>
          <div className={classes2.fadeModalFull}>
            <Typography
              id="transition-modal-title"
              className={classes2.textBold}
              variant="h4"
              gutterBottom
              style={{ textTransform: 'capitalize' }}
            >
              User Guide: {pageName}
            </Typography>
            <Box id="transition-modal-description" mt={5}>
              <div
                className={classes2.userGuidePreview}
                dangerouslySetInnerHTML={{ __html: selectedUserGuide }}
              />
            
            </Box>
          </div>
        </Fade>
      </Modal>
     
    </div>
  );
}

export default withRouter(Layout);
