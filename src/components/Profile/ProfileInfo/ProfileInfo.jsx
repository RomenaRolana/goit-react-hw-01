import PropTypes from 'prop-types';
import css from './profileInfo.module.css';

const ProfileInfo = ({ username, tag, location, avatar }) => {
  return (
    <div className={css.wrapper}>
      <img className={css.img} src={avatar} alt={avatar} />
      <p className={css.userName}>{username}</p>
      <p className={css.tag}>@{tag}</p>
      <p className={css.location}>{location}</p>
    </div>
  );
};

ProfileInfo.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

export default ProfileInfo;
