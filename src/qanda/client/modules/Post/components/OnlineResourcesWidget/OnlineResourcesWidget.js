import React, { Component, PropTypes } from 'react';


export class OnlineResourcesWidget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
    };
  }
  addPost = () => {
    /* const titleRef = this.refs.title;
    const contentRef = this.refs.content;
    if (titleRef.value && contentRef.value) {
      this.props.addPost(titleRef.value, contentRef.value);
      titleRef.value = contentRef.value = '';
    }*/
    const { title, content } = this.state;
    if (title && content) {
      this.props.addPost(title, content);
      this.setState({
        title: '',
        content: '',
      });
    }
  };

  handleTitleChange = (event) => {
    this.setState({
      title: event.target.value,
    });
  }

  handleContentChange = (event) => {
    this.setState({
      content: event.target.value,
    });
  }

  handleDelete = (i) => {
    const tags = this.state.tags.slice(0);
    tags.splice(i, 1);
    this.setState({ tags });
  }

  handleAddition = (tag) => {
    const tags = [].concat(this.state.tags, tag);
    this.setState({ tags });
  }

  render() {
    // const cls = `${styles.form} ${(this.props.showAddPost ? styles.appear : '')}`;

    return (
      <div></div>

    );
  }
}

OnlineResourcesWidget.propTypes = {
  addPost: PropTypes.func.isRequired,
  showAddPost: PropTypes.bool.isRequired,
  cancelPost: PropTypes.func.isRequired,
};

export default OnlineResourcesWidget;

/*

<div className={cls}>
        <div className={styles['form-content']}>
          <Paper className={classes.root} elevation={4}>
            <div className={classes.container}>
              <TextField
                onChange={this.handleTitleChange}
                label="Title"
                InputProps={{
                  disableUnderline: true,
                  classes: {
                    root: classes.textFieldRoot,
                    input: classes.titleFieldInput,
                  },
                }}
                InputLabelProps={{
                  shrink: true,
                  className: classes.textFieldFormLabel,
                }}
              />
              <TextField
                onChange={this.handleContentChange}
                multiline
                label="Description"
                id="bootstrap-input"
                InputProps={{
                  disableUnderline: true,
                  classes: {
                    root: classes.textFieldRoot,
                    input: classes.contentFieldInput,
                  },
                }}
                InputLabelProps={{
                  shrink: true,
                  className: classes.textFieldFormLabel,
                }}
              />
            </div>
            <div></div>
            <Button variant="raised" color="primary" onClick={this.addPost}>Post</Button>
            <Button variant="raised" color="secondary" onClick={this.props.cancelPost} >Cancel</Button>
          </Paper>
        </div>
      </div>
*/
