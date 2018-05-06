import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';


// Import Style
import styles from '../../components/PostListItem/PostListItem.css';

// Import Actions
import { fetchBS } from './BuyAndSellActions';

// Import Selectors
import { getBuyAndSell } from './BuyAndSellReducer';

const BuyAndSellDetailPage = (props) => (
  <div>
    <Helmet title={props.buyandsell.title} />
    <div className={`${styles['single-post']} ${styles['post-detail']}`}>
      <h3 className={styles['post-desc']}>{props.buyandsell.title}</h3>
      <p className={styles['post-desc']}>Price: {props.buyandsell.price} TL</p>
      <p className={styles['post-desc']}>Contact Info: {props.buyandsell.contact}</p>
      <p className={styles['post-desc']}>Description: {props.buyandsell.content}</p>
      <p className={styles['post-desc']}>Date: {props.buyandsell.dateAdded.substring(0, 10)}</p>
    </div>
  </div>

);

// Actions required to provide data for this component to render in server side.
BuyAndSellDetailPage.need = [
  params => {
    return fetchBS(params.cuid);
  }];

// Retrieve data from store as props
function mapStateToProps(state, props) {
  return {
    buyandsell: getBuyAndSell(state, props.params.cuid),
  };
}

BuyAndSellDetailPage.propTypes = {
  buyandsell: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    contact: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  }).isRequired,
};

BuyAndSellDetailPage.contextTypes = {
  router: React.PropTypes.object,
};

export default connect(mapStateToProps)(BuyAndSellDetailPage);

