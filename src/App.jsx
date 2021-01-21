import React from 'react';
import './App.scss';
import PersonalDetailsHeader from './components/PersonalDetailsHeader';
import CvSection from './components/CvSection';
import Contact from './components/Contact';
import CvBody from './components/CvBody';
import { backEndSkills, cicdSkills, frontEndSkills, interests } from './cvcontents/sectionContents';
import { StylesProvider } from '@material-ui/core/styles';

const App = () =>
  <main className="App-header">
    <StylesProvider injectFirst>
      <PersonalDetailsHeader/>
      <CvBody/>
      <CvSection crumbsStyle='skills' sectionTitle='Back End' attributes={backEndSkills}/>
      <CvSection crumbsStyle='skills' sectionTitle='Front End' attributes={frontEndSkills}/>
      <CvSection crumbsStyle='skills' sectionTitle='CI/CD' attributes={cicdSkills}/>
      <CvSection crumbsStyle='interests' sectionTitle='Interests' attributes={interests}/>
      <Contact/>
    </StylesProvider>
  </main>;

export default App;
