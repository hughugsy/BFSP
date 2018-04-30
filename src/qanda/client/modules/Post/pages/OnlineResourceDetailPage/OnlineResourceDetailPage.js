import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';


// Import Style
import styles from '../../components/PostListItem/PostListItem.css';

// Import Actions
import { fetchOnRes } from '../OnlineResourcesListPage/OnlineResourceActions';

// Import Selectors
import { getOnlineResource } from '../OnlineResourcesListPage/OnlineResourceReducer';

const OnlineResourceDetailPage = (props) => (
  <div>
    <Helmet title={props.onlineresource.title} />
    <div className={`${styles['single-post']} ${styles['post-detail']}`}>
      <p className={styles['post-desc']}>{props.onlineresource.content}</p>
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

