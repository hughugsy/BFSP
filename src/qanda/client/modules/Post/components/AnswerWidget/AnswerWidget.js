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
    return (
      <div className="container">
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"> </input>
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label htmlFor="comment">Answer</label>
            <textarea className="form-control" rows="5" id="comment"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">POST</button>
          <button type="submit" className="btn btn-secondary">CANCEL</button>
        </form>
      </div>
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
