import React, { PropTypes } from 'react';
import { Link } from 'react-router';


// Import Style
import styles from './OnlineResourcesItem.css';

function OnlineResourcesItem(props) {
  return (
    <div className="card border-info mb-3">
      <div className="card-body">
        <h5 className="card-title"><Link to={`/onlineresources/${props.post.slug}-${props.post.cuid}`}>{props.post.title}</Link></h5>
        <p className="card-text">Link: <a href = {props.post.link} target="_blank">Click Here</a></p>
        <p className="card-text">Description: {props.post.content}</p>
        <p className="card-text">Date: {props.post.dateAdded.substring(0, 10)}</p>
      </div>
    </div>
  );
}

OnlineResourcesItem.propTypes = {
  post: PropTypes.shape({
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    title: PropTypes.string.isRequired,
    dateAdded: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  }).isRequired,
};

export default OnlineResourcesItem;
