import React, { PropTypes } from 'react';

// Import Components
import AnswerItem from './AnswerItem/AnswerItem';

function AnswerList(props) {
  return (
    <div className="card" style = {{marginTop: '20px', marginLeft: '15px'}}>
      <div className="card-header">
        Comment Section
      </div>
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
