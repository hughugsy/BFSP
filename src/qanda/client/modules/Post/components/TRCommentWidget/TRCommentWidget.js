import React, { Component, PropTypes } from 'react';
// import { injectIntl, intlShape, } from 'react-intl';
// import ReactTags from 'react-tag-autocomplete';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import Style
import styles from './TRCommentWidget.css';

export class TRCommentWidget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
    };
  }
  addPost = () => {
    const { content } = this.state;
    if (content) {
      this.props.addPost(content, this.props.teacher);
      this.setState({
        content: '',
      });
    }
  };

  handleContentChange = (event) => {
    this.setState({
      content: event.target.value,
    });
  }

  render() {
    // const cls = `${styles.form} ${(this.props.showAddPost ? styles.appear : '')}`;
    const { classes } = this.props;
    return (
      <div>
            <textarea style={{rows: '5', cols: '20', marginLeft: '10px'}} onChange = {this.handleContentChange}></textarea>
            <div className="input-group">
              <button className="btn btn-secondary" style = {{marginRight: '5px', marginLeft: '15px'}} onClick={this.props.cancelPost} >Cancel</button>
              <button className="btn btn-primary" onClick={this.addPost}>Comment</button>
            </div>
        </div>
    );
  }
}

TRCommentWidget.propTypes = {
  addPost: PropTypes.func.isRequired,
  // showAddPost: PropTypes.bool.isRequired,
  cancelPost: PropTypes.func.isRequired,
  teacher: PropTypes.string.isRequired,
};

export default TRCommentWidget;
