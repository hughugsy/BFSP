import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Select from 'react-select';
// import 'react-select/dist/react-select.css';

import { sendSelection } from '../Post/PostActions';


// Import Actions
import { loadUserProps, logout } from '../../modules/User/UserActions';


// Import cookie
import cookie from 'react-cookie';

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
  componentWillMount() {
    const loginResult = cookie.load('mernAuth');
    const token = loginResult ? loginResult.t : null;
    const username = loginResult ? loginResult.u : null;
    if (this.props.user == null && token && username) {
      this.props.dispatch(loadUserProps({ username }));
    }
  }

  handleLogout = () => {
    this.props.dispatch(logout());
  };


  render() {
    const { selectedOption } = this.state;
    return (
      <div >
        <div style={{ postion: 'relative' }}>
          <div style={{ position: 'relative' }}>
            <nav className="navbar navbar-expand-lg navbar-light" style={{ background: '#0084b4' }}>
              <Link className="navbar-brand" to="/" style={{ color: 'white' }} >QANDA </Link>

            </nav>
          </div>
          <div style={{ position: 'absolute', top: 0, marginTop: '10px', right: 0, paddingRight: '200px' }}>
            <Search />
          </div>
          <div>
          {
            (this.props.user)
            ? <div>
                {
                  (this.props.getProfileEntered)
                  ? <div style={{ position: 'absolute', top: 0, marginTop: '6px', right: 0, paddingRight: '40px' }}>
                      <a className="btn btn-outline-warning" href="#" onClick={this.handleLogout}>
                        Logout
                      </a>
                    </div>
                  : <div style={{ position: 'absolute', top: 0, marginTop: '6px', right: 0, paddingRight: '40px' }}>
                      <Link style={{ marginRight: '5px' }} to="/profile" className="btn btn-outline-warning">Profile</Link>
                      <a className="btn btn-outline-warning" href="#" onClick={this.handleLogout}>
                        Logout
                      </a>
                    </div>
                }
              </div>
            : <div style={{ position: 'absolute', top: 0, marginTop: '6px', right: 0, paddingRight: '40px' }}>
                <Link style={{ marginRight: '5px' }} to="/register" className="btn btn-outline-warning" >Register</Link>
                <Link to="/login" className="btn btn-outline-warning" >Login</Link>
              </div>
          }
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-2" style={{ top: '20px' }}>
              <div className="list-group" role="tablist" >
                <Link className="list-group-item list-group-item-action" role="tab" to="/">Questions</Link>
                <Link className="list-group-item list-group-item-action" role="tab" to="/onlineresources">Online Resources</Link>
                <Link className="list-group-item list-group-item-action" role="tab" >Tutorship</Link>
                <Link className="list-group-item list-group-item-action" role="tab" to="/teacherratings">Teacher Ratings</Link>
                <Link className="list-group-item list-group-item-action" role="tab" to="/buyandsells">Buy and Sell</Link>
              </div>
              <div style={{ marginTop: '20px' }} className="card">
                <div className="card-body">
                  <h6 className="card-title">Filter By Tags</h6>
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
              </div>
            </div>
            <div className="col-8">
              {this.props.children}
            </div>
            <div className="col-2" style={{ top: '20px' }}>
              <div className="list-group">
                <a href="#" className="list-group-item list-group-item-action">Announcements</a>
                <a href="https://news.sportbox.ru/" className="list-group-item list-group-item-action list-group-item-primary">SPORT NEWS</a>
                <a href="https://github.com/" className="list-group-item list-group-item-action list-group-item-success">GITHUB</a>
                <a href="https://getbootstrap.com/docs/4.1/components/list-group/" className="list-group-item list-group-item-action list-group-item-primary">BOOTSTRAP</a>
                <a href="https://www.linkedin.com/" className="list-group-item list-group-item-action list-group-item-primary">LINKEDIN</a>
                <a href="https://www.google.com.tr/?gws_rd=ssl" className="list-group-item list-group-item-action list-group-item-primary">GOOGLE</a>
                <a href="https://github.com/hughugsy" className="list-group-item list-group-item-action list-group-item-success">HUGHUGSY</a>
                <a href="https://github.com/z-e-r-0" className="list-group-item list-group-item-action list-group-item-success">z-e-r-0</a>
                <a href="https://github.com/soleh23" className="list-group-item list-group-item-action list-group-item-success">SOLEH23</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

App.contextTypes = {
  router: React.PropTypes.object,
};

App.propTypes = {
  children: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
  }),
};

// Retrieve data from store as props
function mapStateToProps(store) {
  return {
    user: store.user.data,
    getProfileEntered: store.user.entered,
  };
}

export default connect(mapStateToProps)(App);

