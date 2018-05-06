import React, { Component, PropTypes } from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';

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
    const { teacher } = this.props;
    //const nameRef = this.refs.name;
    const gradingRef = this.state.gradingValue;
    const teachingRef = this.state.teachingValue;
    const workloadRef = this.state.workloadValue;
    //const contentRef = this.refs.content;
    if (teacher && gradingRef && teachingRef && workloadRef) {
      this.props.addPost(teacher, gradingRef, teachingRef, workloadRef);
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
          <div>
          <div className="form-group row">
            <label htmlFor="inputEmail3" style = {{marginLeft: '15px', marginTop: '5px'}} id="textInputGrading">{"Grading   " + this.state.gradingValue + " / 10"}</label>
            <div className="col-sm-10">
              <input style={{ width: '50%' }} type="range" className="custom-range" id="customRange1" min = "0" max = "10" step = "1" defaultValue = "5" onChange={this.updateTextInputGrading}/>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="inputEmail3" style = {{marginLeft: '15px'}} id="textInputTeaching">{"Teaching   " + this.state.teachingValue + " / 10"}</label>
            <div className="col-sm-10">
              <input style={{ width: '50%' }} type="range" className="custom-range" id="customRange2" min = "0" max = "10" step = "1" defaultValue = "5" onChange={this.updateTextInputTeaching}/>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="inputEmail3" style = {{marginLeft: '15px'}} id="textInputWorkload">{"Workload   " + this.state.workloadValue + " / 10"}</label>
            <div className="col-sm-10">
              <input style={{ width: '50%' }} type="range" className="custom-range" id="customRange3" min = "0" max = "10" step = "1" defaultValue = "5" onChange={this.updateTextInputWorkload}/>
            </div>
          </div>
          <div className="form-group row">
            <div className="col-sm-10">
              <button style = {{marginRight: '5px'}} className="btn btn-secondary" onClick = {this.props.handleClickCancel}>Cancel</button>
              <button type="submit" className = "btn btn-primary" onClick = {this.addPost}>Submit</button>
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
