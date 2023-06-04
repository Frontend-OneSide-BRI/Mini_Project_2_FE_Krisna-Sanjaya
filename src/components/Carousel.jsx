import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, Typography } from '@material-ui/core';
import { ChevronLeft, ChevronRight } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  carouselContainer: {
    position: 'relative',
    margin: 'auto',
    width: '50%',
    overflow: 'hidden',
    marginTop: '20px',
    marginBottom: '30px'
  },
  carouselImage: {
    width: '95%',
    height: 'auto',
  },
  captionContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    marginBottom: '15px'
  },
  captionText: {
    color: theme.palette.common.white,
  },
  navigationButton: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    color: theme.palette.text.primary,
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
    },
  },
  leftButton: {
    left: 0,
  },
  rightButton: {
    right: 0,
  },
}));

const carouselItems = [
  {
    imageUrl: 'https://cdn.pixabay.com/photo/2023/05/19/13/28/bird-8004544_1280.jpg',
    caption: 'Description for Image 1',
  },
  {
    imageUrl: 'https://cdn.pixabay.com/photo/2016/11/23/13/48/beach-1852945_1280.jpg',
    caption: 'Description for Image 2',
  },
  // ...
];

const Carousel = () => {
  const classes = useStyles();
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevClick = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setActiveIndex((prevIndex) => (prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className={classes.carouselContainer}>
      <img className={classes.carouselImage} src={carouselItems[activeIndex].imageUrl} alt={carouselItems[activeIndex].caption} />
      <div className={classes.captionContainer}>
        <Typography variant="subtitle1" className={classes.captionText}>
          {carouselItems[activeIndex].caption}
        </Typography>
      </div>
      <IconButton className={`${classes.navigationButton} ${classes.leftButton}`} onClick={handlePrevClick}>
        <ChevronLeft />
      </IconButton>
      <IconButton className={`${classes.navigationButton} ${classes.rightButton}`} onClick={handleNextClick}>
        <ChevronRight />
      </IconButton>
    </div>
  );
};

export default Carousel;
