import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { Link } from 'react-router';
//import 'bootstrap/dist/css/bootstrap.min.css';
// import { FormattedMessage } from 'react-intl';

// Import Style
import styles from '../../components/PostListItem/PostListItem.css';

// Import Components
import TRCommentButton from '../../components/TRCommentWidget/TRCommentButton';
import TRcommentWidget from '../../components/TRCommentWidget/TRCommentWidget';
import TRCommentList from '../../components/TRCommentList';

// Import Actions
import { fetchTRCOMMENTS, addTRCOMMENTRequest } from './TRCommentActions';
import { toggleAddTRC } from './TRCButtonActions';
import { fetchTR, fetchTRs } from './TeacherRatingActions';

// Import Selectors
import { getTRComments } from './TRCommentReducer';
import { getShowAddTRCButton } from './TRCButtonReducer';
import { getTeacherRating, getTeacherRatings } from './TeacherRatingReducer';
import { getUser } from '../../../User/UserReducer';

class TeacherRatingDetailPage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchTRCOMMENTS());
  }

  /*
  handleDeletePost = post => {
    if (confirm('Are you sure, comrade?')) {
      this.props.dispatch(deleteAnswerRequest(post));
    }
  };
  */

  handleAddPost = (content, teacher) => {
    this.props.dispatch(toggleAddTRC());
    this.props.dispatch(addTRCOMMENTRequest({ content, teacher }));
  };

  toggleAdd = () => {
    this.props.dispatch(toggleAddTRC());
  }

  render() {
    let gradingAverage = 0;
    let teachingAverage = 0;
    let workloadAverage = 0;
    let teacherArray = this.props.posts.filter(post => post.name === this.props.post.name);
    for (var i = 0; i < teacherArray.length; i++){
      gradingAverage += teacherArray[i].grading;
      teachingAverage += teacherArray[i].teaching;
      workloadAverage += teacherArray[i].workload;
    }
    gradingAverage /= teacherArray.length;
    teachingAverage /= teacherArray.length;
    workloadAverage /= teacherArray.length;
    gradingAverage = gradingAverage.toFixed(1);
    teachingAverage = teachingAverage.toFixed(1);
    workloadAverage = workloadAverage.toFixed(1);

    const grading = gradingAverage*10 + '%';
    const gradingValue = gradingAverage*10 + '/100';
    const teaching = teachingAverage*10 + '%';
    const teachingValue = teachingAverage*10 + '/100';
    const workload = workloadAverage*10 + '%';
    const workloadValue = workloadAverage*10 + '/100';

    const { post, trcomments, showAddTRComment } = this.props;
    let pageContent;
    if (!this.props.user)
      pageContent = null;
    
    else{
        pageContent = (
        <TRCommentButton onToggle={this.toggleAdd} />
      );
    }
    if (showAddTRComment) {
      pageContent = (
        <TRcommentWidget addPost={this.handleAddPost} teacher = {post.slug} cancelPost={this.toggleAdd} />
      );
    }
    const answerCard = (
      <div>
        <Helmet title={post.name} />
        <div className={`${styles['single-post']} ${styles['post-detail']}`}>
          <h3 className={styles['post-title']}>
              {post.name}
          </h3>
          <div className="progress " style = {{marginBottom: '10px', height: '20px'}}>
            <div className="progress-bar progress-bar-striped progress-bar-animated bg-info" role="progressbar" style={{width: grading}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">Grading: {gradingValue}</div>
          </div>
          <div className="progress" style = {{marginBottom: '10px', height: '20px'}}>
            <div className="progress-bar progress-bar-striped progress-bar-animated bg-info" role="progressbar" style={{width: teaching}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">Teaching: {teachingValue}</div>
          </div>
          <div className="progress" style = {{marginBottom: '10px', height: '20px'}}>
            <div className="progress-bar progress-bar-striped progress-bar-animated bg-info" role="progressbar" style={{width: workload}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">Workload: {workloadValue}</div>
          </div>
        </div>
      </div>

    );
    return (
      <div>
        {answerCard}
        {pageContent}
        <TRCommentList handleDeletePost={this.handleDeletePost} posts={trcomments} />
      </div>
    );
  }
}

// Actions required to provide data for this component to render in server side.
TeacherRatingDetailPage.need = [
  params => {
    return fetchTR(params.cuid);
  },
  () => {
    return fetchTRCOMMENTS();
  }];

// Retrieve data from store as props
function mapStateToProps(state, props) {
  return {
    post: getTeacherRating(state, props.params.cuid),
    posts: getTeacherRatings(state),
    showAddTRComment: getShowAddTRCButton(state),
    trcomments: getTRComments(state, props.params.slug),
    user: getUser(state),
  };
}

TeacherRatingDetailPage.propTypes = {
  post: PropTypes.shape({
    path: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  }).isRequired,
  showAddTRComment: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
  trcomments: PropTypes.shape({
    content: PropTypes.string.isRequired,
    teacher: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  }).isRequired,
};

TeacherRatingDetailPage.contextTypes = {
  router: React.PropTypes.object,
};

export default connect(mapStateToProps)(TeacherRatingDetailPage);
