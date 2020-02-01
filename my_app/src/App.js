import React from 'react';
import logo from './logo.svg';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
// import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Avatar from '@material-ui/core/Avatar';
import agent_file from './downloadableFiles/BradleySundsbarmResumeCS2020.pdf';
import myAvatar from './downloadableFiles/self.jpeg';
import chicoState from './downloadableFiles/CSUCHICO.png';
import Paper from '@material-ui/core/Paper';
// import FormLabel from '@material-ui/core/FormLabel';
// import ResizeImage from 'react-resize-image'



const useStyles = makeStyles(theme => ({
  toolbar: theme.mixins.toolbar,
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(9),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    alignSelf: 'center',

  },
  paper2: {
    marginTop: 35,
    padding: theme.spacing(9),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    alignSelf: 'center',

  },
  control: {
    padding: theme.spacing(2),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  buttonNav:{
    backgroundColor:'#282c34',
    padding: 12,
    color: "white",
    // flexGrow: 4,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  large: {    
    // justifyContent: 'center',
    // alignItems: 'center',
    marginTop: 33,
    marginBottom: 33,
    marginLeft: '30%',
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
  gridCards: { //controls the container for the 2 main grids
    justifyContent: 'center',
    marginTop: 5,
  },
  control: {
    padding: 20,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    marginTop: -30

  },
  bottomGrid: {
    marginTop: 0,
    // flexDirection: 'row',
    // justifyContent: 'space-between',
  },
  headerStyle: {
    alignSelf: 'center',
    justifyContent: 'center',
    justify: 'center',

  }
}));


function App() {

  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  return (
    <div className="App">
     <div className={classes.root}>
       
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <Grid
            justify="center"
            container 
          >
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
                    Email Me
                </Button>
              </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

     <div className={classes.toolbar} /> 

      <Grid container spacing={7} className={classes.gridCards}>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <h1 className={classes.headerStyle}> Bradley Sundsbarm's Career Website, Welcomes You!
            <Avatar alt="Bradley Sundsbarm" src={myAvatar} className={classes.large} />
            </h1>
            Former Air Traffic Controller in the United States Navy,
            currently persuing Software Engineering as my new career.
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper2}>
            <h3 className={classes.headerStyle}>
              Built with React
              {/* &nbsp; */}
            </h3>
            <img src={logo} className="App-logo" alt="logo" />

              <ButtonGroup className={classes.headerStyle}
                           variant="contained" 
                           color="primary" 
                           aria-label="contained primary button group">

                <Button color="primary" 
                        href="https://github.com/Valk67?tab=repositories"
                        target="_blank"
                        rel="noopener noreferrer"
                >
                  Github
                </Button>
                <Button color="primary" 
                        href="https://www.linkedin.com/in/bradley-sundsbarm-b3834a133/"
                        target="_blank"
                        rel="noopener noreferrer"
                >
                  Linkedin
                </Button>
                <Button color="primary" 
                        href="https://www.facebook.com/bradley.sundsbarm"
                        target="_blank"
                        rel="noopener noreferrer"
                >
                  Facebook
                </Button>
              </ButtonGroup>
            <p>
              {bull}All links will open a new tab and redirect.
            </p>
          
          </Paper>
        </Grid>  
        <Grid item xs={6}>
        <Paper className={classes.control}>
          <Grid className={classes.bottomGrid}>
            <Grid item>
            <img src={chicoState} className="App-chico" alt="logo" />
        
              Bachelor of Science in Computer Science. Chico State University, DEC 2019.
              
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      </Grid>
     </div>
    </div>
  );
}
// maybe us <p> for the text above
   

export default App;

