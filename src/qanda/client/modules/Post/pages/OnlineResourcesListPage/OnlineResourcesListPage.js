import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
// import { FormattedMessage } from 'react-intl';

// import styles from './OnlineResourcesListPage.css';

// Import Components
import OnlineResourcesList from '../../components/OnlineResourcesList';
import OnlineResourcesWidget from '../../components/OnlineResourcesWidget/OnlineResourcesWidget';
import OrPaperSheet from '../../components/OnlineResourcesWidget/OrPaperSheet';

// Import Actions
import { addOnResRequest, fetchOnRs, deleteOnResRequest } from './OnlineResourceActions';
import { toggleAddOnRes } from './OrButtonActions';

// Import Selectors
import { getShowAddPost } from './OrButtonReducer';
import { getOnlineResources } from './OnlineResourceReducer';

class OnlineResourcesListPage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchOnRs());
  }

  handleDeletePost = post => {
    if (confirm('Do you want to delete this post')) { // eslint-disable-line
      this.props.dispatch(deleteOnResRequest(post));
    }
  };

  handleAddPost = (tags, title, content) => {
    this.props.dispatch(toggleAddOnRes());
    this.props.dispatch(addOnResRequest({ tags, title, content }));
  };

  toggleAdd = () => {
    this.props.dispatch(toggleAddOnRes());
  }

  // <a className={styles['add-post-button']} href="#" onClick={this.toggleAdd}><FormattedMessage id="addPost" /></a>
  render() {
    let pageContent = (
      <OrPaperSheet onToggle={this.toggleAdd} />
    );
    if (this.props.showAddPost) {
      pageContent = (<OnlineResourcesWidget addPost={this.handleAddPost} showAddPost={this.props.showAddPost} cancelPost={this.toggleAdd} />);
    }
    return (
      <div style={{ marginTop: '20px' }}>
        {pageContent}
        <OnlineResourcesList handleDeletePost={this.handleDeletePost} posts={this.props.posts} />
      </div>
    );
  }
}

// Actions required to provide data for this component to render in sever side.
OnlineResourcesListPage.need = [() => { return fetchOnRs(); }];

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    showAddPost: getShowAddPost(state),
    posts: getOnlineResources(state),
  };
}

OnlineResourcesListPage.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  })).isRequired,
  showAddPost: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
};

OnlineResourcesListPage.contextTypes = {
  router: React.PropTypes.object,
};

export default connect(mapStateToProps)(OnlineResourcesListPage);

