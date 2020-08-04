import React from 'react';
import RoleSection from './RoleSection';
import {
  genomicsDevOps,
  genomicsIT, mondrianIT,
  starlingSoftwareEngineer
} from '../CvContents/RolesContents';

export default function CodingRoles ({ chipClass }) {
  return (
    <div>
      <RoleSection
        year='Now'
        jobDescription={starlingSoftwareEngineer}
        yearRange='Jan 2018 - Jul 2020'
        jobTitle='Software Engineer'
        company='Starling Bank'
        chipClass={chipClass}
      />
      <RoleSection
        year='2017'
        jobDescription={genomicsDevOps}
        yearRange='July 2016 - Nov 2017'
        jobTitle='DevOps Engineer'
        company='Genomics England'
        chipClass={chipClass}
      />
      <RoleSection
        year='2016'
        jobDescription={genomicsIT}
        yearRange='Nov 2015 - July 2016'
        jobTitle='IT Analyst'
        company='Genomics England'
        chipClass={chipClass}
      />
      <RoleSection
        year='2015'
        jobDescription={mondrianIT}
        yearRange='Sept 2015 - Nov 2016'
        jobTitle='IT Assistant'
        company='Mondrian London'
        chipClass={chipClass}
      />
    </div>
  )
}