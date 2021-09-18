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
import SurveillanceReportModal from '../../pages/SurveillanceReport/Components/SurveillanceReportModal';

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
import Dashboard from 'pages/dashboard';
import Notifications from 'pages/notifications';
import Tables from 'pages/tables';

import { readUserGuide } from 'services/UserGuideService';
import { readFieldDefinition } from 'services/FieldDefinitionService';
import { listSetup } from 'services/SurveillanceSetupService';
import { updateReport } from 'services/SurveillanceReportService';
import { stringToPBObjectDate } from 'services/ConvertService';

import FieldDefinitionTableView from '../../pages/UserGuide/Components/FieldDefinitionTableView';

//new pages
import Home from 'pages/Home/Home';
import SystemCode from 'pages/SystemCode/SystemCode';
import ClientAccount from 'pages/ClientAccount/ClientAccount';
import GLAccount from 'pages/GLAccount/GLAccount';
import BankAccount from 'pages/BankAccount/BankAccount';
import BankAddress from 'pages/BankAddress/BankAddress';
import ACHWire from 'pages/ACHWire/ACHWire';
import Activity from 'pages/Activity/Activity';
import Transaction from 'pages/Transaction/Transaction';
import Balance from 'pages/Balance/Balance';
import BalanceRecon from 'pages/BalanceRecon/BalanceRecon';
import Price from 'pages/Price/Price';
import SecurityMaster from 'pages/SecurityMaster/SecurityMaster';
import MarginRequirement from 'pages/MarginRequirement/MarginRequirement';
import Position from 'pages/Position/Position';
import PositionRecon from 'pages/PositionRecon/PositionRecon';
import Segregation from 'pages/Segregation/Segregation';
import Etf from 'pages/ETF/Etf';
import ProfitAndLoss from 'pages/ProfitAndLoss/ProfitAndLoss';
import Calendar from 'pages/Calendar/Calendar';
import ReOrgAnnouncement from 'pages/ReOrgAnnouncement/ReOrgAnnouncement';
import Entitlement from 'pages/Entitlement/Entitlement';
import EntitlementRecon from 'pages/EntitlementRecon/EntitlementRecon';
import ReorgRecon from 'pages/ReorgRecon/ReorgRecon';
import ReserveCalc from 'pages/ReserveCalc/ReserveCalc';
import TrialBalance from 'pages/TrialBalance/TrialBalance';
import MonthlyStatement from 'pages/MonthlyStatement/MonthlyStatement';
import NonMRO from 'pages/NonMro/NonMro';
import GLReport from 'pages/GLReport/GLReport';
import ExecutionRecon from 'pages/ExecutionRecon/ExecutionRecon';
import CallLog from 'pages/CallLog/CallLog';
import DailyTradeConfirm from 'pages/DailyTradeConfirm/DailyTradeConfirm';
import PendingTrns from 'pages/PendingTRNS/PendingTrns';
import Sll from 'pages/SLL/Sll';
import StockBorrow from 'pages/StockBorrow/StockBorrow';
import MarginInterestCalc from 'pages/MarginInterestCalc/MarginInterestCalc';
import MarginInterestRate from 'pages/MarginInterestRate/MarginInterestRate';
import Administrator from 'pages/Administrator/Administrator';
import SystemNumber from 'pages/SystemNumber/SystemNumber';
import Fee from 'pages/Fee/Fee';
import FeeManagement from 'pages/FeeManagement/FeeManagement';
import OpenItem from 'pages/OpenItem/OpenItem';
import NSCC from 'pages/Nscc/NSCC';
import FinraShortPosition from 'pages/FinraShortPosition/FinraShortPosition';
import MonthlyReport from 'pages/MonthlyReport/MonthlyReport';
import QuarterlyReport from 'pages/QuarterlyReport/QuarterlyReport';
import CNSvsDTCC from 'pages/CNSvsDTCC/CNSvsDTCC';
import SystemProfile from 'pages/SystemProfile/SystemProfile';
import UserGuidePage from 'pages/UserGuide/UserGuide';
import FaqsPage from 'pages/Faqs/Faqs';
import DataFileTransfer from 'pages/DataFileTransfer/DataFileTransfer';
import AccountSummary from 'pages/AccountSummary/AccountSummary';
import BlueSheet from 'pages/BlueSheet/BlueSheet';
import LargeTraderID from 'pages/LargeTraderID/LargeTraderID';
import PositionAging from 'pages/PositionAging/PositionAging';
import Projection from 'pages/Projection/Projection';
import SettlementShortPosition from 'pages/SettlementShortPosition/SettlementShortPosition';
import OptionProfile from 'pages/OptionProfile/OptionProfile';
import TradeReconOption from 'pages/TradeReconOption/TradeReconOption';
import TradeSummary from 'pages/TradeSummary/TradeSummary';
import TAFFee from 'pages/TAFFee/TAFFee';
import REGFee from 'pages/REGFee/REGFee';
import PositionDtcc from 'pages/PositionDtcc/PositionDtcc';
import Priority from 'pages/Priority/Priority';
import TransferAgent from 'pages/TransferAgent/TransferAgent';
import PhysicalCertificate from 'pages/PhysicalCertificate/PhysicalCertificate';
import TaxWithholdingDiv from 'pages/TaxWithholdingDiv/TaxWithholdingDiv';
import StatementDisclosure from './../../pages/StatementDisclosure/StatementDisclosure';
import TaxRate from './../../pages/TaxRate/TaxRate';
import ReportTemplate from './../../pages/ReportTemplate/ReportTemplate';
import TransferInput from './../../pages/TransferInput/TransferInput';
import Partial from './../../pages/Partial/Partial';
import Out from './../../pages/Out/Out';
import BalanceSummaryReport from './../../pages/BalanceSummaryReport/BalanceSummaryReport';
import Access from './../../pages/Access/Access';
import Apibal from './../../pages/Apibal/Apibal';
import Wallet from './../../pages/Wallet/Wallet';
import DcRequest from './../../pages/DcRequest/DcRequest';
import EmailManager from 'pages/EmailManager/EmailManager';
import ChangePassword from 'pages/ChangePassword/ChangePassword';
import Received from '../../pages/Received/Received';
import LocateLadder from './../../pages/LocateLadder/LocateLadder';
import BankBalance from './../../pages/BankBalance/BankBalance';
import BankTransaction from 'pages/BankTransaction/BankTransaction';
import BankRecon from 'pages/BankRecon/BankRecon';
import FilePath from 'pages/FilePath/FilePath';
import StockBorrowReport from './../../pages/StockBorrowReport/StockBorrowReport';
import StockBorrowRate from './../../pages/StockBorrowRate/StockBorrowRate';
import MultiCycleMro from './../../pages/MultiCycleMRO/MultiCycleMRO';
import OutputPosition from './../../pages/OutputPosition/OutputPosition';
import OutputSettlement from './../../pages/OutputSettlement/OutputSettlement';
import SecurityMarginRate from 'pages/SecurityMarginRate/SecurityMarginRate';
import Concentration from 'pages/Concentration/Concentration';
import UndueConcentration from 'pages/UndueConcentration/UndueConcentration';
import StockRecord from 'pages/StockRecord/StockRecord';
import StockBorrowCharge from './../../pages/StockBorrowCharge/StockBorrowCharge';
import Reserve15c3 from 'pages/Reserve15c3/Reserve15c3';
import AccountProcess from 'pages/AccountProcess/AccountProcess';
import BuyingPower from 'pages/BuyingPower/BuyingPower';
import CatReport from 'pages/CatReport/CatReport';
import EmailSender from 'pages/EmailSender/EmailSender';
import DataDictionary from 'pages/DataDictionary/DataDictionary';
import Setup from 'pages/Setup/Setup';
import SurveillanceReport from 'pages/SurveillanceReport/SurveillanceReport';
import SystemProcess from 'pages/SystemProcess/SystemProcess';
import ReconMapping from 'pages/ReconMapping/ReconMapping';
import Parameter from 'pages/Parameter/Parameter';
import FixTagSetup from 'pages/FixTagSetup/FixTagSetup';
import MiniManipulation from 'pages/MiniManipulation/MiniManipulation';
import OddLot from 'pages/OddLot/OddLot';
import ClientAccountAccess from 'pages/ClientAccountAccess/ClientAccountAccess';
import TRNSRecon from 'pages/TRNSRecon/TRNSRecon';
import PositionOption from 'pages/PositionOption/PositionOption';
import ApexProBalance from 'pages/ApexProBalance/ApexProBalance';
import ApexProTRNS from 'pages/ApexProTRNS/ApexProTRNS';
import ApexProPosition from 'pages/ApexProPosition/ApexProPosition';
import WashSale from 'pages/WashSale/WashSale';
import AverageDailyVolume from 'pages/AverageDailyVolume/AverageDailyVolume';
import TradeParticipation from 'pages/TradeParticipation/TradeParticipation';
import FixValue from 'pages/FixValue/FixValue';
import SurveillanceOfac from 'pages/SurveillanceOfac/SurveillanceOfac';
import Credential from 'pages/Credential/Credential';
import Commission from 'pages/Commission/Commission';
import Layering from 'pages/Layering/Layering';
import APIValue from 'pages/APIValue/APIValue';

// context
import { useLayoutState } from 'context/LayoutContext';
import { ToastContainer } from 'react-toastify';
import Spoofing from 'pages/Spoofing/Spoofing';

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

    const resp = await listSetup(data);
    const res = resp.setupList.find(function(value) {
      return value.pageName == pPageName;
    });
    const resBool = res === undefined ? false : true;
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

    const resp = await readUserGuide(param ? param.pageId : 0);
    const resp2 = await readFieldDefinition(param ? param.userGuideId : 0);

    // console.log("Params");
    // console.log(param);

    setSelectedUserGuide(
      resp.userGuide.userGuideId
        ? resp.userGuide.content
        : 'Sorry, no user guide is created for this page.'
    );

    setRows(resp2.fieldDefinitionsList);
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

      await updateReport(data);

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
            <Route path="/app/home" component={Home} />
            <Route
              path="/app/system-profile/calendar/:search?"
              render={(props) => (
                <Calendar truepath="/app/system-profilecalendar" {...props} />
              )}
            />
            <Route
              path="/app/system-profile/system-profile/:search?"
              render={(props) => (
                <SystemProfile
                  truepath="/app/system-profile/system-profile"
                  {...props}
                />
              )}
            />
            <Route
              path="/app/system-profile/system-process/:search?"
              render={(props) => (
                <SystemProcess
                  truepath="/app/system-profile/system-process"
                  {...props}
                />
              )}
            />
            <Route
              path="/app/system-profile/file-path/:search?"
              render={(props) => (
                <FilePath truepath="/app/system-profile/file-path" {...props} />
              )}
            />
            <Route
              path="/app/system-profile/system-code/:search?"
              render={(props) => (
                <SystemCode
                  truepath="/app/system-profile/system-code"
                  {...props}
                />
              )}
            />
            <Route
              path="/app/system-profile/system-number/:search?"
              render={(props) => (
                <SystemNumber
                  truepath="/app/system-profile/system-number"
                  {...props}
                />
              )}
            />
            <Route
              path="/app/system-profile/user-guide/:search?"
              render={(props) => (
                <UserGuidePage
                  truepath="/app/system-profile/user-guide"
                  {...props}
                />
              )}
            />
            <Route
              path="/app/user-guide/question-and-answer/:search?"
              render={(props) => (
                <FaqsPage
                  truepath="/app/user-guide/question-and-answer"
                  {...props}
                />
              )}
            />
            <Route
              path="/app/user-guide/data-dictionary/:search?"
              render={(props) => (
                <DataDictionary
                  truepath="/app/user-guide/data-dictionary"
                  {...props}
                />
              )}
            />
            <Route
              path="/app/account-setup/user/:search?"
              render={(props) => (
                <Administrator truepath="/app/account-setup/user" {...props} />
              )}
            />
            <Route
              path="/app/account-setup/access/:search?"
              render={(props) => (
                <Access truepath="/app/account-setup/access" {...props} />
              )}
            />
            <Route
              path="/app/account-setup/client-account/:search?"
              render={(props) => (
                <ClientAccount
                  truepath="/app/account-setup/client-account"
                  {...props}
                />
              )}
            />
            <Route
              path="/app/account-setup/client-account-access/:search?"
              render={(props) => (
                <ClientAccountAccess
                  truepath="/app/account-setup/client-account-access"
                  {...props}
                />
              )}
            />
            <Route
              path="/app/physical-certificate/transfer-agent/:search?"
              render={(props) => (
                <TransferAgent
                  truepath="/physical-certificate/transfer-agent"
                  {...props}
                />
              )}
            />
            <Route
              path="/app/physical-certificate/physical-certificate/:search?"
              render={(props) => (
                <PhysicalCertificate
                  truepath="/physical-certificate/physical-certificate"
                  {...props}
                />
              )}
            />
            <Route
              path="/app/account-setup/gl-account/:search?"
              render={(props) => (
                <GLAccount
                  truepath="/app/account-setup/gl-account"
                  {...props}
                />
              )}
            />
            <Route
              path="/app/bank/bank-account/:search?"
              render={(props) => (
                <BankAccount truepath="/app/bank/bank-account" {...props} />
              )}
            />
            <Route
              path="/app/bank/bank-address/:search?"
              render={(props) => (
                <BankAddress truepath="/app/bank/bank-address" {...props} />
              )}
            />
            <Route
              path="/app/bank/wallet/:search?"
              render={(props) => (
                <Wallet truepath="/app/bank/wallet" {...props} />
              )}
            />
            <Route
              path="/app/email-manager/email-manager/:search?"
              render={(props) => (
                <EmailManager
                  truepath="/app/email-manager/email-manager"
                  {...props}
                />
              )}
            />
            <Route
              path="/app/email-manager/email-sender/:search?"
              render={(props) => (
                <EmailSender
                  truepath="/app/email-manager/email-sender"
                  {...props}
                />
              )}
            />
            <Route
              path="/app/bank/ach-wire/:search?"
              render={(props) => (
                <ACHWire truepath="/app/bank/ach-wire" {...props} />
              )}
            />

            <Route
              path="/app/bank/digital-bank-request/:search?"
              render={(props) => (
                <DcRequest
                  truepath="/app/bank/digital-bank-request"
                  {...props}
                />
              )}
            />
            <Route
              path="/app/bank/bank-balance/:search?"
              render={(props) => (
                <BankBalance truepath="/app/bank/bank-balance" {...props} />
              )}
            />
            <Route
              path="/app/bank/bank-recon/:search?"
              render={(props) => (
                <BankRecon truepath="/app/bank/bank-recon" {...props} />
              )}
            />
            <Route
              path="/app/cash/balance-summary-report/:search?"
              render={(props) => (
                <BalanceSummaryReport
                  truepath="/app/cash/balance-summary-report"
                  {...props}
                />
              )}
            />
            <Route
              path="/app/misc/recon-mapping/:search?"
              render={(props) => (
                <ReconMapping truepath="/app/misc/recon-mapping" {...props} />
              )}
            />
            <Route
              path="/app/integration/fix-tag-setup/:search?"
              render={(props) => (
                <FixTagSetup
                  truepath="/app/integration/fix-tag-setup"
                  {...props}
                />
              )}
            />
            <Route
              path="/app/integration/fix-value/:search?"
              render={(props) => (
                <FixValue truepath="/app/integration/fix-value" {...props} />
              )}
            />
            <Route
              path="/app/integration/api-value/:search?"
              render={(props) => (
                <APIValue truepath="/app/integration/api-value" {...props} />
              )}
            />
            <Route
              path="/app/segregation/segregation/:search?"
              render={(props) => (
                <Segregation
                  truepath="/app/segregation/segregation"
                  {...props}
                />
              )}
            />
            <Route
              path="/app/segregation/priority/:search?"
              render={(props) => (
                <Priority truepath="/app/segregation/priority" {...props} />
              )}
            />
            <Route
              path="/app/calculation/reserve-calc"
              render={(props) => (
                <ReserveCalc
                  truepath="/app/calculation/reserve-calc"
                  {...props}
                />
              )}
            />
            <Route
              path="/app/position/finra-short-position"
              render={(props) => (
                <FinraShortPosition
                  truepath="/app/position/finra-short-position"
                  {...props}
                />
              )}
            />
            <Route
              path="/app/position/stock-borrow"
              render={(props) => (
                <StockRecord truepath="/app/position/stock-borrow" {...props} />
              )}
            />
            <Route
              path="/app/acats/full/:search?"
              render={(props) => (
                <TransferInput truepath="/app/acats/full" {...props} />
              )}
            />
            <Route
              path="/app/risk-manager/call-logs"
              render={(props) => (
                <CallLog truepath="/app/risk-manager/call-logs" {...props} />
              )}
            />
            <Route
              path="/app/risk-manager/buying-power"
              render={(props) => (
                <BuyingPower
                  truepath="/app/risk-manager/buying-power"
                  {...props}
                />
              )}
            />
            {/* <Route
              path="/app/risk-manager/day-trade-buying-power-used"
              render={(props) => (
                <DayTradeBuyingPowerUsed
                  truepath="/app/risk-manager/day-trade-buying-power-used"
                  {...props}
                />
              )}
            /> */}
            <Route
              path="/app/regulatory/15c3"
              render={(props) => (
                <Reserve15c3 truepath="/app/regulatory/15c3" {...props} />
              )}
            />
            <Route
              path="/app/regulatory/monthly-report"
              render={(props) => (
                <MonthlyReport
                  truepath="/app/regulatory/monthly-report"
                  {...props}
                />
              )}
            />

            <Route
              path="/app/regulatory/quarterly-report"
              render={(props) => (
                <QuarterlyReport
                  truepath="/app/regulatory/quarterly-report"
                  {...props}
                />
              )}
            />
            <Route
              path="/app/bluesheet/bluesheet"
              render={(props) => (
                <BlueSheet truepath="/app/bluesheet/bluesheet" {...props} />
              )}
            />
            <Route
              path="/app/bluesheet/large-trader-id"
              render={(props) => (
                <LargeTraderID
                  truepath="/app/bluesheet/large-trader-id"
                  {...props}
                />
              )}
            />
            <Route
              path="/app/cat/process-status"
              render={(props) => (
                <CatReport truepath="/app/cat/process-status" {...props} />
              )}
            />
            <Route
              path="/app/security-details/security-margin-rate/:search?"
              render={(props) => (
                <SecurityMarginRate
                  truepath="/app/security-details/security-margin-rate"
                  {...props}
                />
              )}
            />
            <Route
              path="/app/risk-manager/margin-requirement/:search?"
              render={(props) => (
                <MarginRequirement
                  truepath="/app/risk-manager/margin-requirement"
                  {...props}
                />
              )}
            />
            <Route
              path="/app/fee/taf-fee/:search?"
              render={(props) => (
                <TAFFee truepath="/app/fee/taf-fee" {...props} />
              )}
            />
            <Route
              path="/app/fee/reg-fee/:search?"
              render={(props) => (
                <REGFee truepath="/app/fee/reg-fee" {...props} />
              )}
            />
            <Route
              path="/app/fee/margin-interest-calc/:search?"
              render={(props) => (
                <MarginInterestCalc
                  truepath="/app/fee/margin-interest-calc"
                  {...props}
                />
              )}
            />
            <Route
              path="/app/withholding/dividend/:search?"
              render={(props) => (
                <TaxWithholdingDiv
                  truepath="/app/withholding/dividend"
                  {...props}
                />
              )}
            />
            <Route
              path="/app/misc/margin-interest-rate/:search?"
              render={(props) => (
                <MarginInterestRate
                  truepath="/app/misc/margin-interest-rate"
                  {...props}
                />
              )}
            />
            <Route
              path="/app/misc/credential/:search?"
              render={(props) => (
                <Credential truepath="/app/misc/credential" {...props} />
              )}
            />
            <Route
              path="/app/misc/commission/:search?"
              render={(props) => (
                <Commission truepath="/app/misc/commission" {...props} />
              )}
            />
            <Route
              path="/app/surveillance/setup/:search?"
              render={(props) => (
                <Setup truepath="/app/surveillance/setup" {...props} />
              )}
            />
            <Route
              path="/app/surveillance/report/:search?"
              render={(props) => (
                <SurveillanceReport
                  truepath="/app/surveillance/report"
                  {...props}
                />
              )}
            />
            <Route
              path="/app/surveillance/ofac/:search?"
              render={(props) => (
                <SurveillanceOfac
                  truepath="/app/surveillance/ofac"
                  {...props}
                />
              )}
            />
            <Route
              path="/app/trade-monitoring/parameter/:search?"
              render={(props) => (
                <Parameter
                  truepath="/app/trade-monitoring/parameter"
                  {...props}
                />
              )}
            />
            <Route
              path="/app/trade-monitoring/mini-manipulation/:search?"
              render={(props) => (
                <MiniManipulation
                  truepath="/app/trade-monitoring/mini-manipulation"
                  {...props}
                />
              )}
            />
            <Route
              path="/app/trade-monitoring/odd-lot/:search?"
              render={(props) => (
                <OddLot truepath="/app/trade-monitoring/odd-lot" {...props} />
              )}
            />
            <Route
              path="/app/trade-monitoring/wash-sale/:search?"
              render={(props) => (
                <WashSale
                  truepath="/app/trade-monitoring/wash-sale"
                  {...props}
                />
              )}
            />
            <Route
              path="/app/trade-monitoring/average-daily-volume/:search?"
              render={(props) => (
                <AverageDailyVolume
                  truepath="/app/trade-monitoring/average-daily-volume"
                  {...props}
                />
              )}
            />
            <Route
              path="/app/trade-monitoring/trade-participation/:search?"
              render={(props) => (
                <TradeParticipation
                  truepath="/app/trade-monitoring/trade-participation"
                  {...props}
                />
              )}
            />
            <Route
              path="/app/trade-monitoring/layering/:search?"
              render={(props) => (
                <Layering
                  truepath="/app/trade-monitoring/layering"
                  {...props}
                />
              )}
            />
            <Route
              path="/app/trade-monitoring/spoofing/:search?"
              render={(props) => (
                <Spoofing
                  truepath="/app/trade-monitoring/spoofing"
                  {...props}
                />
              )}
            />
            <Route
              path="/app/misc/tax-rate/:search?"
              render={(props) => (
                <TaxRate truepath="/app/misc/tax-rate" {...props} />
              )}
            />
            <Route
              path="/app/cash/balance/:search?"
              render={(props) => (
                <Balance truepath="/app/cash/balance" {...props} />
              )}
            />
            <Route
              path="/app/cash/trial-balance/:search?"
              render={(props) => (
                <TrialBalance truepath="/app/cash/trial-balance" {...props} />
              )}
            />
            <Route
              path="/app/security-details/price/:search?"
              render={(props) => (
                <Price truepath="/app/security-details/price" {...props} />
              )}
            />
            <Route
              path="/app/security-details/master-profile/:search?"
              render={(props) => (
                <SecurityMaster
                  truepath="/app/security-details/master-profile"
                  {...props}
                />
              )}
            />
            {/* <Route
              path="/app/security-details/equity/:search?"
              render={(props) => (
                <Equity truepath="/app/security-details/equity" {...props} />
              )}
            /> */}
            <Route
              path="/app/security-details/etf/:search?"
              render={(props) => (
                <Etf truepath="/app/security-details/etf" {...props} />
              )}
            />
            <Route
              path="/app/security-details/sll/:search?"
              render={(props) => (
                <Sll truepath="/app/security-details/sll" {...props} />
              )}
            />
            <Route
              path="/app/security-details/option-profile/:search?"
              render={(props) => (
                <OptionProfile
                  truepath="/app/security-details/option-profile"
                  {...props}
                />
              )}
            />
            <Route
              path="/app/corp-action/announcement"
              render={(props) => (
                <ReOrgAnnouncement
                  truepath="/app/corp-action/announcement"
                  {...props}
                />
              )}
            />
            <Route
              path="/app/corp-action/entitlement/:search?"
              render={(props) => (
                <Entitlement
                  truepath="/app/corp-action/entitlement"
                  {...props}
                />
              )}
            />
            <Route
              path="/app/corp-action/reconciliation-entitlement/:search?"
              render={(props) => (
                <EntitlementRecon
                  truepath="/app/corp-action/reconciliation-entitlement"
                  {...props}
                />
              )}
            />
            <Route
              path="/app/corp-action/reconciliation-reorg/:search?"
              render={(props) => (
                <ReorgRecon
                  truepath="/app/corp-action/reconciliation-reorg"
                  {...props}
                />
              )}
            />
            <Route
              path="/app/dtcc/open-item/:search?"
              render={(props) => (
                <OpenItem truepath="/app/dtcc/open-item" {...props} />
              )}
            />
            <Route
              path="/app/dtcc/data-file-transfer/:search?"
              render={(props) => (
                <DataFileTransfer
                  truepath="/app/dtcc/data-file-transfer"
                  {...props}
                />
              )}
            />
            <Route
              path="/app/dtcc/position/:search?"
              render={(props) => (
                <PositionDtcc truepath="/app/dtcc/position" {...props} />
              )}
            />
            <Route
              path="/app/dtcc/apibal/:search?"
              render={(props) => (
                <Apibal truepath="/app/dtcc/apibal" {...props} />
              )}
            />
            <Route
              path="/app/dtcc/received/:search?"
              render={(props) => (
                <Received truepath="/app/dtcc/received" {...props} />
              )}
            />
            <Route
              path="/app/cns/cns-vs-dtcc/:search?"
              render={(props) => (
                <CNSvsDTCC truepath="/app/cns/cns-vs-dtcc" {...props} />
              )}
            />
            <Route
              path="/app/cns/position-aging/:search?"
              render={(props) => (
                <PositionAging truepath="/app/cns/position-aging" {...props} />
              )}
            />
            <Route
              path="/app/cns/projection/:search?"
              render={(props) => (
                <Projection truepath="/app/cns/projection" {...props} />
              )}
            />
            <Route
              path="/app/cns/settlement-short-position/:search?"
              render={(props) => (
                <SettlementShortPosition
                  truepath="/app/cns/settlement-short-position"
                  {...props}
                />
              )}
            />
            <Route
              path="/app/cns/trade-summary/:search?"
              render={(props) => (
                <TradeSummary truepath="/app/cns/trade-summary" {...props} />
              )}
            />
            <Route
              path="/app/cns/account-summary/:search?"
              render={(props) => (
                <AccountSummary
                  truepath="/app/cns/account-summary"
                  {...props}
                />
              )}
            />
            <Route
              path="/app/occ/option/:search?"
              render={(props) => (
                <TradeReconOption truepath="/app/occ/option" {...props} />
              )}
            />

            <Route path="/app/trns/enter-trns" component={Transaction} />
            <Route
              path="/app/trns/activity/:search?"
              render={(props) => (
                <Activity truepath="/app/trns/activity" {...props} />
              )}
            />
            <Route
              path="/app/trns/fee/:search?"
              render={(props) => <Fee truepath="/app/trns/fee" {...props} />}
            />
            <Route
              path="/app/trns/fee-management/:search?"
              render={(props) => (
                <FeeManagement truepath="/app/trns/fee-management" {...props} />
              )}
            />
            <Route
              path="/app/trns/cancel-and-correct/:search?"
              render={(props) => (
                <Transaction
                  truepath="/app/trns/cancel-and-correct"
                  {...props}
                />
              )}
            />
            <Route
              path="/app/trns/process-pending/:search?"
              render={(props) => (
                <Transaction truepath="/app/trns/process-pending" {...props} />
              )}
            />
            <Route
              path="/app/trns/pending-trns/:search?"
              render={(props) => (
                <PendingTrns truepath="/app/trns/pending-trns" {...props} />
              )}
            />
            <Route
              path="/app/trns/execution-reconciliations/:search?"
              render={(props) => (
                <ExecutionRecon
                  truepath="/app/trns/execution-reconciliations"
                  {...props}
                />
              )}
            />
            <Route
              path="/app/trns/bank-transaction/:search?"
              render={(props) => (
                <BankTransaction
                  truepath="/app/trns/bank-transaction"
                  {...props}
                />
              )}
            />
            <Route
              path="/app/trns/nscc/:search?"
              render={(props) => <NSCC truepath="/app/trns/nscc" {...props} />}
            />
            <Route
              path="/app/position/position/:search?"
              render={(props) => (
                <Position truepath="/app/position/position" {...props} />
              )}
            />
            <Route
              path="/app/position/stock-borrow/:search?"
              render={(props) => (
                <StockBorrow truepath="/app/position/stock-borrow" {...props} />
              )}
            />
            <Route
              path="/app/position/option:search?"
              render={(props) => (
                <PositionOption truepath="/app/position/option" {...props} />
              )}
            />
            <Route
              path="/app/position/locate-ladder/:search?"
              render={(props) => (
                <LocateLadder
                  truepath="/app/position/locate-ladder"
                  {...props}
                />
              )}
            />
            <Route
              path="/app/acats/partial/:search?"
              render={(props) => (
                <Partial truepath="/app/acats/partial" {...props} />
              )}
            />
            <Route
              path="/app/acats/out/:search?"
              render={(props) => <Out truepath="/app/acats/out" {...props} />}
            />
            <Route
              path="/app/acats/multicycle/:search?"
              render={(props) => (
                <MultiCycleMro truepath="/app/acats/multicycle" {...props} />
              )}
            />
            <Route
              path="/app/acats/output-position/:search?"
              render={(props) => (
                <OutputPosition
                  truepath="/app/acats/output-position"
                  {...props}
                />
              )}
            />
            <Route
              path="/app/acats/output-settlement/:search?"
              render={(props) => (
                <OutputSettlement
                  truepath="/app/acats/output-settlement"
                  {...props}
                />
              )}
            />
            <Route
              path="/app/reports/profit-and-loss/:search?"
              render={(props) => (
                <ProfitAndLoss
                  truepath="/app/reports/profit-and-loss"
                  {...props}
                />
              )}
            />
            <Route
              path="/app/reports/monthly-statement/:search?"
              render={(props) => (
                <MonthlyStatement
                  truepath="/app/reports/monthly-statement"
                  {...props}
                />
              )}
            />
            <Route
              path="/app/reports/non-mro/:search?"
              render={(props) => (
                <NonMRO truepath="/app/reports/non-mro" {...props} />
              )}
            />

            <Route
              path="/app/misc/report-template/:search?"
              render={(props) => (
                <ReportTemplate
                  truepath="/app/misc/report-template"
                  {...props}
                />
              )}
            />
            <Route
              path="/app/misc/disclosure/:search?"
              render={(props) => (
                <StatementDisclosure
                  truepath="/app/misc/disclosure"
                  {...props}
                />
              )}
            />
            <Route
              path="/app/reports/daily-trade-confirm/:search?"
              render={(props) => (
                <DailyTradeConfirm
                  truepath="/app/reports/daily-trade-confirm"
                  {...props}
                />
              )}
            />
            <Route
              path="/app/account-setup/account-process/:search?"
              render={(props) => (
                <AccountProcess
                  truepath="/app/account-setup/account-process/"
                  {...props}
                />
              )}
            />
            <Route
              path="/app/cash/gl-report/:search?"
              render={(props) => (
                <GLReport truepath="/app/cash/gl-report" {...props} />
              )}
            />
            <Route path="/app/dashboard" component={Dashboard} />
            <Route path="/app/tables" component={Tables} />
            <Route path="/app/notifications" component={Notifications} />
            <Route
              path="/app/change-password/:search?"
              render={(props) => (
                <ChangePassword truepath="/app/change-password" {...props} />
              )}
            />
            <Route
              exact
              path="/app/ui"
              render={() => <Redirect to="/app/ui/icons" />}
            />
            <Route
              path="/app/stock-borrow/report/:search?"
              render={(props) => (
                <StockBorrowReport
                  truepath="/app/stock-borrow/report"
                  {...props}
                />
              )}
            />
            <Route
              path="/app/position/stock-record"
              render={(props) => (
                <StockRecord truepath="/app/position/stock-record" {...props} />
              )}
            />
            <Route
              path="/app/stock-borrow/charge/:search?"
              render={(props) => (
                <StockBorrowCharge
                  truepath="/app/stock-borrow/charge"
                  {...props}
                />
              )}
            />
            <Route
              path="/app/stock-borrow/rate/:search?"
              render={(props) => (
                <StockBorrowRate truepath="/app/stock-borrow/rate" {...props} />
              )}
            />
            <Route
              path="/app/trade-monitoring/concentration/:search?"
              render={(props) => (
                <Concentration
                  truepath="/app/trade-monitoring/concentration"
                  {...props}
                />
              )}
            />
            <Route
              path="/app/trade-monitoring/undue-concentration/:search?"
              render={(props) => (
                <UndueConcentration
                  truepath="/app/trade-monitoring/undue-concentration"
                  {...props}
                />
              )}
            />
            <Route
              path="/app/omnibus/apexpro-trns/:search?"
              render={(props) => (
                <ApexProTRNS truepath="/app/omnibus/apexpro-trns" {...props} />
              )}
            />
            <Route
              path="/app/omnibus/position-reconciliation/:search?"
              render={(props) => (
                <PositionRecon
                  truepath="/app/omnibus/position-reconciliation"
                  {...props}
                />
              )}
            />
            <Route
              path="/app/omnibus/balance-reconciliation/:search?"
              render={(props) => (
                <BalanceRecon
                  truepath="/app/omnibus/balance-reconciliation"
                  {...props}
                />
              )}
            />
            <Route
              path="/app/omnibus/trns-recon/:search?"
              render={(props) => (
                <TRNSRecon truepath="/app/omnibus/trns-recon" {...props} />
              )}
            />
            <Route
              path="/app/omnibus/apexpro-balance/:search?"
              render={(props) => (
                <ApexProBalance
                  truepath="/app/omnibus/apexpro-balance"
                  {...props}
                />
              )}
            />
            <Route
              path="/app/omnibus/apexpro-position/:search?"
              render={(props) => (
                <ApexProPosition
                  truepath="/app/omnibus/apexpro-position"
                  {...props}
                />
              )}
            />
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
              {rows.length !== 0 ? (
                <FieldDefinitionTableView
                  data={rows}
                ></FieldDefinitionTableView>
              ) : null}
            </Box>
          </div>
        </Fade>
      </Modal>
      {openSurveillanceModal && (
        <SurveillanceReportModal
          onClose={handleCloseSurveillance}
          open={openSurveillanceModal}
          value={rowsSurveillance}
        ></SurveillanceReportModal>
      )}
    </div>
  );
}

export default withRouter(Layout);
