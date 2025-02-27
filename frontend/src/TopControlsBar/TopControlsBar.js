import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../App.js'
import Button from '@mui/material/Button';
import { styled } from '@mui/system';
import sort from '../assets/sort.svg';
import filter from '../assets/filter.svg';
import { ReactComponent as Search } from '../assets/search.svg';
import TextField from '@mui/material/TextField';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';

const Container = styled('div')({
  height: '60px',
  margin: '8px 0px',
  display: 'flex',
  justifyContent: 'space-between',
});

const StyledButton = styled(Button)({
  borderWidth: '2px',
  borderColor: '#ef6c00',
  borderRadius: '10px',
  width: '140px',
  height: '40px',
});

const ButtonText = styled('span')({
  textTransform: 'capitalize',
  fontWeight: 'bold',
  fontSize: '1rem',
  marginLeft: '12px',
});

export default function TopControlsBar () {
  return (
    <ThemeProvider theme={theme}>
    <Container>
      <StyledButton variant="outlined" color="orange">
        <img src={filter} alt="filter" />
        <ButtonText>Filters</ButtonText>
      </StyledButton>
      <OutlinedInput
        label="Search for a building..."
        variant="outlined"
        startAdornment={<InputAdornment>
          <Search fill="#666666" />
        </InputAdornment>}
      />

      <OutlinedInput
        id="outlined-adornment-amount"
        startAdornment={<InputAdornment>
          <Search fill="#666666" />
        </InputAdornment>}
        label="Amount"
      />

      <StyledButton variant="outlined" color="orange">
        <img src={sort} alt="sort" />
        <ButtonText>Sort</ButtonText>
      </StyledButton>
    </Container>
    </ThemeProvider>
  );
}