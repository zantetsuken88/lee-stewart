import React from 'react';
import RoleSection from './RoleSection';
import { data } from '../cvcontents/rolesContents.jsx';
import { UniqueVoiceLogo, UweLogo, DmuLogo, AldLogo, MonarchLogo } from '../media/companyicons/CompanyIcons';

export default function PreCodingRoles () {
  return (
    <div>
      <RoleSection data={data.uniqueVoice} logo={UniqueVoiceLogo}/>
      <RoleSection data={data.monarchRecruitment} logo={MonarchLogo}/>
      <RoleSection data={data.universityWestEngland} logo={UweLogo}/>
      <RoleSection data={data.aldSeniorCredit} logo={AldLogo}/>
      <RoleSection data={data.aldCredit} logo={AldLogo}/>
      <RoleSection data={data.deMontfort} logo={DmuLogo}/>
    </div>
  );
}
