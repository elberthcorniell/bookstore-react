import PropTypes from 'prop-types';

const Book = ({ book: { bookId, title, category }, key }) => (
  <tr key={key}>
    <td>{bookId}</td>
    <td>{title}</td>
    <td>{category}</td>
  </tr>
);

Book.propTypes = {
  book: PropTypes.objectOf(PropTypes.string),
  key: PropTypes.string,
};

Book.defaultProps = {
  book: {},
  key: '',
};

export default Book;
