import React, { PropTypes } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// Import Components
import BuyAndSellItem from './BuyAndSellItem/BuyAndSellItem';

function BuyAndSellList(props) {
  return (
    <div className="card-columns">
      {
        props.posts.map(post => (
          <BuyAndSellItem
            post={post}
            key={post.cuid}
          />
        ))
      }
    </div>
  );
}

BuyAndSellList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    contact: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  })).isRequired,
};

export default BuyAndSellList;
