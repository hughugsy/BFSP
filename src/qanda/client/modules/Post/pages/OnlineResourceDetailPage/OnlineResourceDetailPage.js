import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { Link } from 'react-router';

// Import Style
import styles from '../../components/PostListItem/PostListItem.css';

// Import Actions
import { fetchOnRes } from '../OnlineResourcesListPage/OnlineResourceActions';

// Import Selectors
import { getOnlineResource } from '../OnlineResourcesListPage/OnlineResourceReducer';

const OnlineResourceDetailPage = (props) => (
  <div className="card" style = {{marginTop: '20px'}}>
    <div className="card-header">
      {props.onlineresource.title}
    </div>
    <div className="card-body">
      <p className="card-text">Description: {props.onlineresource.content}</p>
      <p className="card-text">Full Link: <a href = {props.onlineresource.link}>{props.onlineresource.link}</a></p>
      <Link to="/onlineresources" >
      <a href = "#" className="btn btn-primary">Go to Online Resources</a>
      </Link>
    </div>
    <div className="card-footer text-muted">
      Date: {props.onlineresource.dateAdded.substring(0, 10)}
    </div>
  </div>

);

// Actions required to provide data for this component to render in server side.
OnlineResourceDetailPage.need = [
  params => {
    return fetchOnRes(params.cuid);
  }];

// Retrieve data from store as props
function mapStateToProps(state, props) {
  return {
    onlineresource: getOnlineResource(state, props.params.cuid),
  };
}

OnlineResourceDetailPage.propTypes = {
  onlineresource: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  }).isRequired,
};

OnlineResourceDetailPage.contextTypes = {
  router: React.PropTypes.object,
};

export default connect(mapStateToProps)(OnlineResourceDetailPage);

