import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../App.js'
import Button from '@mui/material/Button';
import { styled } from '@mui/system';
import sort from '../assets/sort.svg';
import filter from '../assets/filter.svg';
import { ReactComponent as Search } from '../assets/search.svg';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { orange } from '../constants.js';

const Container = styled('div')({
  display: 'flex',
  height: '40px',
  justifyContent: 'space-between',
  margin: '16px 0px',
});

const StyledButton = styled(Button)({
  borderColor: orange,
  borderRadius: '10px',
  borderWidth: '2px',
  height: '40px',
  width: '140px',
});

const ButtonText = styled('span')({
  fontSize: '1rem',
  fontWeight: 'bold',
  marginLeft: '12px',
  textTransform: 'capitalize',
});

const StyledTextField = styled(TextField)`
  width: 600px;

  & input {
    padding: 9px 14px;
  }
`

export default function TopControlsBar () {
  return (
    <ThemeProvider theme={theme}>
    <Container>
      <StyledButton variant="outlined" color="orange">
        <img src={filter} alt="filter" />
        <ButtonText>Filters</ButtonText>
      </StyledButton>
      <StyledTextField
        color="orange"
        placeholder="Search for a building..."
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <Search fill="#666666" />
              </InputAdornment>
            ),
          }
        }}
      />
      <StyledButton variant="outlined" color="orange">
        <img src={sort} alt="sort" />
        <ButtonText>Sort</ButtonText>
      </StyledButton>
    </Container>
    </ThemeProvider>
  );
}
