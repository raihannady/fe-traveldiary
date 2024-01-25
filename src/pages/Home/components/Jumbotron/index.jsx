import { Box, Typography } from '@mui/material';
import React from 'react';

import classes from './style.module.scss';

const Jumbotron = () => {
  return (
    <>
      <Box className={classes.jumbotron}>
        <Box className={classes.content}>
          <Box>
            <Typography variant="h2" sx={{ fontStyle: 'italic', fontWeight: 100 }}>
              The Journey <br />
              you ever dreamed of.
            </Typography>
          </Box>
          <Box>
            <Typography variant="subtitle1">
              We made a tool so you can easily keep & share your travel memories. <br />
              But there is a lot more
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Jumbotron;
