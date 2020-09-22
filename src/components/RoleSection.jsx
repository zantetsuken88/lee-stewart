import React from 'react';
import Chip from '@material-ui/core/Chip';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import { Card, CardContent, Typography } from '@material-ui/core';
import './RoleSection.scss';
import PropTypes from 'prop-types';

export default function RoleSection ({ data }) {
  return (
    <div className='role-container'>
      <div className='label-container'>
        <svg viewBox='0 0 1 1' className='year-line-top' preserveAspectRatio='none'>
          <line x1='50%' y1='0' x2='50%' y2='100%'/>
        </svg>
        <WorkOutlineIcon className='year-label' fontSize='large'/>
        <Typography variant='button' className='year-text'>{data.year}</Typography>
        <svg viewBox='0 0 1 1' className='year-line-bottom' preserveAspectRatio='none'>
          <line x1='50%' y1='0%' x2='50%' y2='100%'/>
        </svg>
      </div>
      <div>
        <Card className='job-description'>
          <CardContent className='job-stats-container'>
            <Chip className={`chip chip${data.chipClass} chip${data.chipClass}-outer`}
                  variant='outlined'
                  label={<Typography variant='body2'>{data.company}</Typography>}/>
            <Chip className={`chip chip${data.chipClass} chip${data.chipClass}-inner`}
                  label={<Typography variant='body2'>{data.jobTitle}</Typography>}/>
            <Chip className={`chip chip${data.chipClass} chip${data.chipClass}-outer`}
                  variant='outlined'
                  label={<Typography variant='body2'>{data.yearRange}</Typography>}/>
          </CardContent>
          {data.jobDescription.map((bullet, i) =>
            <Typography variant='body2' key={`data.jobTitle${i}`}>{bullet}</Typography>
          )}
        </Card>
      </div>
    </div>
  );
}

RoleSection.propTypes = {
  data: PropTypes.shape({
    year: PropTypes.string,
    jobDescription: PropTypes.array,
    yearRange: PropTypes.string,
    jobTitle: PropTypes.string,
    company: PropTypes.string,
    chipClass: PropTypes.string
  })
};
