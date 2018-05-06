import React, { Component, PropTypes } from 'react';
import { FormattedMessage } from 'react-intl';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';
import { getRegisterSuccess, getRegisterFailure} from '../../UserReducer';
import { registerSuccess, registerFailure} from '../../UserActions';
import { Link } from 'react-router';

// Import Style
import styles from './RegisterForm.css';

export class RegisterForm extends Component {
  onRegister = () => {
    if (this.props.success)
      this.props.dispatch(registerSuccess());
    if (this.props.failure)
      this.props.dispatch(registerFailure());

    const usernameRef = this.refs.username;
    const passwordRef = this.refs.password;
    if (usernameRef.value && passwordRef.value) {
      this.props.register(usernameRef.value, passwordRef.value);
      passwordRef.value = '';
    }
  };

  componentWillUnmount(){
    if (this.props.success)
      this.props.dispatch(registerSuccess());
    if (this.props.failure)
      this.props.dispatch(registerFailure());
  }
  render() {
    let myAlert = this.props.success ? (
      <div className="alert alert-success" role="alert">
        <p style={{marginRight: '5px'}}>Registration Successful</p>
        <Link className = "button-primary" to='/'>Continue To Homepage</Link>
      </div>
    ) : null;
    myAlert = this.props.failure ? (
      <div className="alert alert-danger" role="alert">
        Registration Failed
      </div>
    ) : myAlert;
    return (
      <div>
        {myAlert}
        <div className={styles['form-content']}>
          <h2 className={styles['form-title']}><FormattedMessage id="registerTitle" /></h2>
          <input placeholder="username" className={styles['form-field']} ref="username" />
          <input placeholder="password" className={styles['form-field']} ref="password" type="password" />
          <a className={styles['submit-button']} onClick={this.onRegister}><FormattedMessage id="submit" /></a>
        </div>
      </div>
    );
  }
}

RegisterForm.propTypes = {
  register: PropTypes.func.isRequired,
};

function mapStateToProps(state, props){
  return{
    success: getRegisterSuccess(state),
    failure: getRegisterFailure(state),
  };
}
export default connect(mapStateToProps)(RegisterForm);