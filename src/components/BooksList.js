import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import CategoryFilter from './CategoryFilter';

const BooksList = () => {
  const books = useSelector(state => state.books);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const handleRemoveBook = book => {
    dispatch({
      type: 'REMOVE_BOOK',
      book,
    });
  };

  const handleFilterChange = e => {
    const { value: filter } = e.target;
    dispatch({
      type: 'CHANGE_FILTER',
      filter,
    });
  };

  const filterBooks = () => books.filter(x => {
    if (filter === 'All') return true;
    return x.category === filter;
  });

  return (
    <div>
      <CategoryFilter handleFilterChange={handleFilterChange} />
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
          {filterBooks()?.map(book => (
            <Book
              key={book?.bookId}
              book={book}
              handleRemoveBook={handleRemoveBook}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BooksList;
