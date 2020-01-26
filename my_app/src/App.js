import React from 'react';
import logo from './logo.svg';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import download from 'react-mdl';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import DownloadButton from './screens/resume'
import agent_file from './downloadableFiles/BradleySundsbarmResumeCS2020.pdf';
// import {
//   Toolbar,
//   IconButton,
//   classes,
//   MenuIcon,
//   Typography,
// } from '@material-ui/core/';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 2,
  },
  buttonNav:{
    backgroundColor:'#282c34',
    padding: 12,
    color: "white",
    // flexGrow: 4,

  },
}));

{/* <a href="mailto:brian.atiyeh@gmail.com" 
class="btn btn-layered offset square" role="button" 
aria-pressed="true">hire me</a> */}

function App() {

  const classes = useStyles();
  return (
    // <Container fixed>
    <div className="App">
      <div classes = {classes.root}>
        <AppBar position="fixed">
          <Toolbar>
          <Grid
            justify="center" 
            container 
            // spacing={24}
          >
            {/* <Typography variant="h6" className={classes.title}>
              Bradley Sundsbarm
            </Typography> */}
            <Grid item>
            <Button variant="contained"
                    className={classes.buttonNav}
                    href={agent_file} download="BradleySundsbarmResume2020.pdf"
            >
                Download My Resume
            </Button>
            </Grid>
            &nbsp;&nbsp;&nbsp;
            <Grid item>
            <Button variant="contained" 
                    className={classes.buttonNav}
                    href="mailto:bsunds@gmail.com"
            >
                Hire Me
            </Button>
            </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bradley Sundsbarm
        </p>
        
        <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">

            <Button variant="contained" 
                    color="primary" 
                    href="https://github.com/Valk67?tab=repositories"
                    target="_blank"
                    rel="noopener noreferrer"
            >
              Github
            </Button>
            <Button variant="contained" 
                    color="primary" 
                    href="https://www.linkedin.com/in/bradley-sundsbarm-b3834a133/"
                    target="_blank"
                    rel="noopener noreferrer"
            >
              Linkedin
            </Button>
            <Button variant="contained" 
                    color="primary" 
                    href="https://www.facebook.com/bradley.sundsbarm"
                    target="_blank"
                    rel="noopener noreferrer"
            >
              Facebook
            </Button>
        </ButtonGroup>
         
           {/* <a
            className="App-link"
            href="https://www.linkedin.com/in/bradley-sundsbarm-b3834a133/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </a> */}
          
      </header>
    </div>
    // </Container>
  );
}


export default App;
