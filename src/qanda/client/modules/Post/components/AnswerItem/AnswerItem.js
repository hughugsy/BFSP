import React, { PropTypes } from 'react';


// Import Style
import styles from './AnswerItem.css';

function AnswerItem(props) {
  return (
    <div className={styles['single-post']}>
      <p className={styles['post-desc']}>{props.post.content}</p>
      <hr className={styles.divider} />
    </div>
  );
}

AnswerItem.propTypes = {
  post: PropTypes.shape({
    content: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  }).isRequired,
};

export default AnswerItem;
