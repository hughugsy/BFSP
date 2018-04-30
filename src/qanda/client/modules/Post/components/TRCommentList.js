import React, { PropTypes } from 'react';

// Import Components
import TRComment from './TRComment/TRComment';

function TRCommentList(props) {
  return (
    <div className="listView">
      {
        props.posts.map(post => (
          <TRComment
            post={post}
            key={post.cuid}
          />
        ))
      }
    </div>
  );
}

TRCommentList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    content: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  })).isRequired,
};

export default TRCommentList;
