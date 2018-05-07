import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { Link } from 'react-router';

// Import Style
import styles from '../../components/PostListItem/PostListItem.css';

// Import Actions
import { fetchBS } from './BuyAndSellActions';

// Import Selectors
import { getBuyAndSell } from './BuyAndSellReducer';

const BuyAndSellDetailPage = (props) => (
  <div className="card" style={{ marginTop: '20px' }}>
    <div className="card-header">
      {props.buyandsell.title}
    </div>
    <div className="card-body">
      <p className="card-text">Price: {props.buyandsell.price} TL</p>
      <p className="card-text">Contact Info: {props.buyandsell.contact}</p>
      <p className="card-text">Description: {props.buyandsell.content}</p>
      <Link to="/buyandsells" className="btn btn-primary" >
        Go to Buy And Sell
      </Link>
    </div>
    <div className="card-footer text-muted">
      Date: {props.buyandsell.dateAdded.substring(0, 10)}
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

