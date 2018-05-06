import React, { PropTypes } from 'react';

// Import Components
import OnlineResourcesItem from './OnlineResourcesItem/OnlineResourcesItem';

function OnlineResourcesList(props) {
  return (
    <div className="listView">
      {
        props.posts.map(post => (
          <OnlineResourcesItem
            post={post}
            key={post.cuid}
          />
        ))
      }
    </div>
  );
}

OnlineResourcesList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  })).isRequired,
};

export default OnlineResourcesList;
