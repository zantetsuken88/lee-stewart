import React from 'react';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import { makeStyles } from '@material-ui/core/styles';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import { Card, CardContent, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  roleContainer: {
    "&:last-of-type": {
      "& line": {
        visibility: 'hidden'
      }
    }
  },
  yearLabel: {
    color: 'black',
    gridColumnStart: '2',
    gridRowStart: '2',
    justifySelf: 'center'
  },
  yearText: {
    gridColumnStart: '3',
    gridRowStart: '2',
    alignSelf: 'end',
    justifySelf: 'left',
    color: 'black'
  },
  yearLine: {
    display: 'flex',
    gridColumnStart: '2',
    gridRowStart: '3',
    justifySelf: 'center'
  },
  labelContainer: {
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    gridTemplateRows: '50% 32px auto',
    display: 'grid',
  },
  jobDescription: {
    fontSize: 'small',
    color: 'darkgray',
    backgroundColor: '#f3eded63',
    textAlign: 'left',
    marginBottom: '5px',
    padding: '0px 5px',
    border: '1px solid #968a8a'
  },
  jobStatsContainer: {
    gridTemplateColumns: '1fr 1fr 1fr',
    padding: '5px 0px',
    display: 'grid'
  },
  jobStats: {
    margin: '0px 5px',
    placeSelf: 'center'
  }
});

export default function RoleSection ({year, jobDescription, yearRange, jobTitle, company}) {
  const classes = useStyles();
  return (
    <Grid
      container
      direction='row'
      justify='space-around'
      alignItems='center'
      className={classes.roleContainer}
    >
      <Grid item xs={3} className={classes.labelContainer}>
        <WorkOutlineIcon className={classes.yearLabel} fontSize='large' />
        <Typography variant='h6' className={classes.yearText} >{year}</Typography>
        <svg height='160' width='10' className={classes.yearLine}>
          <line x1='5' y1='0' x2='5' y2='160'
                style={{ stroke: 'black', strokeWidth: '2' }}/>
        </svg>
      </Grid>
      <Grid item xs>
        <Card
          className={classes.jobDescription}
        >
          <CardContent className={classes.jobStatsContainer}>
            <Chip className={classes.jobStats}
                  style={{ gridColumnStart: '1' }}
                  color='secondary'
                  variant='outlined'
                  label={<Typography variant='body2'>{yearRange}</Typography>}/>
            <Chip className={classes.jobStats}
                  style={{ gridColumnStart: '2' }}
                  color='secondary'
                  label={<Typography variant='body2'>{jobTitle}</Typography>}/>
            <Chip className={classes.jobStats}
                  style={{ gridColumnStart: '3' }}
                  color='secondary'
                  variant='outlined'
                  label={<Typography variant='body2'>{company}</Typography>}/>
          </CardContent>
          {jobDescription}
        </Card>
      </Grid>
    </Grid>
  );
}