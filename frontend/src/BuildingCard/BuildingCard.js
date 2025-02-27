import React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';

const Props = {
  name: String,
  numRooms: Number,
  pathToSrc: String,
}

const StyledImg = styled('img')({
  width: '100px',
})

export default function BuildingCard ({
  name,
  numRooms,
  pathToSrc,
}) {
  return (
    <Box>
      {pathToSrc && <StyledImg src={pathToSrc} alt={name} />}
      <Box>
        {numRooms} rooms available
      </Box>
      <Box>
        {name}
      </Box>
    </Box>
  );
}

BuildingCard.propTypes = Props;
