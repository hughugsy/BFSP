import React from 'react';
import PropTypes from 'prop-types';


function OrPaperSheet(props) {
  const { onToggle } = props;
  return (
    <div>

    </div>
  );
}
/*
<Paper className={classes.root} elevation={4}>
        <Button variant="raised" color="primary" onClick={onToggle}>Post an Online Resource</Button>
      </Paper>
*/
OrPaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default OrPaperSheet;
