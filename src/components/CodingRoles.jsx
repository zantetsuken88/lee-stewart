import React from 'react';
import RoleSection from './RoleSection';
import { data } from '../cvcontents/rolesContents.jsx';

export default function CodingRoles () {
  return (
    <div>
      <RoleSection data={data.starlingSoftwareEngineer}/>
      <RoleSection data={data.genomicsDevOps}/>
      <RoleSection data={data.genomicsIT}/>
      <RoleSection data={data.mondrianIT}/>
    </div>
  );
}
