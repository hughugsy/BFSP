import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import './OnlineResourcesWidget.css';


function OrPaperSheet(props) {
  const { onToggle } = props;
  return (
    <div className="container">
      <table className="table table-bordered" style={{ width: '60%' }}>
        <thead >
          <tr >
            <th style={{ verticalAlign: 'middle' }}> Are you looking for online resources? or Do you want to share?</th>
            <th ><button type="submit" className="btn btn-primary" onClick={onToggle}>POST</button></th>
          </tr>
        </thead>
      </table>
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
