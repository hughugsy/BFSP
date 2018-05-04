import React, { Component, PropTypes } from 'react';
// import { injectIntl, intlShape, } from 'react-intl';
// import ReactTags from 'react-tag-autocomplete';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Select from 'react-select';
//import 'react-select/dist/react-select.css';

// Import Style
import styles from './OnlineResourcesWidget.css';
import tagStyles from './Tags.css';

const materialStyles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
  },
  textFieldRoot: {
    padding: 0,
    'label + &': {
      marginTop: theme.spacing.unit * 3,
    },
  },
  titleFieldInput: {
    borderRadius: 4,
    backgroundColor: theme.palette.common.white,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 12px',
    width: '150px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
  contentFieldInput: {
    borderRadius: 4,
    backgroundColor: theme.palette.common.white,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 12px',
    width: '450px',
    height: '100px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
  textFieldFormLabel: {
    fontSize: 18,
  },
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
  }),
});

export class OnlineResourcesWidget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: [],
      suggestions: [
        { id: 3, name: 'CS461' },
        { id: 4, name: 'CS421' },
      ],
      classNames: {
        root: tagStyles['react-tags'],
        rootFocused: tagStyles['react-tags.is-focused'],
        selected: tagStyles['react-tags__selected'],
        selectedTag: tagStyles['react-tags__selected-tag'],
        selectedTagName: 'react-tags__selected-tag-name',
        search: tagStyles['react-tags__search'],
        searchInput: tagStyles['react-tags__search-input'],
        suggestions: tagStyles['react-tags__suggestions'],
        suggestionActive: 'is-active',
        suggestionDisabled: 'is-disabled',
      },
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
  /*
  <div className={styles['form-content']}>
    <h2 className={styles['form-title']}><FormattedMessage id="createNewPost" /></h2>
    <input placeholder={this.props.intl.messages.postTitle} className={styles['form-field']} ref="title" />
    <textarea placeholder={this.props.intl.messages.postContent} className={styles['form-field']} ref="content" />
    <ReactTags
      tags={this.state.tags} suggestions={this.state.suggestions} handleDelete={this.handleDelete}
      handleAddition={this.handleAddition} classNames={this.state.classNames}
    />

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
