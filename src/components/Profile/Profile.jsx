import css from './Profile.module.css';
import PropTypes from 'prop-types';

export const Profile = ({ avatar, username, tag, stats, location }) => {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={avatar} alt={username + ' avatar'} className={css.avatar} />
        <p className={css.name}>{username}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul className={css.stats}>
        <li>
          <span className={css.label}>Followers</span>
          <span className={css.quantity}>{stats.followers}</span>
        </li>
        <li>
          <span className={css.label}>Views</span>
          <span className={css.quantity}>{stats.views}</span>
        </li>
        <li>
          <span className={css.label}>Likes</span>
          <span className={css.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number.isRequired).isRequired,
};
