import React, { Component, PropTypes } from 'react';
// import { injectIntl, intlShape, } from 'react-intl';
// import ReactTags from 'react-tag-autocomplete';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';

// Import Style
import styles from './AnswerWidget.css';

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
      this.props.addPost(content);
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
    const { classes } = this.props;
    return (
      <div>
        <div className={styles['form-content']}>
          <Paper className={classes.root} elevation={4}>
            <div className={classes.container}>
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
    );
  }
}

AnswerWidget.propTypes = {
  addPost: PropTypes.func.isRequired,
  // showAddPost: PropTypes.bool.isRequired,
  cancelPost: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(materialStyles)(AnswerWidget);
