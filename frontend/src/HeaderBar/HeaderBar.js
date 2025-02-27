import React from 'react';
import { styled } from '@mui/system';
import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/material/styles';
import { ReactComponent as Search } from '../assets/search.svg';
import { ReactComponent as Map } from '../assets/map.svg';
import { ReactComponent as GridView } from '../assets/grid-view.svg';
import { ReactComponent as DarkMode } from '../assets/dark-mode.svg';
import { theme } from '../App.js';
import freeRooms from '../assets/freeRoomsLogo.png';
import { orange } from '../constants.js';

const Container = styled('div')({
  borderBottom: '1px solid #e0e0e0',
  display: 'flex',
  height: '55px',
  justifyContent: 'space-between',
  padding: '4px 16px',
});

const LogoContainer = styled('div')({
  display: 'flex',
  height: '50px',
});

const FreeRoomsLogo = styled('img')({
  height: '50px',
  width: '50px',
});

const Title = styled('p')({
  alignItems: 'center',
  color: orange,
  fontFamily: 'Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
  fontSize: '2rem',
  fontWeight: '600',
  lineHeight: '1',
  margin: '0',
  paddingTop: '8px',
})

const ButtonContainer = styled('div')({
  alignItems: 'center',
  display: 'flex',
})

const IconButton = styled(Button)({
  marginLeft: '8px',
  minWidth: '40px',
  padding: '8px',
});

export default function HeaderBar () {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <LogoContainer>
          <FreeRoomsLogo src={freeRooms} alt="logo" />
          <Title>Freerooms</Title>
        </LogoContainer>
        <ButtonContainer>
          <IconButton variant="outlined" color="orange">
            <Search fill={orange} />
          </IconButton>
          <IconButton variant="outlined" color="orange">
            <GridView />
          </IconButton>
          <IconButton variant="outlined" color="orange">
            <Map />
          </IconButton>
          <IconButton variant='outlined' color='orange'>
            <DarkMode />
          </IconButton>
        </ButtonContainer>
      </Container>
    </ThemeProvider>
  );
}