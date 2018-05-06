import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';


// Import Style
import styles from '../../components/PostListItem/PostListItem.css';

// Import Actions
import { fetchTutorship } from '../TutorshipListPage/TutorshipButtonActions';

// Import Selectors
import { getTutorship } from '../TutorshipListPage/TutorshipReducer';

const TutorshipDetailPage = (props) => (
  <div>
    <Helmet title={props.tutorship.title} />
    <div className={`${styles['single-post']} ${styles['post-detail']}`}>
      <p className={styles['post-desc']}>{props.tutorship.content}</p>
    </div>
  </div>

);

// Actions required to provide data for this component to render in server side.
TutorshipDetailPage.need = [
  params => {
    return fetchTutorship(params.cuid);
  }];

// Retrieve data from store as props
function mapStateToProps(state, props) {
  return {
    tutorship: getTutorship(state, props.params.cuid),
  };
}

TutorshipDetailPage.propTypes = {
  tutorship: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  }).isRequired,
};

TutorshipDetailPage.contextTypes = {
  router: React.PropTypes.object,
};

export default connect(mapStateToProps)(TutorshipDetailPage);

