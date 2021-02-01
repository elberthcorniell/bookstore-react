export const createBook = (book, state) => [
  ...state,
  book,
];

export const removeBook = (book, state) => state.filter(({ bookId }) => bookId !== book.bookId);

export const changeFilter = filter => filter;
