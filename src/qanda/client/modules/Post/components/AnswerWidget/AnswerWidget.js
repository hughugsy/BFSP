import React, { Component, PropTypes } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';




export class AnswerWidget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
    };
  }
  addPost = () => {
    const { content } = this.state;
    if (content) {
      this.props.addPost(content, this.props.question);
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
    // const { classes } = this.props;
    return (
      <form onSubmit={this.handleSubmit} >
        <div className="container" style={{padding: '10px', border: '1px solid #AAAAAA', width: '80%'}} >
          <div className="panel panel-default" >
            <div className="panel-heading">
              <label for="content">Type your answer here:</label>
            </div>
            <div className="panel-body" style={{overflow: 'hidden'}}>
              <textarea className="form-control" rows="5" id="content"></textarea>
              <div style={{float: 'right'}}>
                <button type="submit" className="btn btn-secondary" onClick={this.props.cancelPost} style={{  marginRight: '3px', marginTop: '5px'}}>CANCEL</button>             
                <button type="submit" className="btn btn-primary" onClick={this.addPost} style={{ marginTop: '5px'}} >POST</button>
              </div >
            </div >
          </div>
        </div>     
      </form>
    );
  }
}

AnswerWidget.propTypes = {
  addPost: PropTypes.func.isRequired,
  // showAddPost: PropTypes.bool.isRequired,
  cancelPost: PropTypes.func.isRequired,
  question: PropTypes.string.isRequired,
};

export default AnswerWidget;
