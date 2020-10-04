import React from 'react';
import './App.scss';
import PersonalDetailsHeader from './components/PersonalDetailsHeader';
import CvSection from './components/CvSection';
import Contact from './components/Contact';
import CvBody from './components/CvBody';
import { skills, interests } from './cvcontents/sectionContents';

const App = () =>
  <main className="App-header">
    <PersonalDetailsHeader/>
    <CvBody/>
    <CvSection crumbsStyle='skills' sectionTitle='Skills' attributes={skills} />
    <CvSection crumbsStyle='interests' sectionTitle='Interests' attributes={interests} />
    <Contact/>
  </main>;

export default App;
