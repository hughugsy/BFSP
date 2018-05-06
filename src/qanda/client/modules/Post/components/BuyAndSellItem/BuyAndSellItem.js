import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';

class BuyAndSellItem extends Component {
  constructor(props){
    super(props);
  }
  /*<Link to={`/buyandsells/${this.props.post.slug}-${this.props.post.cuid}`}>*/
  render(){
    const { post } = this.props;
    return (
        <div className="card border-info mb-3">
          <div className="card-body">
            <h5 className="card-title"><Link to={`/buyandsell/${this.props.post.slug}-${this.props.post.cuid}`}>{this.props.post.title}</Link></h5>
            <p className="card-text">Price: {this.props.post.price} TL</p>
            <p className="card-text">Contact Info: {this.props.post.contact}</p>
            <p className="card-text">Description: {this.props.post.content}</p>
            <p className="card-text">Date: {this.props.post.dateAdded.substring(0, 10)}</p>
          </div>
        </div>
    );
  }
}

BuyAndSellItem.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    contact: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  }).isRequired,
};

export default BuyAndSellItem;
