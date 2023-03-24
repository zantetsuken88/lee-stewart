import React, { useState } from 'react';
import { Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import './TechStack.scss';
import { Starling, Genomics, Helsa, Optimly, Faculty } from '../media/techicons/TechIcons';

const iconMapping = {
  starling: Starling,
  genomics: Genomics,
  helsa: Helsa,
  optimly: Optimly,
  faculty: Faculty,
};

const iconClasses = {
  showIcons: 'tech-icon-show',
  hideIcons: 'tech-icon-hide'
};

export default function TechStack ({ techStack }) {
  const [iconClass, setIconClass] = useState('');

  const handleClick = () => {
    const { showIcons, hideIcons } = iconClasses;
    iconClass === showIcons ? setIconClass(hideIcons) : setIconClass(showIcons);
  };

  const buttonSelected = iconClass === iconClasses.showIcons ? 'stack-button-selected' : '';

  const Icons = iconMapping[techStack];

  return (
    <div className='tech-stack-container'>
      <button className={`stack-button ${buttonSelected}`} onClick={() => handleClick()}>
        <Typography variant='caption'>Tech Stack</Typography>
      </button>
      <div className='stack-container'>
        <Icons iconClass={iconClass}/>
      </div>
    </div>
  );
}

TechStack.propTypes = {
  techStack: PropTypes.string
};
