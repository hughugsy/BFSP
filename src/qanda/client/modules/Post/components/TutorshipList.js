import React, { PropTypes } from 'react';

// Import Components
import TutorshipItem from './TutorshipItem/TutorshipItem';

function TutorshipList(props) {
  return (
    <div className="card-columns">
      {
        props.posts.map(post => (
          <TutorshipItem
            post={post}
            key={post.cuid}
          />
        ))
      }
    </div>
  );
}

TutorshipList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  })).isRequired,
};

export default TutorshipList;
