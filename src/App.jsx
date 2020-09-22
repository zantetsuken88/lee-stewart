import React from 'react';
import './App.scss';
import PersonalDetailsHeader from './components/PersonalDetailsHeader';
import CvSection from './components/CvSection';
import {
  interestContents,
  skillsContents
} from './cvcontents/sectionContents';
import Contact from "./components/Contact";
import CvBody from "./components/CvBody";

function App() {
  return (
  <main className="App-header">
      <PersonalDetailsHeader/>
      <CvBody/>
      <CvSection
        sectionTitle='Skills'
        sectionContent={skillsContents}
        />
      <CvSection
        sectionTitle='Interests'
        sectionContent={interestContents}
        />
        <Contact/>
    </main>
  );
}

export default App;
