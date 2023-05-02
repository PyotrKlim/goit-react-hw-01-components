import css from './TransactionHistory.module.css';
import PropTypes from 'prop-types';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr>
          <th scope="col">Type</th>
          <th scope="col">Amount</th>
          <th scope="col">Currency</th>
        </tr>
      </thead>
      {items.map(event => (
        <tbody key={event.id}>
          <tr>
            <td>{event.type}</td>
            <td>{event.amount}</td>
            <td>{event.currency}</td>
          </tr>
        </tbody>
      ))}
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string.isRequired))
    .isRequired,
};
