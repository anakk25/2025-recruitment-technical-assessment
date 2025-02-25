import React from 'react';
import styled from 'styled-components';
// import Button from '@mui/material/Button';

const Container = styled.div`
  width: 100%;
  padding: 4px 16px;
  height: 55px;
  border-bottom: 1px solid #e0e0e0;
`

const LogoContainer = styled.div`
  display: flex;
  height: 50px;
`

const FreeRoomsLogo = styled.img`
  width: 50px;
  height: 50px;
`

const Title = styled.p`
  margin: 0;
  color: #ef6c00;
  font-weight: 600;
  font-family: 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  font-size: 2rem;
  line-height: 1;
  align-items: center;
  padding-top: 8px;
`



export default function HeaderBar () {
  return (
    <Container>
      <LogoContainer>
        <FreeRoomsLogo src={require("../assets/freeRoomsLogo.png")} />
        <Title>Freerooms</Title>
      </LogoContainer>
      <div>
        {/* <Button>Test</Button> */}
      </div>
    </Container>
  );
}