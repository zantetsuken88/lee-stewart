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

function App() {
  const classes = useStyles();
  const [state, setState] = React.useState({
     checked: false,
   });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  const cvVersion = !state.checked ? 'Acting, Misc and Education' : 'Software Engineer';

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
                    style={ state.checked ? { color: purple } : { color: red }}
        >
          {`View ${cvVersion}`}
        </Typography>
      </Grid>
      <Grid item xs={1}>
        <Switch className={classes.switchChecked} checked={state.checked} onChange={handleChange('checked')}/>
      </Grid>
    </Grid>
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
