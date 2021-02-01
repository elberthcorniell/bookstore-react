import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';

const BooksList = () => {
  const books = useSelector(state => state.books);
  const dispatch = useDispatch();

  const handleRemoveBook = book => {
    console.log(book);
    dispatch({
      type: 'REMOVE_BOOK',
      book,
    });
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Book ID</th>
          <th>Title</th>
          <th>Category</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {books?.map(book => (
          <Book
            key={book?.bookId}
            book={book}
            handleRemoveBook={handleRemoveBook}
          />
        ))}
      </tbody>
    </table>
  );
};

export default BooksList;
