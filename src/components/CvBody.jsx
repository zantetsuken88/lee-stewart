import Typography from '@material-ui/core/Typography';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import ToggleButton from '@material-ui/lab/ToggleButton';
import CodingRoles from './CodingRoles';
import PreCodingRoles from './PreCodingRoles';
import React from 'react';
import './CvBody.scss';

const VERSION = { CODING: 'CODING', PRE_CODING: 'PRE_CODING' };

export default function CvBody() {
  const [version, setVersion] = React.useState(VERSION.CODING);

  const isCodingVersion = () => version === VERSION.CODING;

  const toggleCvVersion = () => isCodingVersion() ? setVersion(VERSION.PRE_CODING) : setVersion(VERSION.CODING);

  return (
    <>
      <div className='app-section-container'>
        <div className='app-switcher-bar'>
          <Typography variant='button' className={'app-switcher-bar-'.concat(isCodingVersion() ? 'coding' : 'pre-coding')}>Experience: </Typography>
          <ToggleButtonGroup className='app-toggle-buttons' value={version} exclusive onChange={toggleCvVersion} size='small'>
            <ToggleButton value={VERSION.CODING}>
              <Typography variant='caption' className='app-switcher-bar-coding'>
                Software Engineering
              </Typography>
            </ToggleButton>
            <ToggleButton value={VERSION.PRE_CODING}>
              <Typography variant='caption' className='app-switcher-bar-pre-coding'>
                Everything Else
              </Typography>
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
      </div>
      {isCodingVersion() ? <CodingRoles/> :  <PreCodingRoles/>}
    </>
  );
}

