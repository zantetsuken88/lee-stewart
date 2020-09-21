import React from 'react';
import RoleSection from './RoleSection';
import { aldSeniorCredit, monarchRecruitment, uniqueVoice, universityWestEngland, deMontfort } from '../CvContents/RolesContents';

export default function PreCodingRoles ({ chipClass }) {
  return (
    <div>
      <RoleSection
        year='2014'
        jobDescription={uniqueVoice}
        yearRange='Aug 2013 - Aug 2014'
        jobTitle='Actor & Workshop Leader'
        company='Unique Voice CIC'
        chipClass={chipClass}
      />
      <RoleSection
        year='2014'
        jobDescription={monarchRecruitment}
        yearRange='Dec 2013 - July 2014'
        jobTitle='Cover Teacher'
        company='Monarch Recruitment'
        chipClass={chipClass}
      />
      <RoleSection
        year='2013'
        jobDescription={universityWestEngland}
        yearRange='Sep 2012 - Jun 2013'
        jobTitle='PGCE PCET'
        company='University of the West of England'
        chipClass={chipClass}
      />
      <RoleSection
        year='2012'
        jobDescription={aldSeniorCredit}
        yearRange='Jan 2012 - Aug 2012'
        jobTitle='Senior Credit Controller'
        company='ALD Automotive'
        chipClass={chipClass}
      />
      <RoleSection
        year='2012'
        yearRange='Feb 2011 - Jan 2012'
        jobTitle='Credit Controller'
        company='ALD Automotive'
        chipClass={chipClass}
      />
      <RoleSection
        year='2010'
        yearRange='Oct 2007 - May 2010'
        jobTitle='BA(Hons) Performing Arts'
        company='DeMontfort University'
        chipClass={chipClass}
        jobDescription={deMontfort}
      />
    </div>
  )
}