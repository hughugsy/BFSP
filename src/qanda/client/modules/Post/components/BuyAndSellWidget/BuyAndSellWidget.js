import React, { Component, PropTypes } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export class BuyAndSellWidget extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      content: '',
      price: 0,
      contact: '',
    }
  }
  addPost = () => {
    const title = this.state.title;
    const content = this.state.content;
    const price = this.state.price;
    const contact = this.state.contact;
    if (title && content && price && contact) {
      this.props.addPost(title, price, contact, content);
    }
  };
  updateTitle = (event) => {
    this.setState({title: event.target.value});
  };
  updateContent = (event) => {
    this.setState({content: event.target.value});
  };
  updatePrice = (event) => {
    this.setState({price: event.target.value});
  };
  updateContact = (event) => {
    this.setState({contact: event.target.value});
  };
  render() {
    return (
        <div style = {{marginTop: '20px'}}>
          <div>
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="Title" aria-describedby="basic-addon1" onChange = {this.updateTitle}/>
            </div>
          </div>
          <div>
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="Price" aria-describedby="basic-addon1" onChange = {this.updatePrice}/>
            </div>
          </div>
          <div>
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="Contact Info" aria-describedby="basic-addon1" onChange = {this.updateContact}/>
            </div>
          </div>
          <div className="input-group">
            <textarea className="form-control" aria-label="With textarea" placeholder = "Description" onChange = {this.updateContent}></textarea>
          </div>
          <div className="input-group mb-3">
            <button type="button" className="btn btn-primary" onClick = {this.addPost} style = {{marginTop: '5px'}}>Add</button>
          </div>
        </div>
    );
  }
}

BuyAndSellWidget.propTypes = {
  addPost: PropTypes.func.isRequired,
};

export default BuyAndSellWidget;
