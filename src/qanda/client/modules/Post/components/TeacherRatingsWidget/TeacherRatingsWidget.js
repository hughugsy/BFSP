import React, { Component, PropTypes } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import Style
import styles from './TeacherRatingsWidget.css';

export class TeacherRatingsWidget extends Component {
  constructor(props){
    super(props);
    this.state = {
      gradingValue: 5,
      teachingValue: 5,
      workloadValue: 5,
    }
  }
  addPost = () => {
    const nameRef = this.refs.name;
    const gradingRef = this.refs.grading;
    const teachingRef = this.refs.teaching;
    const workloadRef = this.refs.workload;
    const contentRef = this.refs.content;
    if (nameRef.value && contentRef.value && gradingRef && teachingRef && workloadRef) {
      this.props.addPost(nameRef.value, gradingRef.value, teachingRef.value, workloadRef.value, contentRef.value);
      nameRef.value = contentRef.value =  gradingRef.value = teachingRef.value = workloadRef.value = '';
    }
  };
  updateTextInputGrading = (event) => {
    /*var val = document.getElementById('customRange1').value;
    console.log(val);
    document.getElementById('textInputGrading').value = val + " / 10"; 
    */
    this.setState({gradingValue: event.target.value,});
  };
  updateTextInputTeaching = (event) => {
    this.setState({teachingValue: event.target.value,});
  };
  updateTextInputWorkload = (event) => {
    this.setState({workloadValue: event.target.value,}); 
  };
  render() {
    const cls = `${styles.form} ${(this.props.showAddPost ? styles.appear : '')}`;
    return (
          <div className="card" style={{width: '75%'}}>
          <div style = {{paddingLeft: '10px'}}>
          <div className="form-group row">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Grading</label>
            <output className="col-sm-2 col-form-label" id="textInputGrading">{this.state.gradingValue + " / 10"}</output>
            <div className="col-sm-10">
              <input style={{ width: '50%' }} type="range" className="custom-range" id="customRange1" min = "0" max = "10" step = "1" defaultValue = "5" onChange={this.updateTextInputGrading}/>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Teaching</label>
            <output className="col-sm-2 col-form-label" id="textInputTeaching">{this.state.teachingValue + " / 10"}</output>
            <div className="col-sm-10">
              <input style={{ width: '50%' }} type="range" className="custom-range" id="customRange2" min = "0" max = "10" step = "1" defaultValue = "5" onChange={this.updateTextInputTeaching}/>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Workload</label>
            <output className="col-sm-2 col-form-label" id="textInputWorkload">{this.state.workloadValue + " / 10"}</output>
            <div className="col-sm-10">
              <input style={{ width: '50%' }} type="range" className="custom-range" id="customRange3" min = "0" max = "10" step = "1" defaultValue = "5" onChange={this.updateTextInputWorkload}/>
            </div>
          </div>
          <div className="form-group row">
            <div className="col-sm-10">
              <button style={{marginRight: '5px'}}type="submit" className = "btn btn-secondary">Cancel</button>
              <button type="submit" className = "btn btn-primary">Submit</button>
            </div>
          </div>
          </div>
          </div>
        /*<form>
          <div class="form-group">
            <label htmlFor="customRange1">Grading</label> - 
            <output htmlFor="customRange1" id="textInput">5 / 10</output>
            <input type="range" className="custom-range" id="customRange1" min = "0" max = "10" step = "1" defaultValue = "5" onChange={this.updateTextInput}/>
          </div>
        </form>*/
    );
  }
}

TeacherRatingsWidget.propTypes = {
  addPost: PropTypes.func.isRequired,
  showAddPost: PropTypes.bool.isRequired,
};

export default TeacherRatingsWidget;
