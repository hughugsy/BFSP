import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { Link } from 'react-router';


// Import Style
import styles from '../../components/PostListItem/PostListItem.css';

// Import Actions
import { fetchTutorship } from '../TutorshipListPage/TutorshipActions';

// Import Selectors
import { getTutorship } from '../TutorshipListPage/TutorshipReducer';

const TutorshipDetailPage = (props) => (
  <div className="card" style = {{marginTop: '20px'}}>
    <div className="card-header">
      {props.tutorship.title}
    </div>
    <div className="card-body">
      <p className="card-text">Description: {props.tutorship.content}</p>
      <Link to="/tutorship" >
      <a href = "#" className="btn btn-primary">Go to Tutorship</a>
      </Link>
    </div>
    <div className="card-footer text-muted">
      Date: {props.tutorship.dateAdded.substring(0, 10)}
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
    dateAdded: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  }).isRequired,
};

TutorshipDetailPage.contextTypes = {
  router: React.PropTypes.object,
};

export default connect(mapStateToProps)(TutorshipDetailPage);

