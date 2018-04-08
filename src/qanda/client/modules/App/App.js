import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import InboxIcon from 'material-ui-icons/Inbox';
import DraftsIcon from 'material-ui-icons/Drafts';
import green from 'material-ui/colors/green';
import { Link } from 'react-router';
import IconButton from 'material-ui/IconButton';

// Import Style
// import styles from './App.css';

const materialStyles = theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: green[500],
    height: '65px',
  },
  drawerPaper: {
    position: 'relative',
    width: '100%',
    float: 'left',
    paddingTop: '65px',
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    minWidth: 0, // So the Typography noWrap works
  },
  container: {
    width: '60%',
    float: 'left',
    paddingTop: '65px',
    paddingLeft: '10px',
  },
  toolbar: theme.mixins.toolbar,
});

// Import Components
<<<<<<< HEAD
import Helmet from 'react-helmet';
import DevTools from './components/DevTools';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AnnouncementItems from './components/Announcement/AnnouncementItems';
=======
// import Helmet from 'react-helmet';
// import DevTools from './components/DevTools';
// import Header from './components/Header/Header';
// import MenuBar from './components/Header/MenuBar';
// import LeftSideBar from './components/LeftSideBar/LeftSideBar';
// import Footer from './components/Footer/Footer';
>>>>>>> 00419ecef5741e9b4a360edf1bd02a10bf6278f7


// Import Actions
import { toggleAddPost } from './AppActions';
// import { switchLanguage } from '../../modules/Intl/IntlActions';

var suhh = [ 
    {
      title: 'suhh',
      content: 'suhh content',
      cuid: 'suhh key',
      dateAdded: 'suhh dateAdded'
    },
    {
      title: 'wusuhh',
      content: 'wusuhh content',
      cuid: 'wusuhh key',
      dateAdded: 'wusuhh dateAdded'
    },
    {
      title: 'wuzuhh',
      content: 'wuzuhh content',
      cuid: 'wuzuhh key',
      dateAdded: 'wuzuhh dateAdded'
    }
  ];

  

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isMounted: false, 
      announcementItems: suhh
    };
  }

  componentDidMount() {
    this.setState({
      isMounted: true}
    ); // eslint-disable-line
  }

  toggleAddPostSection = () => {
    this.props.dispatch(toggleAddPost());
  };
  /*
  <Helmet
    title="MERN Starter - Blog App"
    titleTemplate="%s - Blog App"
    meta={[
      { charset: 'utf-8' },
      {
        'http-equiv': 'X-UA-Compatible',
        content: 'IE=edge',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
    ]}
  />
  <Header
    switchLanguage={lang => this.props.dispatch(switchLanguage(lang))}
    intl={this.props.intl}
    toggleAddPost={this.toggleAddPostSection}
  />
  <Footer />
  */
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="absolute" className={classes.appBar}>
          <Toolbar>
            <IconButton component={Link} to="/" >
              QandA
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" classes={{ paper: classes.drawerPaper }} >
          <List component="nav">
            <ListItem component={Link} to="/onlineresources" button >
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Online Resources" />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText primary="Tutorship" />
            </ListItem>
          </List>
        </Drawer>
        <div className={classes.container}>
          {this.props.children}
>>>>>>> 00419ecef5741e9b4a360edf1bd02a10bf6278f7
        </div>
      </div>
    );
  }
}
// {this.state.isMounted && !window.devToolsExtension && process.env.NODE_ENV === 'development' && <DevTools />}
App.propTypes = {
  children: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  intl: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};

// Retrieve data from store as props
function mapStateToProps(store) {
  return {
    intl: store.intl,
  };
}

export default connect(mapStateToProps)(withStyles(materialStyles)(App));
