import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import authSvc from 'services/AuthService';

const useStyles = makeStyles((theme) => ({
  button: {
    color: 'white',
    padding: '20px 15px',
  },
  headerMenu: {
    display: 'inline-block',
    padding: 0,
  },
  subLabel: {
    color: '#3f6be1',
    fontSize: 16,
    fontWeight: 'bold',
    padding: '0 16px',
    marginBottom: 10,
    opacity: '1 !important',
  },
  nested: {
    fontSize: 15,
    padding: '3px 16px',
    color: '#313338',
  },
  menuListContainer: {
    padding: '22px 0px 22px 15px',
  },
}));

export default function HeaderMenu(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const history = useHistory();

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  // const handleNavigate = (event, page) => {
  //   history.push(page.link);
  //   handleClose(event);
  // };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  const isDisabled = (sub, page) => {
    const key = (props.menu + sub + page).replace(/ /g, '');
    const access = authSvc.getUserAccess();
    return access[key] ? false : true;
  };

  return (
    <div className={classes.headerMenu}>
      <Button
        className={classes.button}
        ref={anchorRef}
        aria-controls={open ? 'menu-list-grow' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        {props.menu}
      </Button>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        placement={'bottom-start'}
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  className={classes.menuListContainer}
                  autoFocusItem={open}
                  id="menu-list-grow"
                  onKeyDown={handleListKeyDown}
                >
                  {props.subMenus.map((sub, subIndex) => {
                    // hide the MenuList if all link is undefined
                    if (sub.pages.every((p) => p.link === undefined)) {
                      return '';
                    }

                    return (
                      <div
                        style={{
                          display: 'inline-block',
                          verticalAlign: 'top',
                          marginRight: 20,
                        }}
                        key={subIndex}
                      >
                        <MenuItem
                          className={classes.subLabel}
                          key={'s' + subIndex}
                          disabled={true}
                        >
                          {sub.name}
                        </MenuItem>
                        {sub.pages.map((page, pageIndex) => {
                          // hide the MenuItem if link is undefined
                          if (page.link === undefined) {
                            return '';
                          }

                          return (
                            <MenuItem
                              disabled={isDisabled(sub.name, page.label)}
                              selected={window.location.pathname === page.link}
                              key={'p' + pageIndex}
                              className={classes.nested}
                            >
                              <Link
                                style={{
                                  textDecoration: 'none',
                                  color: 'black',
                                }}
                                onClick={(event) => handleClose(event)}
                                to={page.link}
                              >
                                {' '}
                                {page.label}
                              </Link>
                            </MenuItem>
                          );
                        })}
                      </div>
                    );
                  })}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
}
