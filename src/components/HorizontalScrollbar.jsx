import React, { useContext } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';

import ExerciseCard from './ExerciseCard';
import BodyPart from './BodyPart';
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);
  return (
    <Typography
      onClick={() => scrollPrev('smooth')}
      className="left-arrow"
      sx={{ cursor: 'pointer' }}
    >
      <img src={LeftArrowIcon} alt="scroll left" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);
  return (
    <Typography
      onClick={() => scrollNext('smooth')}
      className="right-arrow"
      sx={{ cursor: 'pointer' }}
    >
      <img src={RightArrowIcon} alt="scroll right" />
    </Typography>
  );
};

const ScrollItem = ({ itemId, title, children }) => (
  <div
    title={title}
    style={{
      display: 'inline-block',
      padding: '0 16px',
      boxSizing: 'border-box',
    }}
  >
    {children}
  </div>
);

const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => {
  const theme = useTheme();
  // consider 'sm' breakpoint as mobile
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ position: 'relative', width: '100%' }}>
      <ScrollMenu
        // only show arrows on desktop
        LeftArrow={isMobile ? undefined : LeftArrow}
        RightArrow={isMobile ? undefined : RightArrow}
        transitionBehavior="smooth"
        transitionDuration={500}
        transitionEase={(t) => t}
      >
        {data.map((item) => {
          const id = String(item.id || item);
          return (
            <ScrollItem key={id} itemId={id} title={id}>
              {bodyParts
                ? <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} />
                : <ExerciseCard exercise={item} />}
            </ScrollItem>
          );
        })}
      </ScrollMenu>

      {isMobile && (
        <Typography
          variant="body2"
          align="center"
          sx={{
            mt: 1,
            color: 'text.secondary',
            fontStyle: 'italic',
          }}
        >
          Slide to see more →
        </Typography>
      )}
    </Box>
  );
};

export default HorizontalScrollbar;
