import React, { useState, useEffect ,Fragment} from 'react';
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import "./Style.css";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import ReactHtmlParser from "react-html-parser";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

//  styling
const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    maxHeight:'380px',
    boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
    backgroundColor: "#fafafa",
   },
  media: {
    height: 1000,
  },
  fontTitle:{
    fontSize:"25px" 
    , color:"#000"
  },
 
});
// ./styling

const Jobs = ({ currentJobs, loading, jobs }) => {
  const classes = useStyles();

  
  const [inputLocation, setinputLocation] = useState('');
  const [inputDescription, setinputDescription] = useState('');
  const [isOpen, setIsOpen] = useState(false);
   

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

    const handleOnChangLocation = (e) => {
      e.preventDefault();
      setinputLocation(e.target.value)
    }
    if (inputLocation.length > 0) {
      currentJobs = jobs.filter((i) => {
        return i.location.toLowerCase(inputLocation).includes(inputLocation.toLowerCase())
      })
    }

    const handleOnChangDescription = (e) => {
      e.preventDefault();
      setinputDescription(e.target.value)
    }
    if (inputDescription.length > 0) {
      currentJobs = jobs.filter((i) => {
        return i.description.toLowerCase(inputDescription).includes(inputDescription.toLowerCase())
      })
    }


    if (loading) {
      return <h2>Loading...</h2>;
    }
    
    const handleDropdownClick = e => {
      e.preventDefault();
      setIsOpen(!isOpen);
    };
  return (
   
     <Container>
        <Fragment>

          {/* input filed */}
          <div style={{margin:'30px 0px 50px 0px'}}>
           <TextField
              type="search"
              id="outlined-search"           
              label="Search-Location"    
              style={{marginRight:'30px '}}   
              variant="outlined"
              onChange={handleOnChangLocation} 
            />

            <TextField
              type="search"
              id="outlined-search"           
              label="Search-Description"       
              variant="outlined"
              onChange={handleOnChangDescription} 
            />

          </div>   
          {/* ./input filed */}

         
        <Grid container spacing={3}>
          {currentJobs.map(job => (
            <Grid item xs={12} sm={4} key={job.id}>
                <Card className={classes.card}>
                 {/* CardContent */}
                  <CardContent>
                    <Typography color="primary" variant="h5">
                    </Typography>
                    <Typography color="textSecondary" variant="subtitle2">
                    <strong className={classes.fontTitle}> {job.title} </strong>
                    </Typography>
                    <Button variant="outlined" color="primary" style={{backgroundColor:"#f4511e" , color:"#fff"}} onClick={handleClickOpen}>
                     View
                  </Button>
                  </CardContent>
                  
                  <CardContent>
                 

                    <Typography color="textSecondary" variant="subtitle2">
                    <p> {job.location} </p>
                    </Typography> <hr className='line'/>

                    <Typography color="textSecondary" variant="subtitle2">
                    <p> {job.type} </p>
                    </Typography> <hr className='line'/>

                    <Typography color="textSecondary" variant="subtitle2">
                    <p> {job.company} </p>
                       {/* pop-up buttom */}
                
                   {/* ./pop-up buttom */}
                    </Typography> 
                 
                  </CardContent>
               {/* ./CardContent */}



                  {/* pop-up Button */}
                  
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >

              <DialogTitle id="alert-dialog-slide-title">{"Sho More Detiles?"}</DialogTitle>

              <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                {ReactHtmlParser(job.description)}
                </DialogContentText>
              </DialogContent>


              <DialogActions>
               
                <Button onClick={handleClose} color="primary">
                  Hide
                </Button>
            
              </DialogActions
              >
        </Dialog>            
   
   
       </Card>
            </Grid>
          
          ))}
               

        </Grid>  
        {/* Cards */}
      </Fragment>
   </Container>
   
  );
};

export default Jobs;