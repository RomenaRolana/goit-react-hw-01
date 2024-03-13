import PropTypes from 'prop-types';
import TableHeadName from './TableHeadName/TableHeadName';
import Payroll from './Payroll/Payroll';
import css from './transactionHistory.module.css';

const TransactionHistory = ({ data }) => {
  return (
    <table className={css.table}>
      <thead className={css.head}>
        <TableHeadName type="Type" amount="Amount" currency="Currency" />
      </thead>

      <tbody className={css.body}>
        <Payroll data={data} />
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};

export default TransactionHistory;
