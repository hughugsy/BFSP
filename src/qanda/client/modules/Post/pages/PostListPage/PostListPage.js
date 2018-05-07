import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';


// Import Components
import PostList from '../../components/PostList';
import PostCreateWidget from '../../components/PostCreateWidget/PostCreateWidget';
import PostSheet from '../../components/PostCreateWidget/PostSheet';


// Import Actions
import { addPostRequest, fetchPosts } from '../../PostActions';
import { toggleAddPost } from '../../../App/AppActions';

// Import Selectors
import { getShowAddPost } from '../../../App/AppReducer';
import { getPosts } from '../../PostReducer';
import { getUser } from '../../../User/UserReducer';

class PostListPage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }

  /*
  handleDeletePost = post => {
    if (confirm('Do you want to delete this post')) { // eslint-disable-line
      this.props.dispatch(deletePostRequest(post));
    }
  };*/


  onToggle = () => {
    this.props.dispatch(toggleAddPost());
  }
  handleAddPost = (tags, title, content) => {
    this.props.dispatch(toggleAddPost());
    this.props.dispatch(addPostRequest({ tags, title, content }));
  };

  render() {
    const { posts, showAddPost, user } = this.props;

    let pageContent;
    if (user) {
      pageContent = (<PostSheet onToggle={this.onToggle} />);
    } else if (user && showAddPost) {
      pageContent = (<PostCreateWidget addPost={this.handleAddPost} />);
    } else {
      pageContent = null;
    }

    return (
      <div style={{ marginTop: '20px' }}>
        {pageContent}
        <PostCreateWidget addPost={this.handleAddPost} showAddPost={this.props.showAddPost} />
        <PostList posts={posts} />
      </div>
    );
  }
}

// Actions required to provide data for this component to render in sever side.
PostListPage.need = [() => { return fetchPosts(); }];

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    showAddPost: getShowAddPost(state),
    posts: getPosts(state),
    user: getUser(state),
  };
}

PostListPage.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  })).isRequired,
  showAddPost: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
  // selections: PropTypes.arrayOf(PropTypes.string).isRequired,
};

PostListPage.contextTypes = {
  router: React.PropTypes.object,
};

export default connect(mapStateToProps)(PostListPage);
