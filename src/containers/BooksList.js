import { useSelector, useDispatch } from 'react-redux';
import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';

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
    <>
      <CategoryFilter handleFilterChange={handleFilterChange} />
      {filterBooks()?.map(book => (
        <Book
          key={book?.bookId}
          book={book}
          handleRemoveBook={handleRemoveBook}
        />
      ))}
    </>
  );
};

export default BooksList;
