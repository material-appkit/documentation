import PropTypes from 'prop-types';
import React, { useState } from 'react';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Stepper from '@material-ui/core/Stepper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';

const styles = makeStyles((theme) => ({
  dialogTitle: {
    alignItems: 'center',
    display: 'flex',
  },

  titleHeading: {
    flex: 1,
  },

  dialogActions: {
    padding: theme.spacing(1, 2),
  },

  stepper: {
    padding: theme.spacing(2, 0),
  },
}));

function WizardDialog(props) {
  const classes = styles();

  const {
    onDismiss,
    steps,
    title,
    ...dialogProps
  } = props;

  const [activeStep, setActiveStep] = useState(0);

  const activeStepConfig = steps[activeStep];

  if (activeStepConfig.dialogProps) {
    Object.assign(dialogProps, activeStepConfig.dialogProps);
  }

  return (
    <Dialog {...dialogProps}>
      <DialogTitle
        className={classes.dialogTitle}
        disableTypography
      >
        <Typography variant="h2" className={classes.titleHeading}>
          {title}
        </Typography>
        <IconButton
          edge="end"
          onClick={() => onDismiss(null)}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent dividers>
        <Stepper
          activeStep={activeStep}
          alternativeLabel
          className={classes.stepper}
        >
          {steps.map((step) => (
            <Step key={step.title}>
              <StepLabel>{step.title}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </DialogContent>

      <DialogActions className={classes.dialogActions}>
      </DialogActions>
    </Dialog>
  );
}

WizardDialog.propTypes = {
  onDismiss: PropTypes.func.isRequired,
  steps: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};

export default WizardDialog;
