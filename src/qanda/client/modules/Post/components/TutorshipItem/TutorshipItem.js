import React, { PropTypes } from 'react';
import { Link } from 'react-router';


// Import Style
import styles from './TutorshipItem.css';

function TutorshipItem(props) {
  return (
    <div className={styles['single-post']}>
      <h3 className={styles['post-title']}>
        <Link to={`/tutorship/${props.post.slug}-${props.post.cuid}`} >
          {props.post.title}
        </Link>
      </h3>
      <p className={styles['post-title']}>{props.post.dateAdded}</p>
      <p className={styles['post-desc']}>{props.post.content}</p>
      <hr className={styles.divider} />
    </div>
  );
}

TutorshipItem.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    dateAdded: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default TutorshipItem;
