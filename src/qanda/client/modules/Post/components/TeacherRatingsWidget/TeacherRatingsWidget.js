import React, { Component, PropTypes } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Select from 'react-select';
// import 'react-select/dist/react-select.css';


export class TeacherRatingsWidget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gradingValue: 5,
      teachingValue: 5,
      workloadValue: 5,
      selectedOption: [],
    };
  }
  addPost = () => {
    const { teacher } = this.props;
    const { gradingValue, teachingValue, workloadValue, selectedOption } = this.state;
    if (teacher && gradingValue && teachingValue && workloadValue) {
      this.props.addPost(selectedOption, teacher, gradingValue, teachingValue, workloadValue);
    }
  };
  updateTextInputGrading = (event) => {
    /* var val = document.getElementById('customRange1').value;
    console.log(val);
    document.getElementById('textInputGrading').value = val + " / 10";
    */
    this.setState({ gradingValue: event.target.value });
  };
  updateTextInputTeaching = (event) => {
    this.setState({ teachingValue: event.target.value });
  };
  updateTextInputWorkload = (event) => {
    this.setState({ workloadValue: event.target.value });
  };
  handleChange = (value) => {
    const array = value.split(',');
    this.setState({ selectedOption: array });
  }

  render() {
    const { selectedOption } = this.state;
    return (
          <div>
          <Select
            name="form-field-name"
            value={selectedOption}
            onChange={this.handleChange}
            multi
            simpleValue
            options={[
                            { value: 'cs101', label: 'CS101' },
                            { value: 'cs102', label: 'CS102' },
                            { value: 'cs201', label: 'CS201' },
                            { value: 'cs202', label: 'CS202' },
                            { value: 'cs319', label: 'CS319' },
                            { value: 'cs421', label: 'CS421' },
            ]}
          />
          <div className="form-group row">
            <label htmlFor="inputEmail3" style={{ marginLeft: '15px', marginTop: '5px' }} id="textInputGrading">{'Grading   ' + this.state.gradingValue + ' / 10'}</label>
            <div className="col-sm-10">
              <input style={{ width: '50%' }} type="range" className="custom-range" id="customRange1" min="0" max="10" step="1" defaultValue="5" onChange={this.updateTextInputGrading} />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="inputEmail3" style={{ marginLeft: '15px' }} id="textInputTeaching">{'Teaching   ' + this.state.teachingValue + ' / 10'}</label>
            <div className="col-sm-10">
              <input style={{ width: '50%' }} type="range" className="custom-range" id="customRange2" min="0" max="10" step="1" defaultValue="5" onChange={this.updateTextInputTeaching} />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="inputEmail3" style={{ marginLeft: '15px' }} id="textInputWorkload">{'Workload   ' + this.state.workloadValue + ' / 10'}</label>
            <div className="col-sm-10">
              <input style={{ width: '50%' }} type="range" className="custom-range" id="customRange3" min="0" max="10" step="1" defaultValue="5" onChange={this.updateTextInputWorkload} />
            </div>
          </div>
          <div className="form-group row">
            <div className="col-sm-10">
              <button type="submit" className="btn btn-primary" onClick={this.addPost}>Submit</button>
            </div>
          </div>

          </div>


    );
  }
}

TeacherRatingsWidget.propTypes = {
  addPost: PropTypes.func.isRequired,
  showAddPost: PropTypes.bool.isRequired,
};

export default TeacherRatingsWidget;
