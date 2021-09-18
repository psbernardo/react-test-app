import React, { useState, useEffect } from 'react';
import { useHistory, NavLink } from 'react-router-dom';
import { getSystemDate } from '../../services/ProfileService';

import { AppBar, Toolbar, IconButton, Menu, MenuItem } from '@material-ui/core';
import {
  Menu as MenuIcon,
  Person as AccountIcon,
  ArrowBack as ArrowBackIcon,
} from '@material-ui/icons';
import LockIcon from '@material-ui/icons/Lock';
import classNames from 'classnames';
import { Typography } from '../Wrappers/Wrappers';
import NavigationMenuSelect from '../SearchBar/SearchBar';
import {
  useLayoutState,
  useLayoutDispatch,
  toggleSidebar,
} from '../../context/LayoutContext';

import Logo from '../../images/Sas-logo.png';
import HeaderMenu from './HeaderMenu';
import DateRangeRoundedIcon from '@material-ui/icons/DateRangeRounded';
import moment from 'moment/moment.js';
import useStyles from './styles';
import { useTheme } from '@material-ui/core/styles';

export default function Header(props) {
  const classes = useStyles();
  const history = useHistory();
  var theme = useTheme();

  // global
  const layoutState = useLayoutState();
  const layoutDispatch = useLayoutDispatch();

  //local
  var [isSmallScreen, setIsSmallScreen] = useState(false);

  const [profileMenu, setProfileMenu] = useState(null);
  const [systemDateValue, setSystemDateValue] = React.useState('');
  const [menuValue, setMenuValue] = React.useState('');

  useEffect(() => {
    (async () => {
      const systemDate = await getSystemDate();
      setSystemDateValue(systemDate);
    })();
  }, []);

  useEffect(function() {
    window.addEventListener('resize', handleWindowWidthChange);
    handleWindowWidthChange();
    return function cleanup() {
      window.removeEventListener('resize', handleWindowWidthChange);
    };
  });

  function handleWindowWidthChange() {
    var windowWidth = window.innerWidth;
    var breakpointWidth = theme.breakpoints.values.lg;
    setIsSmallScreen(windowWidth < breakpointWidth);
  }

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        {isSmallScreen && (
          <IconButton
            color="inherit"
            onClick={() => toggleSidebar(layoutDispatch)}
            className={classNames(
              classes.headerMenuButton,
              classes.headerMenuButtonCollapse
            )}
          >
            {layoutState.isSidebarOpened ? (
              <ArrowBackIcon
                classes={{
                  root: classNames(
                    classes.headerIcon,
                    classes.headerIconCollapse
                  ),
                }}
              />
            ) : (
              <MenuIcon
                classes={{
                  root: classNames(
                    classes.headerIcon,
                    classes.headerIconCollapse
                  ),
                }}
              />
            )}
          </IconButton>
        )}

        <NavLink to="/app/account-setup/user" style={{ marginRight: 30 }}>
          <img alt="SAS" className={classes.logoImage} src={Logo}></img>
        </NavLink>

        <div className={classes.grow}>
          {!isSmallScreen && (
            <React.Fragment>
              <HeaderMenu
                menu="Admin"
                subMenus={[
                  {
                    name: 'Account Setup',
                    pages: [
                      {
                        label: 'User',
                        link: '/app/account-setup/user',
                      },
                      {
                        label: 'Access',
                        link: '/app/account-setup/access',
                      },
                      {
                        label: 'Client Account',
                        link: '/app/account-setup/client-account',
                      },
                      {
                        label: 'Client Account Access',
                        link: '/app/account-setup/client-account-access',
                      },
                      {
                        label: 'GL Account',
                        link: '/app/account-setup/gl-account',
                      },
                      {
                        label: 'Account Process',
                        link: '/app/account-setup/account-process',
                      },
                    ],
                  },
                  {
                    name: 'Email Manager',
                    pages: [
                      {
                        label: 'Email Manager',
                        link: '/app/email-manager/email-manager',
                      },
                      {
                        label: 'Email Sender',
                        link: '/app/email-manager/email-sender',
                      },
                    ],
                  },
                  {
                    name: 'MISC',
                    pages: [
                      {
                        label: 'Margin Interest Rate',
                        link: '/app/misc/margin-interest-rate',
                      },
                      {
                        label: 'Recon Mapping',
                        link: '/app/misc/recon-mapping',
                      },
                      {
                        label: 'Tax Rate',
                        link: '/app/misc/tax-rate',
                      },
                      {
                        label: 'Disclosure',
                        link: '/app/misc/disclosure',
                      },
                      {
                        label: 'Report Template',
                        link: '/app/misc/report-template',
                      },
                      {
                        label: 'Credential',
                        link: '/app/misc/credential',
                      },
                      {
                        label: 'Commission',
                        link: '/app/misc/commission',
                      },
                    ],
                  },
                  {
                    name: 'System Profile',
                    pages: [
                      {
                        label: 'System Code',
                        link: '/app/system-profile/system-code',
                      },
                      {
                        label: 'System Number',
                        link: '/app/system-profile/system-number',
                      },
                      {
                        label: 'System Profile',
                        link: '/app/system-profile/system-profile',
                      },
                      {
                        label: 'System Process',
                        link: '/app/system-profile/system-process',
                      },
                      {
                        label: 'Calendar',
                        link: '/app/system-profile/calendar',
                      },
                      {
                        label: 'File Path',
                        link: '/app/system-profile/file-path',
                      },
                    ],
                  },
                  {
                    name: 'Security Details',
                    pages: [
                      {
                        label: 'Master Profile',
                        link: '/app/security-details/master-profile',
                      },
                      {
                        label: 'Option Profile',
                        // link: '/app/security-details/option-profile',
                      },
                      {
                        label: 'Price',
                        link: '/app/security-details/price',
                      },
                      // {
                      //   label: 'Equity',
                      //   link: '/app/security-details/equity',
                      // },
                      {
                        label: 'Security Margin Rate',
                        link: '/app/security-details/security-margin-rate',
                      },
                    ],
                  },
                  {
                    name: 'Integration',
                    pages: [
                      {
                        label: 'Fix Tag Setup',
                        link: '/app/integration/fix-tag-setup',
                      },
                      {
                        label: 'Fix Value',
                        link: '/app/integration/fix-value',
                      },
                      {
                        label: 'API Value',
                        link: '/app/integration/api-value',
                      },
                    ],
                  },
                  {
                    name: 'User Guide',
                    pages: [
                      {
                        label: 'User Guide',
                        link: '/app/system-profile/user-guide',
                      },
                      {
                        label: 'Data Dictionary',
                        link: '/app/user-guide/data-dictionary',
                      },
                      {
                        label: 'Question and Answer',
                        link: '/app/user-guide/question-and-answer',
                      },
                    ],
                  },
                ]}
              />
              <HeaderMenu
                menu="Balance"
                subMenus={[
                  {
                    name: 'Cash',
                    pages: [
                      {
                        label: 'Balance',
                        link: '/app/cash/balance',
                      },
                      // {
                      //   label: 'Balance Reconciliation',
                      //   link: '/app/cash/reconciliation-balance',
                      // },
                      {
                        label: 'Trial Balance',
                        link: '/app/cash/trial-balance',
                      },
                      {
                        label: 'GL Report',
                        link: '/app/cash/gl-report',
                      },
                      {
                        label: 'Balance Summary',
                        link: '/app/cash/balance-summary-report',
                      },
                    ],
                  },
                  {
                    name: 'Fee',
                    pages: [
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
                        label: 'Margin Interest Calc',
                        link: '/app/fee/margin-interest-calc',
                      },
                    ],
                  },
                  {
                    name: 'Withholding',
                    pages: [
                      {
                        label: 'Dividend',
                        link: '/app/withholding/dividend',
                      },
                    ],
                  },
                  {
                    name: 'Bank',
                    pages: [
                      {
                        label: 'ACH/Wire',
                        link: '/app/bank/ach-wire',
                      },
                      {
                        label: 'Digital Bank Request',
                        link: '/app/bank/digital-bank-request',
                      },
                      {
                        label: 'Bank Balance',
                        link: '/app/bank/bank-balance',
                      },
                      {
                        label: 'Bank Recon',
                        link: '/app/bank/bank-recon',
                      },
                      {
                        label: 'Bank Account',
                        link: '/app/bank/bank-account',
                      },
                      {
                        label: 'Bank Address',
                        link: '/app/bank/bank-address',
                      },
                      {
                        label: 'Wallet',
                        link: '/app/bank/wallet',
                      },
                    ],
                  },
                ]}
              />
              <HeaderMenu
                menu="Compliance"
                subMenus={[
                  {
                    name: 'BlueSheet',
                    pages: [
                      {
                        label: 'BlueSheet',
                        link: '/app/bluesheet/bluesheet',
                      },
                      {
                        label: 'Large Trader ID',
                        link: '/app/bluesheet/large-trader-id',
                      },
                    ],
                  },
                  {
                    name: 'CAT',
                    pages: [
                      {
                        label: 'Process Status',
                        link: '/app/cat/process-status',
                      },
                    ],
                  },
                  {
                    name: 'Regulatory',
                    pages: [
                      {
                        label: '15c3',
                        link: '/app/regulatory/15c3',
                      },
                      {
                        label: 'Monthly Report',
                        link: '/app/regulatory/monthly-report',
                      },
                      {
                        label: 'Quarterly Report',
                        link: '/app/regulatory/Quarterly-report',
                      },
                    ],
                  },
                  {
                    name: 'Risk Manager',
                    pages: [
                      {
                        label: 'Call Logs',
                        link: '/app/risk-manager/call-logs',
                      },
                      {
                        label: 'Buying Power',
                        link: '/app/risk-manager/buying-power',
                      },
                      // {
                      //   label: 'Day Trade Buying Power Used',
                      //   link: '/app/risk-manager/day-trade-buying-power-used',
                      // },
                      {
                        label: 'Margin Requirement',
                        link: '/app/risk-manager/margin-requirement',
                      },
                    ],
                  },
                  {
                    name: 'Segregation',
                    pages: [
                      {
                        label: 'Segregation',
                        link: '/app/segregation/segregation',
                      },
                      {
                        label: 'Priority',
                        link: '/app/segregation/priority',
                      },
                    ],
                  },
                ]}
              />
              <HeaderMenu
                menu="Position"
                subMenus={[
                  {
                    name: 'Position',
                    pages: [
                      {
                        label: 'Position',
                        link: '/app/position/position',
                      },
                      {
                        label: 'FINRA Short Position',
                        link: '/app/position/finra-short-position',
                      },
                      {
                        label: 'Stock Record',
                        link: '/app/position/stock-record',
                      },
                      {
                        label: 'Option',
                        link: '/app/position/option',
                      },
                    ],
                  },
                  {
                    name: 'Stock Borrow',
                    pages: [
                      {
                        label: 'Report',
                        link: '/app/stock-borrow/report',
                      },
                      {
                        label: 'Rate',
                        link: '/app/stock-borrow/rate',
                      },
                      {
                        label: 'Charge',
                        link: '/app/stock-borrow/charge',
                      },
                    ],
                  },
                  {
                    name: 'CNS',
                    pages: [
                      {
                        label: 'Account Summary',
                        link: '/app/cns/account-summary',
                      },
                      {
                        label: 'CNS vs DTCC',
                        link: '/app/cns/cns-vs-dtcc',
                      },
                      {
                        label: 'Position Aging',
                        link: '/app/cns/position-aging',
                      },
                      {
                        label: 'Projection',
                        link: '/app/cns/projection',
                      },
                      {
                        label: 'Settlement Short Position',
                        link: '/app/cns/settlement-short-position',
                      },
                      {
                        label: 'Trade Summary',
                        link: '/app/cns/trade-summary',
                      },
                    ],
                  },
                  {
                    name: 'Corp Action',
                    pages: [
                      {
                        label: 'Announcement',
                        link: '/app/corp-action/announcement',
                      },
                      {
                        label: 'Entitlement',
                        link: '/app/corp-action/entitlement',
                      },
                      // {
                      //   label: 'Entitlement Reconciliation',
                      //   link: '/app/corp-action/reconciliation-entitlement',
                      // },
                      {
                        label: 'Corp Action Recon',
                        link: '/app/corp-action/reconciliation-reorg',
                      },
                    ],
                  },
                  {
                    name: 'DTCC',
                    pages: [
                      {
                        label: 'Data File Transfer',
                        link: '/app/dtcc/data-file-transfer',
                      },
                      {
                        label: 'Open Item',
                        link: '/app/dtcc/open-item',
                      },
                      {
                        label: 'Position',
                        link: '/app/dtcc/position',
                      },
                      {
                        label: 'APIBAL',
                        link: '/app/dtcc/apibal',
                      },
                      {
                        label: 'Received',
                        link: '/app/dtcc/received',
                      },
                    ],
                  },
                  {
                    name: 'OCC',
                    pages: [
                      {
                        label: 'Exercise',
                        // link: '/app/dtcc/exercise',
                      },
                      {
                        label: 'Assignment',
                        // link: '/app/dtcc/assignment',
                      },
                      {
                        label: 'Expiration',
                        // link: '/app/dtcc/expiration',
                      },
                    ],
                  },
                  {
                    name: 'Physical Certificate',
                    pages: [
                      {
                        label: 'Physical Certificate',
                        link: '/app/physical-certificate/physical-certificate',
                      },
                      {
                        label: 'Transfer Agent',
                        link: '/app/physical-certificate/transfer-agent',
                      },
                    ],
                  },
                  {
                    name: 'ACATS',
                    pages: [
                      {
                        label: 'Incoming Full',
                        link: '/app/acats/full',
                      },
                      {
                        label: 'Incoming Partial',
                        link: '/app/acats/partial',
                      },
                      {
                        label: 'Outgoing Position',
                        link: '/app/acats/out',
                      },
                      {
                        label: 'Transaction',
                        link: '/app/acats/multicycle',
                      },
                      {
                        label: 'Position',
                        link: '/app/acats/output-position',
                      },
                      {
                        label: 'Settlement',
                        link: '/app/acats/output-settlement',
                      },
                    ],
                  },
                ]}
              />
              <HeaderMenu
                menu="Surveillance"
                subMenus={[
                  {
                    name: 'Surveillance',
                    pages: [
                      {
                        label: 'Setup',
                        link: '/app/surveillance/setup',
                      },
                      {
                        label: 'Report',
                        link: '/app/surveillance/report',
                      },
                      {
                        label: 'OFAC',
                        link: '/app/surveillance/ofac',
                      },
                    ],
                  },
                  {
                    name: 'Trade Monitoring',
                    pages: [
                      {
                        label: 'Parameter',
                        link: '/app/trade-monitoring/parameter',
                      },
                      {
                        label: 'Mini Manipulation',
                        link: '/app/trade-monitoring/mini-manipulation',
                      },
                      {
                        label: 'Odd Lot',
                        link: '/app/trade-monitoring/odd-lot',
                      },
                      {
                        label: 'Wash Sale',
                        link: '/app/trade-monitoring/wash-sale',
                      },
                      {
                        label: 'Average Daily Volume',
                        link: '/app/trade-monitoring/average-daily-volume',
                      },
                      {
                        label: 'Trade Participation',
                        link: '/app/trade-monitoring/trade-participation',
                      },
                      {
                        label: 'Concentration',
                        link: '/app/trade-monitoring/concentration',
                      },
                      {
                        label: 'Undue Concentration',
                        link: '/app/trade-monitoring/undue-concentration',
                      },
                      {
                        label: 'Layering',
                        link: '/app/trade-monitoring/layering',
                      },
                      {
                        label: 'Spoofing',
                        link: '/app/trade-monitoring/spoofing',
                      },
                    ],
                  },
                ]}
              />
              <HeaderMenu
                menu="Transaction"
                subMenus={[
                  {
                    name: 'TRNS',
                    pages: [
                      {
                        label: 'Activity',
                        link: '/app/trns/activity',
                      },
                      {
                        label: 'Day TRD',
                        //   link: '/app/trns/day-trd'
                      },
                      {
                        label: 'Enter TRNS',
                        link: '/app/trns/enter-trns/',
                      },
                      { type: 'link', label: 'NSCC', link: '/app/trns/nscc' },
                      {
                        label: 'Pending TRNS',
                        link: '/app/trns/pending-trns/',
                      },
                      {
                        label: 'Execution Reconciliations',
                        link: '/app/trns/execution-reconciliations',
                      },
                      {
                        label: 'When Issued',
                        // link: '/app/trns/when-issued'
                      },
                      {
                        label: 'Bank Transaction',
                        link: '/app/trns/bank-transaction',
                      },
                    ],
                  },
                  {
                    name: 'Reports',
                    pages: [
                      {
                        label: 'Profit and Loss',
                        link: '/app/reports/profit-and-loss',
                      },
                      {
                        label: 'Daily Trade Confirm',
                        link: '/app/reports/daily-trade-confirm',
                      },
                      {
                        label: 'Monthly Statement',
                        link: '/app/reports/monthly-statement',
                      },
                      {
                        label: 'Non MRO',
                        link: '/app/reports/non-mro',
                      },
                    ],
                  },
                  {
                    name: 'Position',
                    pages: [
                      {
                        label: 'Locate Ladder',
                        link: '/app/position/locate-ladder',
                      },
                    ],
                  },
                  {
                    name: 'Stock Borrow/Loan',
                    pages: [
                      {
                        label: 'Inventory',
                        // link: '/app/stock-borrow/inventory',
                      },
                      {
                        label: 'Request',
                        // link: '/app/stock-borrow/request',
                      },
                      {
                        label: 'Short Sale Prohibited',
                        // link: '/app/stock-borrow/short-sale-prohibited',
                      },
                      {
                        label: 'Stock Loan List',
                        // link: '/app/stock-borrow/stock-loan-list',
                      },
                      {
                        label: 'Stock Activity',
                        // link: '/app/stock-borrow/stock-activity',
                      },
                      {
                        label: 'Stock Borrow Allocation',
                        // link: '/app/stock-borrow/stock-borrow-allocation',
                      },
                    ],
                  },
                  {
                    name: 'Omnibus',
                    pages: [
                      {
                        label: 'ApexPro TRNS',
                        link: '/app/omnibus/apexpro-trns',
                      },
                      {
                        label: 'ApexPro Position',
                        link: '/app/omnibus/apexpro-position',
                      },
                      {
                        label: 'ApexPro Balance',
                        link: '/app/omnibus/apexpro-balance',
                      },
                      {
                        label: 'TRNS Recon',
                        link: '/app/omnibus/trns-recon',
                      },
                      {
                        label: 'Position Recon',
                        link: '/app/omnibus/position-reconciliation',
                      },
                      {
                        label: 'Balance Recon',
                        link: '/app/omnibus/balance-reconciliation',
                      },
                    ],
                  },
                ]}
              />
            </React.Fragment>
          )}
        </div>
        <div style={{ width: 250, marginRight: 15 }}>
          <NavigationMenuSelect
            labelid="menu"
            label="Navigation Menu"
            value={menuValue}
            onChange={(e) => setMenuValue(e.target.value)}
            setNewValue={(event, newValue) => {
              if (newValue) {
                setMenuValue(newValue.link);

                const currentPath = window.location.pathname;
                history.push(newValue.link ? newValue.link : currentPath);
              } else {
                setMenuValue('');
                return;
              }
            }}
          />
        </div>
        <div style={{ marginRight: 10 }}>
          <DateRangeRoundedIcon />
          <label style={{ position: 'relative', top: -5, marginLeft: 5 }}>
            {moment(systemDateValue).format('MM/DD/YYYY')}
          </label>
        </div>
        <IconButton
          aria-haspopup="true"
          color="inherit"
          className={classes.headerMenuButton}
          aria-controls="profile-menu"
          onClick={(e) => setProfileMenu(e.currentTarget)}
        >
          <AccountIcon classes={{ root: classes.headerIcon }} />
        </IconButton>

        <Menu
          id="profile-menu"
          open={Boolean(profileMenu)}
          anchorEl={profileMenu}
          onClose={() => setProfileMenu(null)}
          className={classes.headerMenu}
          classes={{ paper: classes.profileMenu }}
          disableAutoFocusItem
        >
          <div className={classes.profileMenuUser}>
            <Typography variant="h6">{props.user.Username}</Typography>
          </div>
          <MenuItem
            onClick={() => {
              history.push('/app/change-password/');
            }}
            className={classNames(
              classes.profileMenuItem,
              classes.headerMenuItem
            )}
          >
            <LockIcon className={classes.profileMenuLink} /> Change Password
          </MenuItem>
          <MenuItem
            onClick={() => {
              history.push('/logout');
            }}
            className={classNames(
              classes.profileMenuItem,
              classes.headerMenuItem
            )}
          >
            <AccountIcon className={classes.profileMenuLink} /> Sign Out
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}
