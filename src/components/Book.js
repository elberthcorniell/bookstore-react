import PropTypes from 'prop-types';

const Book = ({ book: { bookId, title, category }, key, handleRemoveBook }) => (
  <tr key={key}>
    <td>{bookId}</td>
    <td>{title}</td>
    <td>{category}</td>
    <td>
      <button
        onClick={() => handleRemoveBook({ bookId, title, category })}
        type="button"
      >
        Remove Book
      </button>
    </td>
  </tr>
);

Book.propTypes = {
  book: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ])),
  key: PropTypes.string,
  handleRemoveBook: PropTypes.func,
};

Book.defaultProps = {
  book: {},
  key: '',
  handleRemoveBook: () => {},
};

export default Book;
