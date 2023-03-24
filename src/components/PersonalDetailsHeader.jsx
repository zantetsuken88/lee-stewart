import React from 'react';
import { Paper, Typography } from '@material-ui/core';
import profilePhoto from '../media/profoto-crop.jpg';
import './PersonalDetailsHeader.scss';
import { PersonalProfileContents } from '../cvcontents/sectionContents';

export default function PersonalDetailsHeader() {
  return (
    <div className='header-container'>
      <Paper className='paper' elevation={4}>
        <img
          src={profilePhoto}
          alt='Lee Stewart'
          color='transparent'
        />
        <Typography variant='h4'>
          Lee Stewart
        </Typography>
      </Paper>
      <div className='header-description'>
        <PersonalProfileContents/>
      </div>
    </div>
  );
}