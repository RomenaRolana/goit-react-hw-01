import PropTypes from 'prop-types';
import ProfileItem from '../ProfileItem/ProfileItem';
import css from './profileList.module.css';

const ProfileList = ({ children }) => {
  return <ul className={css.wrapper}>{children}</ul>;
};
ProfileList.propTypes = { children: PropTypes.array.isRequired };
export default ProfileList;
