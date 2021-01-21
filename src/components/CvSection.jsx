import React from 'react';
import { Paper, Typography } from '@material-ui/core';
import './CvSection.scss';
import PropTypes from 'prop-types';
import { SkillsContents } from '../cvcontents/sectionContents';

export default function CvSection ({ sectionTitle, attributes, crumbsStyle }) {
  return (
    <div className='container'>
      <div className='title-container'>
        <Paper className='section-title'>
          <Typography align='center' variant='h5'>{sectionTitle}</Typography>
        </Paper>
      </div>
      <div id={crumbsStyle} className='contents-container'>
        <SkillsContents attributes={attributes}/>
      </div>
    </div>
  );
}

CvSection.propTypes = {
  sectionTitle: PropTypes.string,
  attributes: PropTypes.array,
  crumbsStyle: PropTypes.string
};
