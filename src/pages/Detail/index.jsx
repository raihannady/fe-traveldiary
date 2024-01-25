import React from 'react';
import { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import { getDetailPost } from './actions';
import { selectDetailPost } from './selectors';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';

import { Box, Typography } from '@mui/material';

import classes from './style.module.scss';

const Detail = ({ detailpost }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetailPost());
  }, [dispatch]);

  console.log(detailpost, '<<<<<< PAGE');

  return (
    <>
      <Box className={classes.container}>
        <Box className={classes.title}>
          <Typography variant="h4">Bersemayam di tanah dewata</Typography>
          <Typography>Raihan</Typography>
        </Box>
        <Box>23 Oktober 2023</Box>
        <Box>Image</Box>
        <Box>shortDesc</Box>
        <Box>Title 2</Box>
        <Box>Desc</Box>
      </Box>
    </>
  );
};

Detail.propTypes = {
  detailpost: PropTypes.array,
  // login: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  detail: selectDetailPost,
  // login: selectLogin,
});

export default connect(mapStateToProps)(Detail);
