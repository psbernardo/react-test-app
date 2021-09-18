import React, { useState, useEffect } from 'react';
import { Drawer, IconButton, List } from '@material-ui/core';
import {
  SupervisorAccount as SupervisorAccountIcon,
  ArrowBack as ArrowBackIcon,
  HowToVote as HowToVoteIcon,
  Iso as IsoIcon,
  TrendingUp as SecurityIcon,
  VerifiedUser as VerifiedUserIcon,
} from '@material-ui/icons';
import { useTheme } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import classNames from 'classnames';

// styles
import useStyles from './styles';

// components
import SidebarLink from './components/SidebarLink/SidebarLink';

// context
import {
  useLayoutState,
  useLayoutDispatch,
  toggleSidebar,
} from '../../context/LayoutContext';

const structure = [
  {
    id: 0,
    label: 'Admin',
    link: '/app/home',
    icon: <SupervisorAccountIcon />,
    children: [
      {
        type: 'sub label',
        label: 'Account Setup',
      },
      {
        type: 'link',
        label: 'User',
        link: '/app/account-setup/user',
      },
      {
        type: 'link',
        label: 'Access',
        link: '/app/account-setup/access',
      },
      {
        type: 'link',
        label: 'Client Account',
        link: '/app/account-setup/client-account',
      },
      {
        type: 'link',
        label: 'GL Account',
        link: '/app/account-setup/gl-account',
      },
      {
        type: 'sub label',
        label: 'Email Manager',
      },
      {
        type: 'link',
        label: 'Email Manager',
        link: '/app/email-manager/email-manager',
      },
      {
        type: 'link',
        label: 'Email Sender',
        link: '/app/email-manager/email-sender',
      },
      {
        type: 'sub label',
        label: 'MISC',
      },
      {
        type: 'link',
        label: 'Margin Interest Rate',
        link: '/app/misc/margin-interest-rate',
      },
      {
        type: 'link',
        label: 'Surveillance Setup',
        link: '/app/surveillance/setup',
      },
      {
        type: 'link',
        label: 'Surveillance Report',
        link: '/app/surveillance/report',
      },
      {
        type: 'link',
        label: 'OFAC',
        link: '/app/surveillance/ofac',
      },
      {
        type: 'link',
        label: 'Parameter',
        link: '/app/trade-monitoring/parameter',
      },
      {
        type: 'link',
        label: 'Mini Manipulation',
        link: '/app/trade-monitoring/mini-manipulation',
      },
      {
        type: 'link',
        label: 'Odd Lot',
        link: '/app/trade-monitoring/odd-lot',
      },
      {
        type: 'link',
        label: 'Wash Sale',
        link: '/app/trade-monitoring/wash-sale',
      },
      {
        type: 'link',
        label: 'Average Daily Volume',
        link: '/app/trade-monitoring/average-daily-volume',
      },
      {
        type: 'link',
        label: 'Trade Participation',
        link: '/app/trade-monitoring/trade-participation',
      },
      {
        type: 'link',
        label: 'Concentration',
        link: '/app/trade-monitoring/concentration',
      },
      {
        type: 'link',
        label: 'Undue Concentration',
        link: '/app/trade-monitoring/undue-concentration',
      },
      {
        type: 'link',
        label: 'Layering',
        link: '/app/trade-monitoring/layering',
      },
      {
        type: 'link',
        label: 'Spoofing',
        link: '/app/trade-monitoring/spoofing',
      },
      {
        type: 'link',
        label: 'Disclosure',
        // link: '/app/misc/disclosure',
      },
      {
        type: 'link',
        label: 'Tax Rate',
        link: '/app/misc/tax-rate',
      },
      {
        type: 'link',
        label: 'Credential',
        link: '/app/misc/credential',
      },
      {
        type: 'sub label',
        label: 'System Profile',
      },
      {
        type: 'link',
        label: 'System Code',
        link: '/app/system-profile/system-code',
      },
      {
        type: 'link',
        label: 'System Number',
        link: '/app/system-profile/system-number',
      },
      {
        type: 'link',
        label: 'System Profile',
        link: '/app/system-profile/system-profile',
      },
      {
        type: 'link',
        label: 'System Process',
        link: '/app/system-profile/system-process',
      },
      {
        type: 'link',
        label: 'Calendar',
        link: '/app/system-profile/calendar',
      },
      {
        type: 'link',
        label: 'File Path',
        link: '/app/system-profile/file-path',
      },
      {
        type: 'sub label',
        label: 'Security Details',
      },
      {
        type: 'link',
        label: 'Security Margin Rate',
        link: '/app/security-details/security-margin-rate',
      },
      {
        type: 'link',
        label: 'Master Profile',
        link: '/app/system-profile/master-profile',
      },
      // {
      //   type: 'link',
      //   label: 'Equity',
      //   link: '/app/system-profile/equity',
      // },
      {
        type: 'link',
        label: 'Price',
        link: '/app/system-profile/price',
      },
      {
        type: 'link',
        label: 'Option Profile',
        link: '/app/system-profile/option-profile',
      },
      {
        type: 'sub label',
        label: 'Integration',
      },
      {
        type: 'link',
        label: 'Fix Tag Setup',
        link: '/app/integration/fix-tag-setup',
      },
      {
        type: 'link',
        label: 'Fix Value',
        link: '/app/integration/fix-value',
      },
      {
        type: 'link',
        label: 'API Value',
        link: '/app/integration/api-value',
      },
      {
        type: 'sub label',
        label: 'User Guide',
      },
      {
        type: 'link',
        label: 'User Guide',
        link: '/app/system-profile/user-guide',
      },
      {
        type: 'link',
        label: 'Data Dictionary',
        link: '/app/user-guide/data-dictionary',
      },
    ],
  },
  {
    id: 1,
    label: 'Balance',
    link: '/app/home',
    icon: <IsoIcon />,
    children: [
      { type: 'sub label', label: 'Cash', link: '/app/cash' },
      { type: 'link', label: 'Balance', link: '/app/cash/balance' },
      {
        type: 'link',
        label: 'Balance Reconciliation',
        link: '/app/cash/reconciliation-balance',
      },
      {
        type: 'link',
        label: 'Trial Balance',
        link: '/app/cash/trial-balance',
      },
      { type: 'link', label: 'GL Report', link: '/app/cash/gl-report' },
      {
        type: 'link',
        label: 'Balance Summary',
        link: '/app/cash/balance-summary-report',
      },
      {
        type: 'sub label',
        label: 'Fee',
        link: '/app/fee',
      },
      {
        type: 'link',
        label: 'Reg Fee',
        link: '/app/fee/reg-fee',
      },
      {
        type: 'link',
        label: 'Taf Fee',
        link: '/app/fee/taf-fee',
      },
      {
        type: 'sub label',
        label: 'Withholding',
        link: '/app/withholding',
      },
      {
        type: 'link',
        label: 'Dividend',
        link: '/app/withholding/dividend',
      },
      { type: 'sub label', label: 'Bank', link: '/app/cash' },
      { type: 'link', label: 'ACH\\Wire', link: '/app/bank/ach-wire' },
      {
        type: 'link',
        label: 'Digital Bank Request',
        link: '/app/bank/dc-request',
      },
      {
        type: 'link',
        label: 'Bank Balance',
        link: '/app/bank/bank-balance',
      },
      {
        type: 'link',
        label: 'Bank Recon',
        link: '/app/bank/bank-recon',
      },
      {
        type: 'link',
        label: 'Bank Account',
        link: '/app/bank/bank-account',
      },
      {
        type: 'link',
        label: 'Bank Address',
        link: '/app/bank/bank-address',
      },
      {
        type: 'link',
        label: 'Wallet',
        link: '/app/bank/wallet',
      },
    ],
  },
  {
    id: 2,
    label: 'Compliance',
    link: '/app/home',
    icon: <VerifiedUserIcon />,
    children: [
      { type: 'sub label', label: 'BlueSheet' },
      {
        type: 'link',
        label: 'BlueSheet',
        link: '/app/bluesheet/bluesheet',
      },
      {
        type: 'link',
        label: 'Large Trader ID',
        link: '/app/bluesheet/large-trader-id',
      },
      { type: 'sub label', label: 'OATS', link: '/app/oats' },
      {
        type: 'link',
        label: 'Process Status',
        link: '/app/oats/process-status',
      },
      { type: 'sub label', label: 'Regulatory' },
      {
        type: 'link',
        label: '15c3',
        link: '/app/regulatory/reserve15c3',
      },
      {
        type: 'link',
        label: 'Monthly Report',
        link: '/app/regulatory/monthly-report',
      },
      {
        type: 'link',
        label: 'Quarterly Report',
        link: '/app/regulatory/Quarterly-report',
      },
      { type: 'sub label', label: 'Risk Manager' },
      {
        type: 'link',
        label: 'Call Logs',
        link: '/app/risk-manager/call-log',
      },
      {
        type: 'link',
        label: 'Buying Power',
        link: '/app/risk-manager/buying-power',
      },
      // {
      //   type: 'link',
      //   label: 'Day Trade Buying Power Used',
      //   link: '/app/risk-manager/day-trade-buying-power-used',
      // },
      {
        type: 'link',
        label: 'Margin Requirement',
        link: '/app/risk-manager/margin-requirement',
      },
      { type: 'sub label', label: 'Segregation' },
      {
        type: 'link',
        label: 'Segregation',
        link: '/app/segregation/segregation',
      },
      {
        type: 'link',
        label: 'Priority',
        link: '/app/segregation/priority',
      },
      // {
      //   type: 'link',
      //   label: 'Reserve Calc',
      //   link: '/app/calculation/reserve-calc',
      // },
    ],
  },
  {
    id: 3,
    label: 'Position',
    link: '/app/home',
    icon: <SecurityIcon />,
    children: [
      {
        type: 'sub label',
        label: 'Position',
      },
      {
        type: 'link',
        label: 'Position',
        link: '/app/position/position',
      },
      {
        type: 'link',
        label: 'FINRA Short Position',
        link: '/app/position/finra-short-position',
      },
      {
        type: 'link',
        label: 'Stock Record',
        link: '/app/position/stock-record',
      },
      {
        type: 'link',
        label: 'Option',
        link: '/app/position/option',
      },
      {
        type: 'link',
        label: 'Report',
        link: '/app/stock-borrow/report',
      },
      {
        type: 'link',
        label: 'Rate',
        link: '/app/stock-borrow/rate',
      },
      // {
      //   type: 'link',
      //   label: 'Transfer Input',
      //   link: '/app/cns/transfer-input',
      // },
      {
        type: 'sub label',
        label: 'CNS',
      },

      {
        type: 'link',
        label: 'CNS vs DTCC',
        link: '/app/cns/cns-vs-dtcc',
      },
      {
        type: 'link',
        label: 'Position Aging',
        link: '/app/cns/position-aging',
      },
      {
        type: 'link',
        label: 'Projection',
        // link: '/app/cns/projection',
      },
      {
        type: 'link',
        label: 'Settlement Short Position',
        link: '/app/cns/settlement-short-position',
      },
      {
        type: 'link',
        label: 'Trade Summary',
        link: '/app/cns/trade-summary',
      },
      {
        type: 'sub label',
        label: 'Corp Action',
      },
      {
        type: 'link',
        label: 'Announcement',
        link: '/app/corp-action/announcement',
      },
      {
        type: 'link',
        label: 'Entitlement',
        link: '/app/corp-action/entitlement',
      },
      // {
      //   type: 'link',
      //   label: 'Entitlement Reconciliation',
      //   link: '/app/corp-action/reconciliation-entitlement',
      // },
      {
        type: 'link',
        label: 'Corp Action Recon',
        link: '/app/corp-action/reconciliation-reorg',
      },
      // {
      //   type: 'link',
      //   label: 'Corp Action Recon',
      //   // link: '/app/corp-action/corp-action-recon',
      // },
      {
        type: 'sub label',
        label: 'DTCC',
      },
      {
        type: 'link',
        label: 'Data File Transfer',
        link: '/app/dtcc/data-file-transfer',
      },
      {
        type: 'link',
        label: 'Open Item',
        link: '/app/dtcc/open-item',
      },
      {
        type: 'link',
        label: 'Position',
        link: '/app/dtcc/position',
      },
      {
        type: 'link',
        label: 'APIBAL',
        link: '/app/dtcc/apibal',
      },
      {
        type: 'link',
        label: 'Received',
        link: '/app/dtcc/received',
      },
      {
        type: 'sub label',
        label: 'OCC',
      },
      {
        type: 'link',
        label: 'Option',
        link: '/app/occ/option',
      },
      {
        type: 'link',
        label: 'Exercise',
        link: '/app/occ/exercise',
      },
      {
        type: 'link',
        label: 'Assignment',
        link: '/app/occ/assignment',
      },
      {
        type: 'link',
        label: 'Expiration',
        link: '/app/occ/expiration',
      },
      {
        type: 'sub label',
        label: 'Physical Certificate',
      },
      {
        type: 'link',
        label: 'Physical Certificate',
        link: '/app/physical-certificate/physical-certificate',
      },
      {
        type: 'link',
        label: 'Transfer Agent',
        link: '/app/physical-certificate/transfer-agent',
      },
      {
        type: 'sub label',
        label: 'ACATS',
      },
      {
        type: 'link',
        label: 'Incoming Full',
        link: '/app/acats/full',
      },
      {
        type: 'link',
        label: 'Incoming Partial',
        link: '/app/acats/partial',
      },
      {
        type: 'link',
        label: 'Outgoing Position',
        link: '/app/acats/out',
      },
      {
        type: 'link',
        label: 'Transaction',
        link: '/app/acats/multicycle',
      },
      {
        type: 'link',
        label: 'Position',
        link: '/app/acats/output-position',
      },
      {
        type: 'link',
        label: 'Settlement',
        link: '/app/acats/output-settlement',
      },
      // { type: 'link', label: 'Price', link: '/app/security-details/price' },
      // {
      //   type: 'link',
      //   label: 'ETF',
      //   link: '/app/security-details/etf',
      // },
      // {
      //   type: 'link',
      //   label: 'SLL',
      //   link: '/app/security-details/sll',
      // },
    ],
  },
  {
    id: 4,
    label: 'Transaction',
    link: '/app/home',
    icon: <HowToVoteIcon />,
    children: [
      {
        type: 'sub label',
        label: 'TRNS',
      },
      { type: 'link', label: 'Activity', link: '/app/trns/activity' },
      { type: 'link', label: 'Day TRD', link: '/app/trns/day-trd' },
      { type: 'link', label: 'Enter TRNS', link: '/app/trns/enter-trns/' },
      { type: 'link', label: 'NSCC', link: '/app/trns/nscc' },
      { type: 'link', label: 'Pending TRNS', link: '/app/trns/pending-trns/' },
      { type: 'link', label: 'When Issued', link: '/app/trns/when-issued' },
      {
        type: 'link',
        label: 'Execution Reconciliations',
        link: '/app/trns/reconciliations-execution',
      },
      {
        type: 'link',
        label: 'Bank Transaction',
        link: '/app/trns/bank-transaction',
      },
      // { type: 'link', label: 'Fee', link: '/app/trns/fee' },
      // {
      //   type: 'link',
      //   label: 'Fee Management',
      //   link: '/app/trns/fee-management',
      // },
      {
        type: 'sub label',
        label: 'Report',
      },
      {
        type: 'link',
        label: 'Profit and Loss',
        link: '/app/report/profit-and-loss',
      },
      {
        type: 'link',
        label: 'Daily Trade Confirm',
        link: '/app/report/daily-trade-confirm',
      },
      {
        type: 'link',
        label: 'Monthly Statement',
        link: '/app/report/monthly-statement',
      },
      {
        type: 'link',
        label: 'Report Template',
        link: '/app/report/report-template',
      },
      {
        type: 'link',
        label: 'Statement Disclosure',
        link: '/app/report/statement-disclosure',
      },
      {
        type: 'sub label',
        label: 'Stock Borrow/Loan',
      },
      {
        type: 'link',
        label: 'Inventory',
        // link: '/app/stock-borrow/inventory',
      },
      {
        type: 'link',
        label: 'Request',
        // link: '/app/stock-borrow/request',
      },
      {
        type: 'link',
        label: 'Short Sale Prohibited',
        // link: '/app/stock-borrow/short-sale-prohibited',
      },
      {
        type: 'link',
        label: 'Stock Loan List',
        // link: '/app/stock-borrow/stock-loan-list',
      },
      {
        type: 'link',
        label: 'Stock Activity',
        // link: '/app/stock-borrow/stock-activity',
      },
      {
        type: 'link',
        label: 'Stock Borrow Allocation',
        // link: '/app/stock-borrow/stock-borrow-allocation',
      },
      {
        type: 'link',
        label: 'Locate Ladder',
        link: '/app/report/locate-ladder',
      },
      {
        type: 'sub label',
        label: 'Omnibus',
      },
      {
        type: 'link',
        label: 'ApexPro TRNS',
        link: '/app/omnibus/apexpro-trns',
      },
      {
        type: 'link',
        label: 'ApexPro Balance',
        link: '/app/omnibus/apexpro-balance',
      },
      {
        type: 'link',
        label: 'ApexPro Position',
        link: '/app/omnibus/apexpro-position',
      },
      {
        type: 'link',
        label: 'TRNS Recon',
        link: '/app/omnibus/trns-recon',
      },
      {
        type: 'link',
        label: 'Position Reconciliation',
        link: '/app/omnibus/position-reconciliation',
      },
      {
        type: 'link',
        label: 'Balance Recon',
        link: '/app/omnibus/balance-reconciliation',
      },
    ],
  },
];

function Sidebar({ location }) {
  var classes = useStyles();
  var theme = useTheme();

  // global
  var { isSidebarOpened } = useLayoutState();
  var layoutDispatch = useLayoutDispatch();

  // local
  var [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(function() {
    window.addEventListener('resize', handleWindowWidthChange);
    handleWindowWidthChange();
    return function cleanup() {
      window.removeEventListener('resize', handleWindowWidthChange);
    };
  });

  if (!isSmallScreen) {
    return <React.Fragment></React.Fragment>;
  }

  return (
    <Drawer
      variant="temporary"
      className={classNames(classes.drawer, {
        [classes.drawerOpen]: isSidebarOpened,
        [classes.drawerClose]: !isSidebarOpened,
      })}
      classes={{
        paper: classNames({
          [classes.drawerOpen]: isSidebarOpened,
          [classes.drawerClose]: !isSidebarOpened,
        }),
      }}
      open={isSidebarOpened}
    >
      <div className={classes.toolbar} />
      <div className={classes.mobileBackButton}>
        <IconButton onClick={() => toggleSidebar(layoutDispatch)}>
          <ArrowBackIcon
            classes={{
              root: classNames(classes.headerIcon, classes.headerIconCollapse),
            }}
          />
        </IconButton>
      </div>
      <List className={classes.sidebarList}>
        {structure.map((link) => (
          <SidebarLink
            key={link.id}
            location={location}
            isSidebarOpened={isSidebarOpened}
            {...link}
          />
        ))}
      </List>
    </Drawer>
  );

  // ##################################################################
  function handleWindowWidthChange() {
    var windowWidth = window.innerWidth;
    var breakpointWidth = theme.breakpoints.values.lg;
    setIsSmallScreen(windowWidth < breakpointWidth);
  }
}

export default withRouter(Sidebar);
