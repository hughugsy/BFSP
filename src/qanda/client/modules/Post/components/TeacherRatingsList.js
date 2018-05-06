import React, { PropTypes, Component } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// Import Components
import TeacherRatingsItem from './TeacherRatingsItem/TeacherRatingsItem';

export class TeacherRatingsList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let teachers = ['Emmelio', 'Cicek'];
    let myPosts = [];
    for (var k = 0; k < teachers.length; k++) {
      let teacherArray = this.props.posts.filter(post => post.name === teachers[k]);
      let gradingAverage = 0;
      let teachingAverage = 0;
      let workloadAverage = 0;
      let result = {
        grading: 0,
        teaching: 0,
        workload: 0,
        slug: '-',
        cuid: '-',
        dateAdded: Date.now,
        path: '-',
        name: '-',
      };
      for (var i = 0; i < teacherArray.length; i++) {
        gradingAverage += teacherArray[i].grading;
        teachingAverage += teacherArray[i].teaching;
        workloadAverage += teacherArray[i].workload;
      }
      gradingAverage /= teacherArray.length;
      teachingAverage /= teacherArray.length;
      workloadAverage /= teacherArray.length;
      result.grading = gradingAverage.toFixed(1);
      result.teaching = teachingAverage.toFixed(1);
      result.workload = workloadAverage.toFixed(1);
      result.name = teacherArray[0].name;
      result.path = teacherArray[0].path;
      result.slug = teacherArray[0].slug;
      result.cuid = teacherArray[0].cuid;
      result.dateAdded = teacherArray[0].dateAdded;
      myPosts.push(result);
    }
    return (
      <div style={{ marginTop: '20px' }}>
      <div className="card-columns">
        {
          myPosts.map(post => (

            <TeacherRatingsItem
              post={post}
              key={post.cuid}
              addPost={this.props.addPost}
            />
          ))
        }
      </div>
      </div>
    );
  }
}

TeacherRatingsList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    path: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    grading: PropTypes.number.isRequired,
    teaching: PropTypes.number.isRequired,
    workload: PropTypes.number.isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  })).isRequired,
};

export default TeacherRatingsList;
