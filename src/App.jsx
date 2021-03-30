import React from 'react';

import Container from './components/Container/Container';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';

import statisticalData from './data/statistical-data.json';

const App = () => {
  return (
    <Container>
      <Profile />
      <Statistics title="Upload stats" stats={statisticalData} />
    </Container>
  );
};

export default App;
