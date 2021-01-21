import React from 'react';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import { Paper, Typography, Chip } from '@material-ui/core';
import './RoleSection.scss';
import PropTypes from 'prop-types';
import TechStack from './TechStack';
import link from '../media/link-thin.svg';

const tooltipBullet = (bullet, name, tooltipText) => {
  const [ before, after ] = bullet.split(name);
  return (
    <React.Fragment key={name}>
      <span>{before}</span>
      <span className='tooltip'>{name}<span className='tooltip-text'>{tooltipText}</span></span>
      <span>{after}</span>
    </React.Fragment>
  );
};

const getBullets = (data) => {
  const { jobDescription, tooltips } = data;
  if (tooltips) {
    Object.keys(tooltips).map(name =>
      jobDescription.find((bullet, index, arr) => {
        if (typeof(bullet) === 'string') {
          return bullet.includes(name)
          && arr.splice(index, 1, tooltipBullet(bullet, name, tooltips[name]));
        }
        return false;
      })
    );
  }
  return jobDescription;
};

export default function RoleSection ({ data, logo }) {
  const jobDesc = getBullets(data);

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
      <Paper elevation={3} classes={{ root: 'job-description' }}>
        <div className='job-stats-container'>
          <Chip avatar={logo}
            className={`chip chip${data.chipClass} chip${data.chipClass}-clickable`}
            variant='outlined'
            clickable
            component={'a'}
            href={data.website}
            target='_blank' rel='noopener noreferrer'
            label={
              <div className='company-label'>
                <Typography variant='body2'>{data.company}</Typography>
                <img src={link} alt='link icon'/>
              </div>
            }
          />
          <Chip className={`chip chip${data.chipClass} chip${data.chipClass}-inner`}
            label={<Typography variant='body2'>{data.jobTitle}</Typography>}
          />
          <Chip className={`chip chip${data.chipClass} chip${data.chipClass}-outer`}
            variant='outlined'
            label={<Typography variant='body2'>{data.yearRange}</Typography>}
          />
        </div>
        <ul>
          {jobDesc.map((bullet, i) => <Typography className='role-text' variant='body2' component='li' key={`${data.jobTitle}${i}`}>
            { bullet }
          </Typography>)}
        </ul>
        { data.techStack && <TechStack techStack={data.techStack}/> }
      </Paper>
    </div>
  );
}

RoleSection.propTypes = {
  data: PropTypes.shape({
    year: PropTypes.string,
    jobDescription: PropTypes.array,
    yearRange: PropTypes.string,
    website: PropTypes.string,
    jobTitle: PropTypes.string,
    company: PropTypes.string,
    chipClass: PropTypes.string,
    tooltips: PropTypes.shape({
      name: PropTypes.string,
      description: PropTypes.string
    }),
    techStack: PropTypes.string
  }),
  logo: PropTypes.object
};
