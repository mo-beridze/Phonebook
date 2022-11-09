import { Grid, Typography, TextField } from '@mui/material';
import React from 'react';

const Filter = ({ value, onChange }) => (
  <>
    <Typography
      align="center"
      variant="h5"
      sx={{ marginTop: 3, marginBottom: 1 }}
    >
      Find contacts by name
    </Typography>
    <Grid align="center">
      <TextField
        type="text"
        value={value}
        onChange={onChange}
        size="small"
        label="Filter"
      />
    </Grid>
  </>
  // <ul>
  //   <li className={s.filter_item}>
  //     <label className={s.label}>
  //       Find contacts by name
  //       <input
  //         type="text"
  //         value={value}
  //         onChange={onChange}
  //         className={s.input}
  //       />
  //     </label>
  //   </li>
  // </ul>
);

export default Filter;
