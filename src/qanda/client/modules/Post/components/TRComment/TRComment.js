import React, { PropTypes } from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';


// Import Style
import styles from './TRComment.css';

function TRcomment(props) {
  return (
    <div className={styles['single-post']}>
      <p className={styles['post-desc']}>{props.post.content}</p>
      <p className={styles['post-desc']}>Date Added: {props.post.dateAdded.substring(0, 10)}</p>
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
