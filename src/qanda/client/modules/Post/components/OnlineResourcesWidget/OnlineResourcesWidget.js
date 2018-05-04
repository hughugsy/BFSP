import React, { Component, PropTypes } from 'react';
// import { injectIntl, intlShape, } from 'react-intl';
// import ReactTags from 'react-tag-autocomplete';
import 'bootstrap/dist/css/bootstrap.min.css';
import Select from 'react-select';
import 'react-select/dist/react-select.css';


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

  </div>
  <a className={styles['post-submit-button']} href="#" onClick={this.addPost}><FormattedMessage id="submit" /></a>
  <a className={styles['post-submit-button']} href="#" onClick={this.props.cancelPost}>Cancel</a>
  */







render() {
  const cls = `${styles.form} ${(this.props.showAddPost ? styles.appear : '')}`;
  const { classes } = this.props;
  const { selectedOption } = this.state;

  return (   
<form onSubmit={this.handleSubmit} >
  <div className="container" style={{padding: '10px', border: '1px solid #AAAAAA', width: '80%'}} >
    <div className="panel panel-default" >
      <div className="panel-heading">
        <table className="table table-bordered" >
          <thead >
            <tr >
              <th style={{ verticalAlign: 'middle' }}> Course </th>
              <th style={{ width: '90%' }}><Select
                        name="form-field-name"
                        value={selectedOption}
                        onChange={this.handleChange}
                        multi={true}
                        simpleValue={true}
                        options={[
                          { value: 'one', label: 'One' },
                          { value: 'two', label: 'Two' },
              ]}
              />
            </th>
            </tr>
          </thead>
        </table>
      </div>

      <div className="panel-body" style={{overflow: 'hidden'}}>
          <textarea className="form-control" rows="5" id="content" ></textarea>
          <div style={{float: 'right'}}>
            <button type="submit"  style={{marginTop: '5px', marginRight: '2px'}} className="btn btn-secondary" onClick={this.props.cancelPost} >CANCEL</button>         
            <button type="submit" style={{marginTop: '5px'}} className="btn btn-primary" onClick={this.addPost}>POST</button>
          </div>
      </div>
    </div>
  </div>     
</form>




  );

/*
    return (




      <div className="container" >         
        <div className="panel panel-default">
          <div className="panel-body">

            
              
            

          </div>
        </div>
      </div>


    );

    */
  }
}

OnlineResourcesWidget.propTypes = {
  addPost: PropTypes.func.isRequired,
  showAddPost: PropTypes.bool.isRequired,
  cancelPost: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

// export default injectIntl(OnlineResourcesWidget);
export default OnlineResourcesWidget;
