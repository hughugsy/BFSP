import React from 'react';
import PropTypes from 'prop-types';
// import 'bootstrap/dist/css/bootstrap.min.css';


function PostSheet(props) {
  const { onToggle } = props;
  return (
    <div >
        <div className="container">
            <table className="table table-bordered" style={{ width: '80%' }}>
                <thead >
                <tr >
                    <th style={{ verticalAlign: 'middle' }}> Are you looking for online resources? or Do you want to share?</th>
                    <th ><button type="submit" className="btn btn-primary" onClick={onToggle}>POST</button></th>
                </tr>
                </thead>
            </table>
        </div>
    </div>
  );
}

PostSheet.propTypes = {
  onToggle: PropTypes.func.isRequired,
};

export default PostSheet;
