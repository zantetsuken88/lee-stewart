import React from 'react';
import RoleSection from './RoleSection';
import { data } from '../cvcontents/rolesContents.jsx';

export default function PreCodingRoles () {
  return (
    <div>
      <RoleSection data={data.uniqueVoice}/>
      <RoleSection data={data.monarchRecruitment}/>
      <RoleSection data={data.universityWestEngland}/>
      <RoleSection data={data.aldSeniorCredit}/>
      <RoleSection data={data.aldCredit}/>
      <RoleSection data={data.deMontfort}/>
    </div>
  );
}