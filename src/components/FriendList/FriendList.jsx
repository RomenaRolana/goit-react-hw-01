import PropTypes from 'prop-types';
import FriendItem from './FriendItem/FriendItem';
import css from './friendList.module.css';

const FriendList = ({ data }) => {
  return (
    <ul className={css.list}>
      {data.map(({ avatar, name, isOnline, id }) => {
        return (
          <FriendItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
            id={id}
          />
        );
      })}
    </ul>
  );
};

FriendList.propTypes = PropTypes.arrayOf(
  PropTypes.exact({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  }),
).isRequired;

export default FriendList;
