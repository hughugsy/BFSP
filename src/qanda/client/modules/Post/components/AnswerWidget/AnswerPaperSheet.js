import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
// import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
  }),
});

function AnswerPaperSheet(props) {
  const { classes, onToggle } = props;
  return (
    <div>
      <Paper className={classes.root} elevation={4}>
        <Button variant="raised" color="primary" onClick={onToggle}>Answer this question</Button>
      </Paper>
    </div>
  );
}

AnswerPaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default withStyles(styles)(AnswerPaperSheet);
