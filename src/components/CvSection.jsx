import React from 'react';
import { Paper, Typography } from '@material-ui/core';
import './CvSection.scss';
import PropTypes from 'prop-types';

export default function CvSection ({ sectionTitle, sectionContent }) {
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
  );
}

CvSection.propTypes = {
  sectionTitle: PropTypes.string,
  sectionContent: PropTypes.object
};
