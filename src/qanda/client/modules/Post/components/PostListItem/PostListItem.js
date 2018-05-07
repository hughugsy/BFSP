import React, { PropTypes } from 'react';
import { Link } from 'react-router';

// Import Style
import styles from './PostListItem.css';

function PostListItem(props) {
  return (
    <div className="card" style={{marginTop: '16px'}} >
      <h6 className="card-header"><Link to={`/posts/${props.post.slug}-${props.post.cuid}`} >   {props.post.title} </Link>  <div style={{float: 'right', fontSize: '12px'}}> {props.post.dateAdded.substring(0,10)}</div> </h6>
      <div className="card-body">
        <p className="card-text">{props.post.content}</p>
      </div>
    </div>
  );
}

PostListItem.propTypes = {
  post: PropTypes.shape({
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    dateAdded: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  }).isRequired,
};

export default PostListItem;

