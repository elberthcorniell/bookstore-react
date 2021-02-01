import PropTypes from 'prop-types';

const Book = ({ book: { bookId, title, category }, key, handleRemoveBook }) => (
  <div key={key} className="book-card">
    <div>
      <strong>{category}</strong>
      <h2>{title}</h2>
      <p className="author">Author</p>
      <br />
      <div className="book-options">
        <button type="button">
          Comments
        </button>
        <button
          onClick={() => handleRemoveBook({ bookId, title, category })}
          type="button"
        >
          Remove
        </button>
        <button type="button">
          Edit
        </button>
      </div>
    </div>
    <div style={{
      display: 'flex',
      height: 'fit-content',
      alignSelf: 'center',
      alignItems: 'center',
    }}
    >
      <svg
        className="progress-ring"
        height="80"
        width="80"
      >
        <circle
          className="progress-ring__circle"
          strokeWidth="4"
          stroke="#0290ff"
          fill="transparent"
          r="38"
          cx="40"
          cy="40"
        />
      </svg>
      <div style={{ marginLeft: 20 }}>
        <strong className="percent">100%</strong>
        <p style={{ opacity: 0.5 }}>Completed</p>
      </div>
    </div>
    <div>
      <p>CURRENT CHAPTER</p>
      <p>Chapter 17</p>
      <button className="btn-blue" type="button">
        UPDATE PROGRESS
      </button>
    </div>
  </div>
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
  handleRemoveBook: () => { },
};

export default Book;
