import { removeBook, createBook } from '../actions';

const defaultBooks = [
    { bookId: Math.random(), title: 'Don quijote', category: 'History' },
    { bookId: Math.random(), title: '100 years of lonely', category: 'History' },
];

const booksReducer = (state = defaultBooks, action) => {
    const { book } = action;
    switch (action.type) {
        case 'CREATE_BOOK':
            return createBook(book, state);
        case 'REMOVE_BOOK':
            return removeBook(book, state);
        default:
            return state;
    }
};

export default booksReducer;
