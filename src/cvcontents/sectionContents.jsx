import React from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import TripOrigin from '@material-ui/icons/TripOrigin';
import './sectionContents.scss';
import PropTypes from 'prop-types';

export const PersonalProfileContents = () =>
  <Typography>
    Full stack software developer driven by a desire to solve problems, improve user and developer experience, and
    to always be learning. Has a background in technical and creative disciplines, resulting in a broad skill-set
    that benefits solo and team-based working. Strives to produce quality output consistently and reliably. Has had a life-long
    obsession with technology and continues to pursue this through career goals, personal projects and self-directed learning.
  </Typography>;

export const SkillsContents = ({ attributes }) =>
  <Breadcrumbs classes={{ ol: 'skills-contents', separator: 'separator' }} separator={<TripOrigin fontSize='small'/>} maxItems={20} itemsAfterCollapse={4} itemsBeforeCollapse={4}>
    { attributes.map((attribute, i) => <Typography key={`skill-${i}`}>{attribute}</Typography>)}
  </Breadcrumbs>;

SkillsContents.propTypes = {
  attributes: PropTypes.array,
  crumbsStyle: PropTypes.string
};

export const interests = [
  'Gaming',
  'Technology',
  'Coding',
  'Foreign Languages',
  'Problem Solving',
  'Web',
  'Creative Writing',
  'Personal',
  'Fitness',
  'Socialising',
  'Cooking and Baking'
];

export const backEndSkills = [
  'Java',
  'Guice',
  'JUnit',
  'Mockito',
  'Javascript',
  'PostgresQL',
  'System Administration'
];

export const frontEndSkills = [
  'Javascript',
  'HTML',
  'CSS',
  'Jest',
  'material-ui',
  'React'
];

export const cicdSkills = [
  'AWS',
  'Git',
  'Teamcity',
  'Agile',
  'Containerisation',
  'Infrastructure as code'
];
