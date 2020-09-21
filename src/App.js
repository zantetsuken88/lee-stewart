import React from 'react';
import './App.scss';
import PersonalDetailsHeader from './components/PersonalDetailsHeader';
import CvSection from './components/CvSection';
import CodingRoles from './components/CodingRoles';
import PreCodingRoles from './components/PreCodingRoles';
import Typography from '@material-ui/core/Typography';
import {
  interestContents,
  skillsContents
} from './CvContents/SectionContents';
import { chipStyles, codingChipStyles } from './components/colors';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import Contact from "./components/Contact";

const VERSION = { CODING: 'CODING', PRE_CODING: 'PRE_CODING' };

function App() {
  const [version, setVersion] = React.useState(VERSION.CODING);

  const isCodingVersion = () => {
    return version === VERSION.CODING;
  }

  const toggleCvVersion = () => {
    isCodingVersion() ? setVersion(VERSION.PRE_CODING) : setVersion(VERSION.CODING);
  };

  return (
  <main className="App-header">
      <PersonalDetailsHeader/>
    <div
      className='app-section-container'
    >
      <div className='app-switcher-bar'>
        <Typography variant='overline' className={'app-switcher-bar-'.concat(isCodingVersion() ? 'coding' : 'pre-coding')}>Experience: </Typography>
        <ToggleButtonGroup value={version} exclusive onChange={toggleCvVersion} size='small'>
          <ToggleButton value={VERSION.CODING}>
            <Typography variant='button' className='app-switcher-bar-coding'>
              Software Engineering
            </Typography>
          </ToggleButton>
          <ToggleButton value={VERSION.PRE_CODING} >
            <Typography variant='button' className='app-switcher-bar-pre-coding'>
              Everything Else
            </Typography>
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
    </div>
      {isCodingVersion() ? <CodingRoles chipClass={codingChipStyles} /> :  <PreCodingRoles chipClass={chipStyles} />}
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
