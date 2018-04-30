import React, { Component, PropTypes } from 'react';
// import { injectIntl, intlShape, } from 'react-intl';
// import ReactTags from 'react-tag-autocomplete';

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
      this.props.addPost(content);
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
        <div className={styles['form-content']}>
              <textarea name="Text1" cols="40" rows="5" onChange = {this.handleContentChange}></textarea>
            <button onClick={this.addPost}>Comment</button>
            <button onClick={this.props.cancelPost} >Cancel</button>
        </div>
      </div>
    );
  }
}

TRCommentWidget.propTypes = {
  addPost: PropTypes.func.isRequired,
  // showAddPost: PropTypes.bool.isRequired,
  cancelPost: PropTypes.func.isRequired,
};

export default TRCommentWidget;
