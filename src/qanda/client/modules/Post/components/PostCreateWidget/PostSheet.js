import React from 'react';
import PropTypes from 'prop-types';
// import 'bootstrap/dist/css/bootstrap.min.css';


import styles from './PostCreateWidget.css';

function PostSheet(props) {
  const { onToggle, showAddPost } = props;
  const cls = `${styles.form} ${(showAddPost ? '' : styles.appear)}`;
  return (
    <div className={cls}>
        <div className="container">
            <table className="table table-bordered" style={{ width: '80%' }}>
                <thead >
                <tr >
                    <th style={{ verticalAlign: 'middle' }}> Are you looking for online answers? just post here if you did not find</th>
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
  showAddPost: PropTypes.bool.isRequired,
};

export default PostSheet;
