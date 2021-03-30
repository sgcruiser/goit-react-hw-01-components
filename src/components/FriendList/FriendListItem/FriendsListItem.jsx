import PropTypes from 'prop-types';

import defaultImage from './avatar.png';

// import styles from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return;
};

FriendListItem.defaultProps = {
  url: defaultImage,
};

FriendListItem.propTypes = {
  url: PropTypes.string,
  authorUrl: PropTypes.string.isRequired,
  authorTag: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default FriendListItem;
