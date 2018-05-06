import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
//import 'bootstrap/dist/css/bootstrap.min.css';

import TeacherRatingsWidget from '../TeacherRatingsWidget/TeacherRatingsWidget';

// Import Style
import styles from './TeacherRatingsItem.css';

class TeacherRatingsItem extends Component {
  constructor(props){
    super(props);
    this.state = {
      showRateForm: false,
    }
  }
  handleClickRate = () => {
    this.setState({showRateForm: true});
  }
  handleClickCancel = () =>{
    this.setState({showRateForm: false});
  }
  render(){
    const { post } = this.props;
    let pageContent;
    if (!this.state.showRateForm){
      pageContent = (<button className="btn btn-primary" onClick = {this.handleClickRate}>Rate</button>);
    }
    else{
      pageContent = (
        <div>
          <TeacherRatingsWidget handleClickCancel = {this.handleClickCancel} addPost = {this.props.addPost} teacher={post.name } showAddPost = {true} />
        </div>
      );
    }
    /*<div className={styles['single-post']}>
          <h3 className={styles['post-title']}>
            <Link to={`/trcomments/${this.props.post.slug}-${this.props.post.cuid}`} >
              {this.props.post.name}
            </Link>
          </h3>
          <p className={styles['post-desc']}>Grading: {this.props.post.grading}</p>
          <p className={styles['post-desc']}>Teaching: {this.props.post.teaching}</p>
          <p className={styles['post-desc']}>Workload: {this.props.post.workload}</p>
          <p className={styles['post-desc']}>{this.props.post.content}</p>
          {pageContent}
          <hr className={styles.divider} />
        </div>*/
        const grading = this.props.post.grading*10 + '%';
        const gradingValue = this.props.post.grading*10 + '/100';
        const teaching = this.props.post.teaching*10 + '%';
        const teachingValue = this.props.post.teaching*10 + '/100';
        const workload = this.props.post.workload*10 + '%';
        const workloadValue = this.props.post.workload*10 + '/100';
    return (
        <div className="card">
          {/*<img className="card-img-top" src="./emelio.jpg" alt="Card image cap"/>*/}
          <div className="card-body">
            <h5 className="card-title"><Link to={`/trcomments/${this.props.post.slug}-${this.props.post.cuid}`}>{this.props.post.name}</Link></h5>
            <div className="progress " style = {{marginBottom: '10px', height: '20px'}}>
              <div className="progress-bar progress-bar-striped progress-bar-animated bg-info" role="progressbar" style={{width: grading}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">Grading: {gradingValue}</div>
            </div>
            <div className="progress" style = {{marginBottom: '10px', height: '20px'}}>
              <div className="progress-bar progress-bar-striped progress-bar-animated bg-info" role="progressbar" style={{width: teaching}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">Teaching: {teachingValue}</div>
            </div>
            <div className="progress" style = {{marginBottom: '10px', height: '20px'}}>
              <div className="progress-bar progress-bar-striped progress-bar-animated bg-info" role="progressbar" style={{width: workload}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">Workload: {workloadValue}</div>
            </div>
            {pageContent}
          </div>
        </div>
    );
  }
}

TeacherRatingsItem.propTypes = {
  post: PropTypes.shape({
    path: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    grading: PropTypes.number.isRequired,
    teaching: PropTypes.number.isRequired,
    workload: PropTypes.number.isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  }).isRequired,
};

export default TeacherRatingsItem;
