import React from 'react';
import './App.css';
import styled from 'styled-components';
import logo from './assets/1.png';

const StyledAppContainer = styled.div`
  min-height: 100vh;
  background-color: darkgreen;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledLoginContainter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledInput = styled.input`
  font-size: 1.25rem;
  font-family: AppleGothic;
  border-radius: 3px;
`;

const StyledButton = styled.button`
  margin-top: 1.5rem;
  background-color: #E51F28;
  font-size: 1.25rem;
  font-size: 1.25rem;
  font-family: AppleGothic;
  color: white;
  font-weight: bold
`;

const StyledLogo = styled.img`
width: 25%
`;

const App = () => (
  <StyledAppContainer>
    <StyledLoginContainter>
      <StyledLogo src={logo} alt="Logo" />
      <StyledInput type="text" placeholder="Enter in your username" />
      <StyledInput type="text" placeholder="Enter in your password" />
      <StyledButton type="button">Login</StyledButton>
    </StyledLoginContainter>
  </StyledAppContainer>
);

export default App;
