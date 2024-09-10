import React from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import TripOrigin from '@material-ui/icons/TripOrigin';
import './sectionContents.scss';
import PropTypes from 'prop-types';

export const PersonalProfileContents = () =>
  <Typography>
    Full stack software developer driven by a desire to pursue innovative solutions that improve user and developer experience.
    A strong background in technical and creative disciplines, combined with matured interpersonal skills that are effective in both team based and solo working environments.
    Able to deliver quality output consistently and reliably. A lifelong passion with technology and society consolidates personal career goals and personal projects,
    as well as continuous self-directed learning. An asset to any team or company.
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
  'Coding',
  'Gaming',
  'Foreign Languages',
  'Fitness',
  'Theatre',
  'Baking',
];

export const skills = [
  'React',
  'React Native',
  'TypeScript',
  'Javascript',
  'Node',
  'Java',
  'PostgresQL',
  'HTML',
  'CSS',
];
