import React from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import TripOrigin from '@material-ui/icons/TripOrigin';

export const personalProfileContents =
  <Typography>
    Creative, proactive and engaging with an inquisitive nature and desire to learn. Has a
    background in various disciplines, both creative and technical, resulting in a broad skill-set
    and a unique approach to problem-solving. Approaches work with a desire to achieve and
    excel. Has had a life-long obsession with technology and continues to pursue this through
    self-study and work-based learning.
  </Typography>;

export const skills = [
  'Java',
  'Guice',
  'JUnit',
  'Mockito',
  'Javascript',
  'HTML',
  'CSS',
  'Jest',
  'material-ui',
  'Bootstrap',
  'Postgres',
  'React',
  'AWS',
  'Elasticsearch',
  'Humio',
  'Git'
];

export const skillsContents =
  <Breadcrumbs className='skills' separator={<TripOrigin fontSize='small'/>} maxItems={20} itemsAfterCollapse={4} itemsBeforeCollapse={4}>
    { skills.map((skill, i) => <Typography key={`skill-${i}`}>{skill}</Typography>)}
  </Breadcrumbs>;

const interests = [
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

export const interestContents =
  <Breadcrumbs className='interests' separator={<TripOrigin fontSize='small'/>} maxItems={20} itemsAfterCollapse={4} itemsBeforeCollapse={4}>
    { interests.map((interest, i) => <Typography key={`interest-${i}`}>{interest}</Typography>)}
  </Breadcrumbs>;
