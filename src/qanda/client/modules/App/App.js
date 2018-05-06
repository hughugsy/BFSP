import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

import { sendSelection } from '../Post/PostActions';

import Search from '../Post/components/Search/Search';


export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: [],
    };
  }

  handleChange = (value) => {
    const array = value.split(',');
    if (array[0] === '') {
      this.props.dispatch(sendSelection([]));
    } else {
      this.props.dispatch(sendSelection(array));
    }
    this.setState({ selectedOption: array });
  }


  render() {
    const { selectedOption } = this.state;
    return (
      <div >
        <div style={{ postion: 'relative' }}>
          <div style={{ position: 'relative' }}>
            <nav className="navbar navbar-expand-lg navbar-light" style={{ background: '#0084b4' }}>
              <Link className="navbar-brand" to="/" style={{ color: 'white' }} >QandA </Link>

            </nav>
          </div>
          <div style={{ position: 'absolute', top: 0, marginTop: '10px', right: 0, paddingRight: '40px' }}>
            <Search />
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-2" style={{ top: '20px' }}>
              <div className="list-group" role="tablist" >
                <Link className="list-group-item list-group-item-action" role="tab" to="/">Questions</Link>
                <Link className="list-group-item list-group-item-action" role="tab" to="/onlineresources">Online Resources</Link>
                <Link className="list-group-item list-group-item-action" role="tab" >Tutorship</Link>
                <Link className="list-group-item list-group-item-action" role="tab" >Teacher Rating</Link>
                <Link className="list-group-item list-group-item-action" role="tab" >Buy and Sell</Link>
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
                            { value: 'cs319', label: 'CS319' },
                            { value: 'cs421', label: 'CS421' },
                ]}
              />
            </div>
            <div className="col-8">
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps() {
  return {
  };
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};


export default connect(mapStateToProps)(App);

