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
  handleClickRate = () =>{
    this.setState({showRateForm: true});
  }
  handleClickCancel = () =>{
    this.setState({showRateForm: false});
  }
  handleUpdate = (name, grading, teaching, workload, content) => {

  };
  render(){
    let pageContent;
    if (!this.state.showRateForm){
      pageContent = (<button onClick = {this.handleClickRate}>Rate</button>);
    }
    else{
      pageContent = (
        <div>
          <button onClick = {this.handleClickCancel}>Cancel</button>
          <TeacherRatingsWidget addPost = {this.handleUpdate} showAddPost = {true}/>
        </div>
      );
    }
    return (
      <div className={styles['single-post']}>
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
    content: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default TeacherRatingsItem;
