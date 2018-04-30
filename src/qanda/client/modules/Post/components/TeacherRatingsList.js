import React, { PropTypes } from 'react';

// Import Components
import TeacherRatingsItem from './TeacherRatingsItem/TeacherRatingsItem';

function TeacherRatingsList(props) {
  return (
    <div className="listView">
      {
        props.posts.map(post => (
          <TeacherRatingsItem
            post={post}
            key={post.cuid}
          />
        ))
      }
    </div>
  );
}

TeacherRatingsList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    path: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    grading: PropTypes.number.isRequired,
    teaching: PropTypes.number.isRequired,
    workload: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  })).isRequired,
};

export default TeacherRatingsList;
