import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(
  {
    detailsBar: {
      margin: '0px',
      display: 'grid',
      gridTemplateRows: '120px',
      gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr'
    },
    cell: {
      color: 'lightgrey',
      borderColor: 'grey',
      padding: '0px',
    },
    paper: {
      backgroundColor: 'transparent',
      width: 'fit-content',
      padding: '0px 5px',
      color: '#f50057',
      borderColor: 'grey',
      placeSelf: 'center'
    },
    text: {
      margin: '1px'
    },
    logo: {
      placeSelf: 'center',
      height: '64px',
      width: '64px'
    }
  });

export default function PersonalDetailsHeader() {
  const classes = useStyles();
  return (
         <Grid
           container
           direction='row'
           justify='space-evenly'
           alignItems='center'
         >
           <Grid item xs={3} style={{ display: 'grid' }}>
             <Paper className={classes.paper} elevation={4}>
               <img
                 src={require('../media/profilephoto.jpg')}
                 style={{ height: '192px', width: '192px', gridColumnStart: '0' }}
                 alt='Lee Stewart'
                 color='transparent'
               />
               <Typography variant='h4' style={{ color: '#f50057'}} >
                 Lee Stewart
               </Typography>
             </Paper>
           </Grid>
           <Grid item xs className={classes.detailsBar}>
             <a href='https://github.com/zantetsuken88' target='_blank' rel='noopener noreferrer' className={classes.logo}>
             <img
               src={require('../media/github-logo.svg')}
               style={{ height: '64px', width: '64px', gridColumnStart: '0' }}
               alt='github logo'
               color='transparent'
             />
             </a>
             <a
               href='mailto:lee.stewart@alumni.dmu.ac.uk'
               target='_blank'
               rel='noopener noreferrer'
               className={classes.logo}
               style={{ gridColumnStart: '3' }}
             >
             <img
               src={require('../media/mail.svg')}
               style={{ height: '64px', width: '64px' }}
               alt='mail logo'
               color='transparent'
             />
             </a>
             <a
               href='https://www.linkedin.com/in/lee-stewart-684839ba/'
               target='_blank'
               rel='noopener noreferrer'
               className={classes.logo}
               style={{ gridColumnStart: '5' }}
             >
             <img
               src={require('../media/linkedin.svg')}
               style={{ height: '64px', width: '64px' }}
               alt='linkedin logo'
               color='transparent'
             />
             </a>
           </Grid>
         </Grid>
         );
}