import React, { PropTypes } from 'react';
import { Link } from 'react-router';


// Import Style
import styles from './TutorshipItem.css';

function TutorshipItem(props) {
  let myStyle = (props.post.type === 'HIRE') ? "card border-info  mb-3" : "card border-secondary mb-3"; 
  let myStyleText = (props.post.type === 'HIRE') ? "card-body text-info " : "card-body text-secondary"; 
  return (
    <div className={myStyle}>
      <div className={myStyleText}>
        <Link to={`/tutorship/${props.post.slug}-${props.post.cuid}`}><h5 className="card-title">{props.post.title}</h5></Link>
        <p className="card-text">Type: {props.post.type}</p>
        <p className="card-text">Description: {props.post.content}</p>
        <p className="card-text">Date: {props.post.dateAdded.substring(0, 10)}</p>
      </div>
    </div>
  );
}

TutorshipItem.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    dateAdded: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  }).isRequired,
};

export default TutorshipItem;
