import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
// import { FormattedMessage } from 'react-intl';

// import styles from './TutorshipListPage.css';

// Import Components
import TutorshipList from '../../components/TutorshipList';
import TutorshipWidget from '../../components/TutorshipWidget/TutorshipWidget';
import TutorshipPaperSheet from '../../components/TutorshipWidget/TutorshipPaperSheet';

// Import Actions
import { addTutorshipRequest, fetchTutorships, deleteTutorshipRequest } from './TutorshipActions';
import { toggleAddTutorship } from './TutorshipButtonActions';

// Import Selectors
import { getShowAddPost } from './TutorshipButtonReducer';
import { getTutorships } from './TutorshipReducer';
import { getUser } from '../../../User/UserReducer';

class TutorshipListPage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchTutorships());
  }

  handleDeletePost = post => {
    if (confirm('Do you want to delete this post')) { // eslint-disable-line
      this.props.dispatch(deleteTutorshipRequest(post));
    }
  };

  handleAddPost = (title, content, type) => {
    this.props.dispatch(toggleAddTutorship());
    this.props.dispatch(addTutorshipRequest({ title, content, type }));
  };

  toggleAdd = () => {
    this.props.dispatch(toggleAddTutorship());
  }

  // <a className={styles['add-post-button']} href="#" onClick={this.toggleAdd}><FormattedMessage id="addPost" /></a>
  render() {
    let pageContent;
    if (!this.props.user)
      pageContent=null;
    else{
      pageContent = (
        <TutorshipPaperSheet onToggle={this.toggleAdd} />
      );
      if (this.props.showAddPost) {
        pageContent = (<TutorshipWidget addPost={this.handleAddPost} cancelPost={this.toggleAdd} />);
      }
    }
    return (
      <div style={{ marginTop: '20px' }}>
        {pageContent}
        <TutorshipList handleDeletePost={this.handleDeletePost} posts={this.props.posts} />
      </div>
    );
  }
}

// Actions required to provide data for this component to render in sever side.
TutorshipListPage.need = [() => { return fetchTutorships(); }];

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    showAddPost: getShowAddPost(state),
    posts: getTutorships(state),
    user: getUser(state),
  };
}

TutorshipListPage.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    dateAdded: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  })).isRequired,
  showAddPost: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
};

TutorshipListPage.contextTypes = {
  router: React.PropTypes.object,
};

export default connect(mapStateToProps)(TutorshipListPage);

