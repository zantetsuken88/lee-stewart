import React from 'react';
import Chip from '@material-ui/core/Chip';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import { Card, CardContent, Typography } from '@material-ui/core';
import './RoleSection.scss';

export default function RoleSection ({year, jobDescription, yearRange, jobTitle, company, chipClass}) {
  const importedClasses = chipClass();
  return (
    <div className='role-container'>
      <div className='label-container'>
        <svg viewBox='0 0 20 100' className='year-line-top' overflow='hidden'>
          <line x1='50%' y1='0' x2='50%' y2='74%'
                style={{ stroke: 'black', strokeWidth: '0.5' }}/>
        </svg>
        <WorkOutlineIcon className='year-label' fontSize='large' />
        <Typography variant='button' className='year-text' >{year}</Typography>
        <svg viewBox='0 0 20 100' className='year-line-bottom' overflow='hidden'>
          <line x1='50%' y1='33%' x2='50%' y2='100%'
                style={{ stroke: 'black', strokeWidth: '0.5' }}/>
        </svg>
      </div>
      <div>
        <Card className='job-description'>
          <CardContent className='job-stats-container'>
            <Chip className={importedClasses.outer}
                  style={{ gridColumnStart: '1' }}
                  color='secondary'
                  variant='outlined'
                  label={<Typography variant='body2'>{company}</Typography>}/>
            <Chip className={importedClasses.inner}
                  style={{ gridColumnStart: '2' }}
                  color='secondary'
                  label={<Typography variant='body2'>{jobTitle}</Typography>}/>
            <Chip className={importedClasses.outer}
                  style={{ gridColumnStart: '3' }}
                  color='secondary'
                  variant='outlined'
                  label={<Typography variant='body2'>{yearRange}</Typography>}/>
          </CardContent>
          {jobDescription}
        </Card>
      </div>
    </div>
  );
}