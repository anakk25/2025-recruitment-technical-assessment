import React from 'react';
import BuildingCard from '../BuildingCard/BuildingCard.js';
import Box from '@mui/material/Box';
import { styled } from '@mui/material';

const Container = styled(Box)({
  display: 'grid',
  gap: '20px',
  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
})

export default function BuildingsContainer () {
  // eslint-disable-next-line no-undef
  const buildings = require('../data.json');
  console.log(buildings);

  return (
    <Container>
      {buildings.map((b) =>
        <BuildingCard
          key={b.name}
          name={b.name}
          numRooms={b.rooms_available}
          pathToSrc={b.building_picture}
        />)}
    </Container>
  );
}
