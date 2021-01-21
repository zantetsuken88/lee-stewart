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

const CreateCompanyLogo = (logo) => {
  const companyName = logo
    .split('/')[4]
    .split('.')[0];
  return <img className='company-icon' src={logo} alt={companyName}/>;
};

export const StarlingLogo = CreateCompanyLogo(starling);
export const GenomicsLogo = CreateCompanyLogo(genomics);
export const MondrianLogo = CreateCompanyLogo(mondrian);
export const UniqueVoiceLogo = CreateCompanyLogo(uniqueVoice);
export const UweLogo = CreateCompanyLogo(uwe);
export const DmuLogo = CreateCompanyLogo(dmu);
export const AldLogo = CreateCompanyLogo(ald);
export const MonarchLogo = CreateCompanyLogo(monarch);
