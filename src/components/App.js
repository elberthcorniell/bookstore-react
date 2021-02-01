import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';

const App = () => (
  <>
    <nav>
      <div>
        <h1>Bookstore CMS</h1>
        <ul>
          <li className="active">Books</li>
          <li>categories</li>
        </ul>
      </div>
      <span className="profile">
        <i className="fas fa-user" />
      </span>
    </nav>
    <div>
      <BooksList />
      <hr />
      <BooksForm />
    </div>
  </>
);

export default App;
