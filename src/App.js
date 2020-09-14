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
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  switchChecked: {
    '& .MuiSwitch-colorSecondary.Mui-checked': {
      color: purple
    },
    '& .MuiSwitch-colorSecondary.Mui-checked + .MuiSwitch-track': {
      backgroundColor: purple
    }
  }
});

const VERSION = { CODING: 'CODING', PRE_CODING: 'PRE_CODING' };

function App() {
  const classes = useStyles();
  const [version, setVersion] = React.useState(VERSION.CODING);

  const toggleCvVersion = () => {
    version === VERSION.CODING ? setVersion(VERSION.PRE_CODING) : setVersion(VERSION.CODING);
  };

  const toggleText = version === VERSION.CODING ? 'Acting, Misc and Education' : 'Software Engineer';

  return (
  <main className="App-header">
      <PersonalDetailsHeader/>
      <CvSection
        sectionTitle='Personal Profile'
        sectionContent={personalProfileContents}
      />
    <Grid
      container
      direction='row'
      justify='flex-end'
      alignItems='center'
      className={classes.roleContainer}
    >
      <Grid item xs={4} style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Typography variant='button'
                    style={ version === VERSION.PRE_CODING ? { color: purple } : { color: red }}
        >
          {`View ${toggleText}`}
        </Typography>
      </Grid>
      <Grid item xs={1}>
        <Switch className={classes.switchChecked} checked={version === VERSION.PRE_CODING} onChange={toggleCvVersion}/>
      </Grid>
    </Grid>
      {version === VERSION.PRE_CODING ? <PreCodingRoles chipClass={chipStyles} /> : <CodingRoles chipClass={codingChipStyles} />}
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
