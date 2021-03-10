import React from 'react';
import RoleSection from './RoleSection';
import { data } from '../cvcontents/rolesContents.jsx';
import { StarlingLogo, GenomicsLogo, MondrianLogo, HelsaLogo } from '../media/companyicons/CompanyIcons';

export default function CodingRoles () {
  return (
    <div>
      <RoleSection data={data.helsaHelps} logo={HelsaLogo}/>
      <RoleSection data={data.starlingSoftwareEngineer} logo={StarlingLogo}/>
      <RoleSection data={data.genomicsDevOps} logo={GenomicsLogo}/>
      <RoleSection data={data.genomicsIT} logo={GenomicsLogo}/>
      <RoleSection data={data.mondrianIT} logo={MondrianLogo}/>
    </div>
  );
}
