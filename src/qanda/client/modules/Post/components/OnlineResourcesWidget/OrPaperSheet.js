import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import './OnlineResourcesWidget.css'

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
  }),
});

function OrPaperSheet(props) {
  const { classes, onToggle } = props;
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

OrPaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default OrPaperSheet;
