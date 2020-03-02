import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  sectionTitle: {
    backgroundColor: 'transparent',
    padding: '0px 5px',
    color: 'black',
    placeSelf: 'center',
    gridColumnStart: '2'
  },
  titleContainer: {
    gridTemplateColumns: '1fr 1fr 1fr',
    display: 'grid'
  },
  sectionContent: {
    color: 'darkgray',
    margin: '1px'
  },
  container: {
    margin: '2rem'
  }
});

export default function CvSection ({sectionTitle, sectionContent}) {
  const classes = useStyles();
  return (
    <Grid
      container
      direction='row'
      justify='space-around'
      alignItems='center'
      className={classes.container}
      >
      <Grid item xs={3} className={classes.titleContainer}>
        <Paper className={classes.sectionTitle}>
          <Typography variant='h5'>{sectionTitle}</Typography>
        </Paper>
      </Grid>
      <Grid item xs>
        <Typography variant='body2' className={classes.sectionContent}>{sectionContent}</Typography>
      </Grid>
    </Grid>
  )
}