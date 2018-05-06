import React, { Component, PropTypes } from 'react';
import { FormattedMessage } from 'react-intl';
import { getUpdateSuccess, getUpdateFailure} from '../../UserReducer';
import { updateUserInfoSuccess, updateUserInfoFailure} from '../../UserActions';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';
import { Link } from 'react-router';
// Import Style
import styles from './ProfileForm.css';

export class ProfileForm extends Component {
  onUpdate = () => {
    if (this.props.success)
      this.props.dispatch(updateUserInfoSuccess());
    if (this.props.failure)
      this.props.dispatch(updateUserInfoFailure());
    const newPasswordRef = this.refs.newPassword;
    if (newPasswordRef.value) {
      this.props.updateInfo(newPasswordRef.value);
      newPasswordRef.value = '';
    }
  };
  componentWillUnmount(){
    if (this.props.success)
      this.props.dispatch(updateUserInfoSuccess());
    if (this.props.failure)
      this.props.dispatch(updateUserInfoFailure());
  }
  render() {
    let myAlert = this.props.success ? (
      <div className="alert alert-success" role="alert">
        <p style={{marginRight: '5px'}}>Password Update Successful</p>
        <Link className = "button-primary" to='/'>Continue To Homepage</Link>
      </div>
    ) : null;
    myAlert = this.props.failure ? (
      <div className="alert alert-danger" role="alert">
        Password Update Failed
      </div>
    ) : myAlert;
    return (
      <div>
      {myAlert}
      <div className={styles['form-content']}>
        <h2 className={styles['form-title']}>{this.props.user.username}<FormattedMessage id="profileTitle" /></h2>
        <input placeholder="new password" className={styles['form-field']} ref="newPassword" type="password" />
        <a className={styles['submit-button']} onClick={this.onUpdate}><FormattedMessage id="submit" /></a>
      </div>
      </div>
    );
  }
}

ProfileForm.propTypes = {
  updateInfo: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};
function mapStateToProps(state, props){
  return{
    success: getUpdateSuccess(state),
    failure: getUpdateFailure(state),
  };
}

export default connect(mapStateToProps)(ProfileForm);