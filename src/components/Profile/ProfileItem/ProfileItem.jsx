import PropTypes from 'prop-types';
import css from './profileItem.module.css';

const ProfileItem = ({ children, stats }) => {
  return (
    <li className={css.item}>
      <span className={css.title}>{children}</span>
      <span className={css.prop}>{stats}</span>
    </li>
  );
};

ProfileItem.propTypes = {
  stats: PropTypes.number.isRequired,
  children: PropTypes.string.isRequired,
};

export default ProfileItem;
