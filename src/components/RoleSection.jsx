import React from 'react';
import Chip from '@material-ui/core/Chip';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import { Card, CardContent, Typography } from '@material-ui/core';
import { StylesProvider } from "@material-ui/core/styles";
import './RoleSection.scss';

export default function RoleSection ({year, jobDescription, yearRange, jobTitle, company, chipClass}) {
  return (
    <StylesProvider injectFirst>
      <div className='role-container'>
        <div className='label-container'>
          <svg viewBox='0 0 20 100' className='year-line-top' overflow='hidden'>
            <line x1='50%' y1='0' x2='50%' y2='74%'/>
          </svg>
          <WorkOutlineIcon className='year-label' fontSize='large' />
          <Typography variant='button' className='year-text' >{year}</Typography>
          <svg viewBox='0 0 20 100' className='year-line-bottom' overflow='hidden'>
            <line x1='50%' y1='33%' x2='50%' y2='100%'/>
          </svg>
        </div>
        <div>
          <Card className='job-description'>
            <CardContent className='job-stats-container'>
              <Chip className={`chip chip${chipClass} chip${chipClass}-outer`}
                    variant='outlined'
                    label={<Typography variant='body2'>{company}</Typography>}/>
              <Chip className={`chip chip${chipClass} chip${chipClass}-inner`}
                    label={<Typography variant='body2'>{jobTitle}</Typography>}/>
              <Chip className={`chip chip${chipClass} chip${chipClass}-outer`}
                    variant='outlined'
                    label={<Typography variant='body2'>{yearRange}</Typography>}/>
            </CardContent>
            {jobDescription}
          </Card>
        </div>
      </div>
    </StylesProvider>
  );
}