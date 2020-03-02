import React from 'react';
import './App.css';
import PersonalDetailsHeader from './components/PersonalDetailsHeader';
import CvSection from './components/CvSection';
import RoleSection from './components/RoleSection';
import { personalProfileContents } from './CvContents/SectionContents';
import {
  genomicsDevOpsDescription,
  genomicsITDescription,
  mondrianITDescription
} from './CvContents/RolesContents';

function App() {
  return (
    <body className="App-header">
      <PersonalDetailsHeader/>
      <CvSection
        sectionTitle='Personal Profile'
        sectionContent={personalProfileContents}
      />
      <RoleSection
        year='2017'
        jobDescription={genomicsDevOpsDescription}
        yearRange='July 2016 - Nov 2017'
        jobTitle='DevOps Engineer'
        company='Genomics England'
      />
      <RoleSection
        year='2016'
        jobDescription={genomicsITDescription}
        yearRange='Nov 2015 - July 2016'
        jobTitle='IT Analyst'
        company='Genomics England'
      />
      <RoleSection
        year='2015'
        jobDescription={mondrianITDescription}
        yearRange='Sept 2015 - Nov 2016'
        jobTitle='IT Assistant'
        company='Mondrian London'
      />
    </body>
  );
}

export default App;
