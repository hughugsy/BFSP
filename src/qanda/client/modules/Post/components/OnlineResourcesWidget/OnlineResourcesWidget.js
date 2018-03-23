import React, { Component, PropTypes } from 'react';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';
import ReactTags from 'react-tag-autocomplete';
import Button from 'material-ui/Button';

// Import Style
import styles from './OnlineResourcesWidget.css';
import tagStyles from './Tags.css';

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
    };
  }
  addPost = () => {
    const titleRef = this.refs.title;
    const contentRef = this.refs.content;
    if (titleRef.value && contentRef.value) {
      this.props.addPost(titleRef.value, contentRef.value);
      titleRef.value = contentRef.value = '';
    }
  };

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
  <a className={styles['post-submit-button']} href="#" onClick={this.addPost}><FormattedMessage id="submit" /></a>
  <a className={styles['post-submit-button']} href="#" onClick={this.props.cancelPost}>Cancel</a>
  */
  render() {
    const cls = `${styles.form} ${(this.props.showAddPost ? styles.appear : '')}`;
    return (
      <div className={cls}>
        <div className={styles['form-content']}>
          <h2 className={styles['form-title']}><FormattedMessage id="createNewPost" /></h2>
          <input placeholder={this.props.intl.messages.postTitle} className={styles['form-field']} ref="title" />
          <textarea placeholder={this.props.intl.messages.postContent} className={styles['form-field']} ref="content" />
          <ReactTags
            tags={this.state.tags} suggestions={this.state.suggestions} handleDelete={this.handleDelete}
            handleAddition={this.handleAddition} classNames={this.state.classNames}
          />
          <Button variant="raised" color="primary" onClick={this.addPost}>Post</Button>
          <Button variant="raised" color="secondary" onClick={this.props.cancelPost} >Cancel</Button>
        </div>
      </div>
    );
  }
}

OnlineResourcesWidget.propTypes = {
  addPost: PropTypes.func.isRequired,
  showAddPost: PropTypes.bool.isRequired,
  cancelPost: PropTypes.func.isRequired,
  intl: intlShape.isRequired,
};

export default injectIntl(OnlineResourcesWidget);
