import React, { Component, PropTypes } from 'react';
// import { injectIntl, intlShape, } from 'react-intl';
// import ReactTags from 'react-tag-autocomplete';
import 'bootstrap/dist/css/bootstrap.min.css';
import Select from 'react-select';
import 'react-select/dist/react-select.css';



export class TutorshipWidget extends Component {
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



  render() {
  
    return (
      <form onSubmit={this.handleSubmit} >
      <div className="container" style={{padding: '10px', border: '1px solid #AAAAAA', width: '80%'}} >
        <div className="panel panel-default" >
          <div className="panel-heading">
            <table className="table table-bordered" >
              <thead >
                <tr >
                  <th style={{ verticalAlign: 'middle' }}> Course: </th>
                  <th style={{ width: '90%' }}>
                            <Select
                            name="form-field-name"
                            value={[]}
                            onChange={this.handleChange}
                            multi={true}
                            simpleValue={true}
                            options={[
                              { value: 'CS101', label: 'CS101' },
                              { value: 'CS102', label: 'CS102' },
                              { value: 'CS201', label: 'CS201' },
                              { value: 'CS202', label: 'CS202' },
                              { value: 'CS223', label: 'CS223' },
                              { value: 'CS224', label: 'CS224' },
                              { value: 'CS342', label: 'CS342' },
                              { value: 'CS353', label: 'CS353' },
                              { value: 'CS473', label: 'CS473' },
                              { value: 'CS476', label: 'CS476' },
                            ]}
                            />
                </th>
                </tr>
              </thead>
            </table>
          </div>

          <div className="panel-body" style={{overflow: 'hidden'}}>
              <input type="text" onChange={this.handleTitleChange} placeholder="write your title here" style={{width: '38%',     padding: '5px 5px',  margin: '5px 0'}} />
              <textarea  onChange={this.handleContentChange} className="form-control" rows="5" ></textarea>
              <div style={{float: 'right'}}>
                <button type="submit"  style={{marginTop: '5px', marginRight: '2px'}} className="btn btn-secondary" onClick={this.props.cancelPost} >CANCEL</button>         
                <button type="submit" style={{marginTop: '5px'}} className="btn btn-primary" onClick={this.addPost}>POST</button>
              </div>
          </div>
        </div>
      </div>     
    </form>
    );
  }
}

TutorshipWidget.propTypes = {
  addPost: PropTypes.func.isRequired,
  cancelPost: PropTypes.func.isRequired,
};

// export default injectIntl(TutorshipWidget);
export default TutorshipWidget;
