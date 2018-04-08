import React, { PropTypes } from 'react';

// Import Components
import AnswerItem from './OnlineResourcesItem/OnlineResourcesItem';

function AnswerList(props) {
  return (
    <div className="listView">
      {
        props.posts.map(post => (
          <AnswerItem
            post={post}
            key={post.cuid}
          />
        ))
      }
    </div>
  );
}

AnswerList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    content: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  })).isRequired,
};

export default AnswerList;
