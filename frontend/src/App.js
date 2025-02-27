import React from 'react';
import './App.css';
import HeaderBar from './HeaderBar/HeaderBar.js'
import TopControlsBar from './TopControlsBar/TopControlsBar.js'
import { createTheme } from '@mui/material/styles';
import { styled } from '@mui/system';
import BuildingsContainer from './BuildingsContainer/BuildingsContainer.js';

export const theme = createTheme({
  palette: {
    orange: {
      main: '#ef6c00',
    },
  },
});

const Container = styled('div')({
  padding: '0px 24px',
})

function App() {
  return (
    <>
      <HeaderBar />
      <Container>
        <TopControlsBar />
        <BuildingsContainer />
      </Container>
    </>
  );
}

export default App;
