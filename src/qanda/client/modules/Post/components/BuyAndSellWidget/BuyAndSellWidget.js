import React, { Component, PropTypes } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Select from 'react-select';
// import 'react-select/dist/react-select.css';

export class BuyAndSellWidget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
      price: 0,
      contact: '',
      selectedOption: [],
    };
  }
  addPost = () => {
    const { title, contact, content, price, selectedOption } = this.state;
    if (title && content && price && contact) {
      this.props.addPost(selectedOption, title, price, contact, content);
    }
  };
  updateTitle = (event) => {
    this.setState({ title: event.target.value });
  };
  updateContent = (event) => {
    this.setState({ content: event.target.value });
  };
  updatePrice = (event) => {
    this.setState({ price: event.target.value });
  };
  updateContact = (event) => {
    this.setState({ contact: event.target.value });
  };
  handleChange = (value) => {
    const array = value.split(',');
    this.setState({ selectedOption: array });
  }

  render() {
    const { selectedOption } = this.state;
    return (
      <div className="col-sm-6" style={{ marginTop: '20px', marginBottom: '20px' }}>
        <div className="card" >
          <div className="card-body">

            <div>
              <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Title" aria-describedby="basic-addon1" onChange={this.updateTitle} />
              </div>
            </div>
            <div>
              <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Price" aria-describedby="basic-addon1" onChange={this.updatePrice} />
              </div>
            </div>
            <div>
              <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Contact Info" aria-describedby="basic-addon1" onChange={this.updateContact} />
              </div>
            </div>
            <div className="input-group">
              <textarea className="form-control" aria-label="With textarea" placeholder="Description" onChange={this.updateContent}></textarea>
            </div>
            <Select
              name="form-field-name"
              value={selectedOption}
              onChange={this.handleChange}
              multi
              simpleValue
              options={[
                { value: 'cs101', label: 'CS101' },
                { value: 'cs102', label: 'CS102' },
                { value: 'cs201', label: 'CS201' },
                { value: 'cs202', label: 'CS202' },
                { value: 'cs223', label: 'CS223' },
                { value: 'cs224', label: 'CS224' },
                { value: 'cs342', label: 'CS342' },
                { value: 'cs353', label: 'CS353' },
                { value: 'cs473', label: 'CS473' },
                { value: 'cs476', label: 'CS476' },
              ]}
            />
            <div className="input-group mb-3" style={{ marginTop: '10px' }}>
              <button className="btn btn-secondary" onClick={this.props.handleClickCancel} >Cancel</button>
              <button type="button" className="btn btn-primary" onClick={this.addPost} style={{ marginLeft: '5px' }}>Add</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

BuyAndSellWidget.propTypes = {
  addPost: PropTypes.func.isRequired,
};

export default BuyAndSellWidget;
