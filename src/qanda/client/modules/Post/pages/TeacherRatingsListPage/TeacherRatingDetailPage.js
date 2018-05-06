import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { Link } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
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
import { fetchTR } from './TeacherRatingActions';

// Import Selectors
import { getTRComments } from './TRCommentReducer';
import { getShowAddTRCButton } from './TRCButtonReducer';
import { getTeacherRating } from './TeacherRatingReducer';

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
    const { post, trcomments, showAddTRComment } = this.props;
    let pageContent = (
      <TRCommentButton onToggle={this.toggleAdd} />
    );
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
          <p>Grading: {this.props.post.grading}</p>
          <p>Teaching: {this.props.post.teaching}</p>
          <p>Workload: {this.props.post.workload}</p>
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
    showAddTRComment: getShowAddTRCButton(state),
    trcomments: getTRComments(state, props.params.slug),
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
