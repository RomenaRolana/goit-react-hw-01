import PropTypes from 'prop-types';
import css from './Payroll.module.css';

const Payroll = ({ data }) => {
  return data.map(({ id, type, currency, amount }) => {
    const firstCapitalLetter = type.charAt(0).toUpperCase() + type.slice(1);
    return (
      <tr key={id}>
        <td className={css.td}>{firstCapitalLetter}</td>
        <td className={css.td}>{amount}</td>
        <td className={css.td}>{currency}</td>
      </tr>
    );
  });
};

Payroll.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};

export default Payroll;
