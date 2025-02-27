import React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';

const Props = {
  name: String,
  numRooms: Number,
  pathToSrc: String,
}

const NameBox = styled(Box)({
  backgroundColor: '#ef6c00',
  borderRadius: '10px',
  bottom: '0px',
  color: 'white',
  display: 'flex',
  justifyContent: 'space-between',
  left: '0px',
  margin: '10px',
  padding: '15px 20px',
  position: 'absolute',
  right: '0px',
})

const NameText = styled('p')({
  fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
  fontSize: '16px',
  fontWeight: 'bold',
  margin: '0px',
})

const RoomBox = styled(Box)({
  alignItems: 'center',
  backgroundColor: 'white',
  borderRadius: '15px',
  display: 'flex',
  justifyContent: 'center',
  margin: '10px',
  padding: '10px 15px',
  position: 'absolute',
  right: '0px',
  top: '0px',
})

const RoomText = styled('p')({
  fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
  fontSize: '12px',
  fontWeight: 'bold',
  margin: '0px',
})

const StyledImg = styled('img')({
  borderRadius: '10px',
  color: 'transparent',
  height: '100%',
  inset: '0px',
  objectFit: 'cover',
  position: 'absolute',
  width: '100%',
})

const GreenIcon = styled(Box)({
  backgroundColor: '#4caf50',
  borderRadius: '50%',
  height: '10px',
  marginRight: '10px',
  width: '10px',
})

export default function BuildingCard ({
  name,
  numRooms,
  pathToSrc,
}) {
  return (
    <Box sx={{ position: 'relative', height: '300px' }}>
      {pathToSrc && <StyledImg src={pathToSrc} alt={name} />}
      <RoomBox>
        <GreenIcon />
        <RoomText>{numRooms} rooms available</RoomText>
      </RoomBox>
      <NameBox>
        <NameText>{name}</NameText>
      </NameBox>
    </Box>
  );
}

BuildingCard.propTypes = Props;
