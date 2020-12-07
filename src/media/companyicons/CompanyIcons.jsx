import React from 'react';
import starling from './starling.svg';
import genomics from './genomicsengland.png';
import mondrian from './seacontainers.svg';
import uniqueVoice from './uniquevoice.png';
import uwe from './uwe.svg';
import dmu from './dmu.svg';
import ald from './aldautomotive.ico';
import monarch from './monarch.png';
import './CompanyIcons.scss';

const CreateCompanyLogo = (logo, link) => {
  const companyName = logo
    .split('/')[4]
    .split('.')[0];
  return <a className='icon-container' href={link} target='_blank' rel='noopener noreferrer'>
    <img className='company-icon' src={logo} alt={companyName}/>
  </a>;
};

export const StarlingLogo = CreateCompanyLogo(starling, 'https://www.starlingbank.com');
export const GenomicsLogo = CreateCompanyLogo(genomics, 'https://www.genomicsengland.co.uk');
export const MondrianLogo = CreateCompanyLogo(mondrian, 'https://www.seacontainerslondon.com/');
export const UniqueVoiceLogo = CreateCompanyLogo(uniqueVoice, 'https://uniquevoice.org/');
export const UweLogo = CreateCompanyLogo(uwe, 'https://www.uwe.ac.uk/');
export const DmuLogo = CreateCompanyLogo(dmu, 'https://www.dmu.ac.uk/');
export const AldLogo = CreateCompanyLogo(ald, 'https://www.aldautomotive.co.uk/');
export const MonarchLogo = CreateCompanyLogo(monarch, 'https://www.monarcheducation.co.uk/');
