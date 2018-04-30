import React, { PropTypes } from 'react';
import { Link } from 'react-router';


// Import Style
import styles from './OnlineResourcesItem.css';

function OnlineResourcesItem(props) {
  return (
    <div className={styles['single-post']}>
      <h3 className={styles['post-title']}>
        <Link to={`/onlineresources/${props.post.slug}-${props.post.cuid}`} >
          {props.post.title}
        </Link>
      </h3>
      <p className={styles['post-desc']}>{props.post.content}</p>
      <hr className={styles.divider} />
    </div>
  );
}

OnlineResourcesItem.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default OnlineResourcesItem;
