import React from 'react';
import PropTypes from 'prop-types';
//import 'bootstrap/dist/css/bootstrap.min.css';




function TutorshipPaperSheet(props) {
  const { onToggle } = props;
  return (
    <div className="container">
      <table className="table table-bordered" style={{ width: '80%' }}>
        <thead >
          <tr >
            <th style={{ verticalAlign: 'middle' }}> Are you looking for a Tutor? or Do you want to give private lesson?</th>
            <th ><button type="submit" className="btn btn-primary" onClick={onToggle}>POST</button></th>
          </tr>
        </thead>
      </table>
    </div>
  );
}

TutorshipPaperSheet.propTypes = {
  onToggle: PropTypes.func.isRequired,
};

export default TutorshipPaperSheet;