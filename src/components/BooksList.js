import { useStore } from 'react-redux';
import Book from './Book';

const BooksList = () => {
  const store = useStore();
  const { books = [] } = store.getState();
  return (
    <table>
      <thead>
        <tr>
          <th>Book ID</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {books?.map(book => <Book key={book?.bookId} book={book} />)}
      </tbody>
    </table>
  );
};

export default BooksList;
