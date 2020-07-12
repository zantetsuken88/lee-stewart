import React from 'react';
import './App.css';
import PersonalDetailsHeader from './components/PersonalDetailsHeader';
import CvSection from './components/CvSection';
import CodingRoles from './components/CodingRoles';
import PreCodingRoles from './components/PreCodingRoles';
import Switch from '@material-ui/core/Switch';
import Typography from '@material-ui/core/Typography';
import {
  interestContents,
  personalProfileContents,
  skillsContents
} from './CvContents/SectionContents';
import { chipStyles, codingChipStyles, purple, red } from './components/colors';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  checkboxChecked: {
    color: purple,
    '&checked + $.MuiSwitch-track': {
      backgroundColor: purple
    }
  }
});

function App() {
  const classes = useStyles();
  const [state, setState] = React.useState({
     checked: true,
   });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  const cvVersion = state.checked ? 'Acting, Misc and Education' : 'Software Engineer';

  return (
    <main className="App-header">
      <PersonalDetailsHeader/>
      <CvSection
        sectionTitle='Personal Profile'
        sectionContent={personalProfileContents}
      />
      <div>
        <Typography style={ state.checked ? { color: purple } : { color: red }}>{`View ${cvVersion}`}</Typography>
        <Switch className={classes.checkboxChecked} checked={state.checked} onChange={handleChange('checked')}/>
      </div>
      {state.checked ? <PreCodingRoles chipClass={chipStyles} /> : <CodingRoles chipClass={codingChipStyles} />}
      <CvSection
        sectionTitle='Skills'
        sectionContent={skillsContents}
        />
      <CvSection
        sectionTitle='Interests'
        sectionContent={interestContents}
        />
    </main>
  );
}

export default App;
