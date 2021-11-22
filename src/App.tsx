import React from 'react';
import './App.css';

import styled from 'styled-components';

const StyledAppContainer = styled.div`
  min-height: 100vh;
  background-color: darkgreen;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const App = () => (<StyledAppContainer>example</StyledAppContainer>);

export default App;
