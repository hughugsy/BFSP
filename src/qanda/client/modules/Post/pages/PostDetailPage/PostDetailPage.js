import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
// import 'bootstrap/dist/css/bootstrap.min.css';

// Import Style
import styles from '../../components/PostListItem/PostListItem.css';

// Import Components
import AnswerPaperSheet from '../../components/AnswerWidget/AnswerPaperSheet';
import AnswerWidget from '../../components/AnswerWidget/AnswerWidget';
import AnswerList from '../../components/AnswerList';

// Import Actions
import { fetchAnswers, addAnswerRequest /* deleteAnswerRequest*/ } from './AnswerActions';
import { toggleAddAnswer } from './AnswerButtonActions';
import { fetchPost } from '../../PostActions';

// Import Selectors
import { getAnswers } from './AnswerReducer';
import { getShowAddAnswer } from './AnswerButtonReducer';
import { getPost } from '../../PostReducer';
import { getUser } from '../../../User/UserReducer';

class PostDetailPage extends Component {

  componentDidMount() {
    this.props.dispatch(fetchAnswers());
  }

  /*
  handleDeletePost = post => {
    if (confirm('Are you sure, comrade?')) {
      this.props.dispatch(deleteAnswerRequest(post));
    }
  };
  */

  // /////////////!!!!!!!!!!!!!!!!!!!!!!!!!!! ADD PATH TO EVERY MODEL!!!!!!!!!!!FOR ALGOLIA

  handleAddPost = (content, question) => {
    this.props.dispatch(toggleAddAnswer());
    this.props.dispatch(addAnswerRequest({ content, question }));
  };

  toggleAdd = () => {
    this.props.dispatch(toggleAddAnswer());
  }

  render() {
    const { post, answers, showAddAnswer } = this.props;
    const question = post.slug;
    let pageContent;
    if (!this.props.user)
      pageContent = null;
    else{ 
      pageContent = (
        <AnswerPaperSheet onToggle={this.toggleAdd} />
      );
    }
    if (showAddAnswer) {
      pageContent = (
        <AnswerWidget addPost={this.handleAddPost} question={question} cancelPost={this.toggleAdd} />
      );
    }
    const answerCard = (
      <div>
        <Helmet title={post.title} />
        <div className={`${styles['single-post']} ${styles['post-detail']}`}>
          <h3 className={styles['post-title']}>
              {post.title}
          </h3>
          <p className={styles['post-desc']}>{post.content}</p>
        </div>
      </div>

    );
    return (
      <div>
        {answerCard}
        {pageContent}
        <AnswerList handleDeletePost={this.handleDeletePost} posts={answers} />
      </div>
    );
  }
}

// Actions required to provide data for this component to render in server side.
PostDetailPage.need = [
  params => {
    return fetchPost(params.cuid);
  },
  () => {
    return fetchAnswers();
  }];

// Retrieve data from store as props
function mapStateToProps(state, props) {
  return {
    post: getPost(state, props.params.cuid),
    showAddAnswer: getShowAddAnswer(state),
    answers: getAnswers(state, props.params.slug),
    user: getUser(state),
  };
}

PostDetailPage.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  }).isRequired,
  showAddAnswer: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
  answers: PropTypes.arrayOf(PropTypes.shape({
    question: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};

PostDetailPage.contextTypes = {
  router: React.PropTypes.object,
};

export default connect(mapStateToProps)(PostDetailPage);
