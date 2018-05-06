import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch/dom';

// Import Components
import PostList from '../../components/PostList';
import PostCreateWidget from '../../components/PostCreateWidget/PostCreateWidget';
import PostSheet from '../../components/PostCreateWidget/PostSheet';
import Result from '../../components/Result/Result';

// Import Actions
import { addPostRequest, fetchPosts } from '../../PostActions';
import { toggleAddPost } from '../../../App/AppActions';

// Import Selectors
import { getShowAddPost } from '../../../App/AppReducer';
import { getPosts } from '../../PostReducer';

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
    const { posts } = this.props;
    // const filteredPosts = posts.filter(post => selections.every((value) => post.tags.includes(value)));
    return (
      <div>
        <PostSheet onToggle={this.onToggle} showAddPost={this.props.showAddPost} />
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
