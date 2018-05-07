import React, { PropTypes } from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';


// Import Style
import styles from './TRComment.css';

function TRcomment(props) {
  return ( 
      <div className="card-body">
        <blockquote className="blockquote mb-0">
          <p style={{fontSize: '16px'}}>{props.post.content}</p>
          <footer className="blockquote-footer"><cite title="Source Title" style={{fontSize: '13px'}}>Date Added: {props.post.dateAdded.substring(0, 10)}</cite></footer>
        </blockquote>
        <hr className={styles.divider} />
      </div>
  );
}

TRcomment.propTypes = {
  post: PropTypes.shape({
    content: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  }).isRequired,
};

export default TRcomment;
