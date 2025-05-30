import React from 'react';
import { Typography, Box, Stack } from '@mui/material';
import Loader from './Loader';

const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos.length) return <Loader />;

  return (
    <Box sx={{ mt: { lg: '80px', xs: '20px' } }} p="20px">
      <Typography
        sx={{ fontSize: { lg: '44px', xs: '25px' } }}
        fontWeight={700}
        color="#000"
        mb="33px"
      >
        Watch{' '}
        <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>
          {name}
        </span>{' '}
        exercise videos
      </Typography>

      <Stack
        direction="row"                     // always row
        flexWrap="nowrap"                   // never wrap into new line
        sx={{
          overflowX: 'auto',                // enable horizontal scroll
          gap: { lg: '110px', xs: '16px' }, // spacing between cards
          py: 1                             // some vertical padding
        }}
        alignItems="center"
      >
        {exerciseVideos.slice(0, 6).map((item, index) => (
          <Box
            key={index}
            component="a"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
            sx={{
              minWidth: { lg: '387px', xs: '280px' },  // fixed card width
              textDecoration: 'none'
            }}
          >
            <Box
              component="img"
              src={item.video.thumbnails[0].url}
              alt={item.video.title}
              sx={{
                width: '100%',
                borderTopLeftRadius: '20px',
              }}
            />
            <Typography
              sx={{ fontSize: { lg: '28px', xs: '18px' } }}
              fontWeight={600}
              color="#000"
              mt={1}
            >
              {item.video.title}
            </Typography>
            <Typography fontSize="14px" color="#000">
              {item.video.channelName}
            </Typography>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
