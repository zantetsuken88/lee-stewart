import React from 'react';
import java from './java.svg';
import react from './react.svg';
import postgres from './postgres.svg';
import aws from './aws.svg';
import teamcity from './teamcity.svg';
import git from '../github.svg';
import jenkins from './jenkins.svg';
import saltstack from './saltstack.svg';
import vmware from './vmware.svg';
import mongo from './mongodb.svg';
import javascript from './javascript.svg';
import typescript from './typescript.svg';
import gatsby from './gatsby.svg';
import netlify from './netlify.svg';
import contentful from './contentful.svg';
import firebase from './firebase.svg';
import redux from './redux.svg';
import graphql from './graphql.svg';
import docker from './docker.png';
import nextJS from './nextJS.svg';
import nodeJS from './nodeJS.svg';
import heroku from './heroku.svg';

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

const helsaLogos = [
  typescript,
  react,
  gatsby,
  netlify,
  contentful,
  firebase,
  git
];

const optimlyLogos = [
  typescript,
  react,
  java,
  postgres,
  redux,
];

const facultyLogos = [
  typescript,
  react,
  redux,
  graphql,
  aws,
  docker,
];

const norisLogos = [
  typescript,
  react,
  nodeJS,
  nextJS,
  redux,
  heroku,
  postgres,
];

export const Starling = ({ iconClass }) => generateIcons(starlingLogos, iconClass);
export const Genomics = ({ iconClass }) => generateIcons(genomicsLogos, iconClass);
export const Helsa = ({ iconClass }) => generateIcons(helsaLogos, iconClass);
export const Optimly = ({ iconClass }) => generateIcons(optimlyLogos, iconClass);
export const Faculty = ({ iconClass }) => generateIcons(facultyLogos, iconClass);
export const Noris = ({ iconClass }) => generateIcons(norisLogos, iconClass);

const generateIcons = (logos, iconClass) => logos.map((logo, i) => {
  const animationOrder = {
    '--animation-order': iconClass === 'tech-icon-show'
      ? i + 1
      : logos.length - i
  };
  const iconName = logo
    .split('/')[4]
    .split('.')[0];

  return <div className={`tech-icon ${iconClass}`} key={iconName} style={animationOrder}>
    <img src={logo} alt={iconName}/>
    <p>{iconName}</p>
  </div>;
});
