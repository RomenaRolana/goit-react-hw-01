import PropTypes from 'prop-types';
import css from './TableHeadName.module.css';

const TableHeadName = ({ type, amount, currency }) => {
  return (
    <tr>
      <th className={css.th}>{type}</th>
      <th className={css.th}>{amount}</th>
      <th className={css.th}>{currency}</th>
    </tr>
  );
};

TableHeadName.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default TableHeadName;
