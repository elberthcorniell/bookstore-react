export const createBook = (book, state) => [
  ...state,
  book,
];

export const removeBook = (book, state) => {
  const newState = [];
  state.forEach(({ bookId }) => {
    if (bookId !== book.bookId) { newState.push(book); }
  });
  return newState;
};
