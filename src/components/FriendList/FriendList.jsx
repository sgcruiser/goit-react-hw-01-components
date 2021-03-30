import React from 'react';
import PropTypes from 'prop-types';

import FriendListItem from './FriendListItem/FriendsListItem';

import styles from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friend__list}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li key={id} class="friend__item">
          <FriendListItem>
            <span class="friend__status"></span>
            <img class="friend__avatar" src={avatar} alt={name} width="48" />
            <p class="friend__name">{name}</p>
          </FriendListItem>
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  FriendListItem: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};
export default FriendList;

// {
//   isOnline ? online : offline;
// }
