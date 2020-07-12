import makeStyles from '@material-ui/core/styles/makeStyles';

export const red = '#f50057';
export const purple = '#7b08c3';

export const chipStyles = makeStyles({
  outer: {
    margin: '0px 5px',
    placeSelf: 'center',
    color: purple,
    border: `1px solid ${purple}`
  },
  inner: {
    margin: '0px 5px',
    placeSelf: 'center',
    backgroundColor: purple
  }
})

export const codingChipStyles = makeStyles({
 outer: {
   margin: '0px 5px',
   placeSelf: 'center',
   color: red,
   border: `1px solid ${red}`
 },
 inner: {
   margin: '0px 5px',
   placeSelf: 'center',
   backgroundColor: red
 }
})