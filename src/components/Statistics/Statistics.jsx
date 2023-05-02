import css from './Statistics.module.css';
import PropTypes from 'prop-types';

export const Statistics = ({ stats, title }) => {
  return (
    <section className={css.statistics}>
      {title !== undefined && <h2 className={css.title}>{title}</h2>}

      <ul className={css.statList}>
        {stats.map(event => (
          <li key={event.id}>
            <span className={css.label}>{event.label}</span>
            <span className={css.percentage}>{event.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
