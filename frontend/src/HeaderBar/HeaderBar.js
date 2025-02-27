import React from 'react';
import { styled } from '@mui/system';
import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/material/styles';
import { ReactComponent as Search } from '../assets/search.svg';
import { ReactComponent as Map } from '../assets/map.svg';
import { ReactComponent as GridView } from '../assets/grid-view.svg';
import { ReactComponent as DarkMode } from '../assets/dark-mode.svg';
import { theme } from '../App.js';
import freeRooms from "../assets/freeRoomsLogo.png";

const Container = styled('div')({
  padding: '4px 16px',
  height: '55px',
  borderBottom: '1px solid #e0e0e0',
  display: 'flex',
  justifyContent: 'space-between',
});

const LogoContainer = styled('div')({
  display: 'flex',
  height: '50px',
});

const FreeRoomsLogo = styled('img')({
  width: '50px',
  height: '50px',
});

const Title = styled('p')({
  margin: '0',
  color: '#ef6c00',
  fontWeight: '600',
  fontFamily: 'Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
  fontSize: '2rem',
  lineHeight: '1',
  alignItems: 'center',
  paddingTop: '8px',
})

const ButtonContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
})

const IconButton = styled(Button)({
  marginLeft: '8px',
  padding: '8px',
  minWidth: '40px',
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
            <Search fill="#ef6c00" />
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