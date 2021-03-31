import React from 'react';

import Container from './components/Container/Container';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';

import statisticalData from './data/statistical-data.json';
import friends from './data/friends.json';

const App = () => {
  return (
    <Container>
      <Profile />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friends={friends} />
    </Container>
  );
};

export default App;
