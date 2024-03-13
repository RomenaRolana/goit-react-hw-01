import PropTypes from 'prop-types';
import ProfileList from './ProfileList/ProfileList';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import ProfileItem from './ProfileItem/ProfileItem';
import css from './profile.module.css';

const Profile = ({ data: { username, tag, location, avatar, stats } }) => {
  return (
    <div className={css.wrapper}>
      <ProfileInfo
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
      />
      <ProfileList>
        <ProfileItem stats={stats.followers}>Followers</ProfileItem>
        <ProfileItem stats={stats.views}>Views</ProfileItem>
        <ProfileItem stats={stats.likes}>Likes</ProfileItem>
      </ProfileList>
    </div>
  );
};

Profile.propTypes = {
  data: PropTypes.exact({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.exact({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  }),
};

export default Profile;
