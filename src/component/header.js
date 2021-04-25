import React,{Fragment} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import {  makeStyles } from '@material-ui/core/styles';
// rtl
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { useLocation } from "react-router-dom";

import "./Style.css";


// rtl
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  AppBarColor:{

   backgroundColor:"#f4511e"

  },
  imgesElevetus:{
    marginLeft:'20px',
  }
 
}));

    export default function SearchAppBar() {
      const classes = useStyles();

      let query = useQuery();

      const { t } = useTranslation();

      function handleClick1(lang ) {
            // i18next.changeLanguage(lang);
            document.body.style.direction="ltr";
          }
          function handleClick2(lang ) {
            // i18next.changeLanguage(lang);
            document.body.style.direction="rtl";
          }
      return (
      <Fragment>
            
        <div className={classes.root}>
         

            <AppBar position="static" className={classes. AppBarColor}>
            <Toolbar className="imgesElevetus">
             <a href="#Home">    <img src="https://lh5.googleusercontent.com/EE1ndp2cSYjwaGDC5sA-hgmqFEi5fvJ1NGDDc8AS0_mElrGOnGeD8It0-PPuhGhhnOEqpoL8ib17l6kZDcEGYvB0WBjk1atgS3aXLzGai0CGtuhg43dlyilWa1u8GnEmBTIRYZ6D" width= '50px'height="50px" className={classes. imgesElevetus} /> </a> 

              <Typography   className="jobWord" variant="h6" noWrap >
                <strong  style={{marginLeft:"15px"}}> Jobs</strong>
            </Typography>

            </Toolbar>

          </AppBar>
          {/* languges */}
           <Button  className="english"  onClick={()=>handleClick1('en')} >
                English
            </Button>
            <Button  className="arabic"   onClick={()=>handleClick2('ar')}   >
              Arabic
            </Button>
           {/* ./languges */}

        </div>


      </Fragment>
      );
    }