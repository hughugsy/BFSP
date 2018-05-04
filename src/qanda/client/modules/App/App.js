import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


import Search from '../Post/components/Search/Search';


export class App extends Component {


  render() {
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
            </div>
            <div className="col-10">
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
};


export default App;

