import React from 'react';
// Starling Logos
import java from './java.svg';
import react from './react.svg';
import postgres from './postgres.svg';
import aws from './aws.svg';
import teamcity from './teamcity.svg';
import git from '../githubLogo.svg';
import jenkins from './jenkins.svg';
import saltstack from './saltstack-icon.svg';
import vmware from './vmwareLogo.svg';
import mongo from './mongodb.svg';
import javascript from './javascript.svg';

const starlingLogos = [
  java,
  javascript,
  react,
  postgres,
  aws,
  teamcity,
  git
];

const genomicsLogos = [
  saltstack,
  vmware,
  jenkins,
  mongo,
  git
];

export const Starling = ({ iconClass }) => generateIcons(starlingLogos, iconClass);
export const Genomics = ({ iconClass }) => generateIcons(genomicsLogos, iconClass);

const generateIcons = (logos, iconClass) => logos.map((logo, i) => {
  const animationOrder = {
    '--animation-order': iconClass === 'tech-icon-show'
      ? i + 1
      : starlingLogos.length - i
  };
  const iconName = logo
    .split('/')[4]
    .split('.')[0];

  return <img className={`tech-icon ${iconClass}`} src={logo} alt={iconName} key={iconName} style={animationOrder}/>;
});
