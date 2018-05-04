import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';

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
          <TeacherRatingsWidget addPost = {this.props.addPost} teacher={post.name } showAddPost = {true} />
          <button className="btn btn-secondary" onClick = {this.handleClickCancel}>Cancel</button>
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
    return (
        <div className="card">
          {/*<img className="card-img-top" src="./emelio.jpg" alt="Card image cap"/>*/}
          <div className="card-body">
            <h5 className="card-title"><Link to={`/trcomments/${this.props.post.slug}-${this.props.post.cuid}`}>{this.props.post.name}</Link></h5>
            <p className="card-text">Grading: {this.props.post.grading}</p>
            <p className="card-text">Teaching: {this.props.post.teaching}</p>
            <p className="card-text">Workload: {this.props.post.workload}</p>
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
  onDelete: PropTypes.func.isRequired,
};

export default TeacherRatingsItem;
