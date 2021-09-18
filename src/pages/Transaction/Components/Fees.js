import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Divider from '@material-ui/core/Divider';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { formatCurrency } from 'lib/fmt';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '40px',
    zIndex: 1,
    position: 'relative',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    marginRight: '20px',
    minWidth: '80px',
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
    textAlign: 'right',
  },

  details: {
    alignItems: 'center',
  },
}));

export default function Fees(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = () => (event, isExpanded) => {
    setExpanded(isExpanded ? true : false);
  };

  const handleClickAway = () => {
    setExpanded(false);
  };

  return (
    <div className={classes.root}>
      <ClickAwayListener onClickAway={handleClickAway}>
        <Accordion
          style={{
            WebkitBoxShadow: 'none',
            borderBottom: '1px solid grey',
            boxShadow: '1px',
            borderRadius: '0',
          }}
          onChange={handleChange()}
          expanded={expanded}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1c-content"
          >
            <div className={classes.heading}>Total Fees</div>
            <div className={classes.secondaryHeading}>
              {formatCurrency('' + (props.value ? props.value : 0))}
            </div>
          </AccordionSummary>
          <Divider />
          <div
            style={{
              overflowY: 'scroll',
              maxHeight: '300px',
            }}
          >
            {props.children}
          </div>
        </Accordion>
      </ClickAwayListener>
    </div>
  );
}
