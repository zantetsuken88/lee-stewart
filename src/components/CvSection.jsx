import React from 'react';
import { Paper, Typography } from '@material-ui/core';
import './CvSection.scss'

export default function CvSection ({sectionTitle, sectionContent}) {
  return (
    <div className='container'>
      <div className='title-container'>
        <Paper className='section-title'>
          <Typography variant='h5'>{sectionTitle}</Typography>
        </Paper>
      </div>
      <div className='contents-container'>
        {sectionContent}
      </div>
    </div>
  )
}