import PropTypes from 'prop-types';
import css from './friendItem.module.css';
import clsx from 'clsx';

const FriendItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.item}>
      <img className={css.img} src={avatar} alt={avatar} />
      <p className={css.friendName}>{name}</p>
      <p className={clsx(css.status, isOnline ? css.isOnline : css.isOffline)}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </li>
  );
};

FriendItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendItem;
