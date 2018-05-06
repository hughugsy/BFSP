import React, { Component, PropTypes } from 'react';
import { FormattedMessage } from 'react-intl';
import { getLoginSuccess, getLoginFailure} from '../../UserReducer';
import { myLoginSuccess, loginFailure} from '../../UserActions';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { Link } from 'react-router';

// Import Style
import styles from './LoginForm.css';

export class LoginForm extends Component {
  onLogin = () => {
    if (this.props.success)
      this.props.dispatch(myLoginSuccess());
    if (this.props.failure)
      this.props.dispatch(loginFailure());

    const usernameRef = this.refs.username;
    const passwordRef = this.refs.password;
    if (usernameRef.value && passwordRef.value) {
      this.props.login(usernameRef.value, passwordRef.value);
      passwordRef.value = '';
    }
  };
  componentWillUnmount(){
    if (this.props.success)
      this.props.dispatch(myLoginSuccess());
    if (this.props.failure)
      this.props.dispatch(loginFailure());
  }
  render() {
    let myAlert = this.props.success ? (
      <div className="alert alert-success" role="alert">
        <p style={{marginRight: '5px'}}>Login Successful</p>
        <Link className = "button-primary" to='/'>Continue To Homepage</Link>
      </div>
    ) : null;
    myAlert = this.props.failure ? (
      <div className="alert alert-danger" role="alert">
        Login Failed
      </div>
    ) : myAlert;
    return (
      <div>
      {myAlert}
      <div className={styles['form-content']}>
        <h2 className={styles['form-title']}><FormattedMessage id="loginTitle" /></h2>
        <input placeholder="username" className={styles['form-field']} ref="username" />
        <input placeholder="password" className={styles['form-field']} ref="password" type="password" />
        <a className={styles['submit-button']} onClick={this.onLogin}><FormattedMessage id="submit" /></a>
      </div>
      </div>
    );
  }
}

LoginForm.propTypes = {
  login: PropTypes.func.isRequired,
};
function mapStateToProps(state, props){
  return{
    success: getLoginSuccess(state),
    failure: getLoginFailure(state),
  };
}
export default connect(mapStateToProps)(LoginForm);