import { Component } from 'react';

class BooksForm extends Component {
  constructor() {
    super();
    this.state = {};
  }

    getCaregories = () => ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

    render() {
      const { bookId, title, category } = this.state;
      return (
        <form>
          <input
            value={bookId}
            id="bookId"
            placeholder="Book ID"
            type="text"
            onChange={this.handleChange}
          />
          <input
            value={title}
            id="title"
            placeholder="Title"
            type="text"
            onChange={this.handleChange}
          />
          <select value={category} id="category" onChange={this.handleChange}>
            {this.getCaregories()?.map(category => (
              <option
                key={category}
                value={category}
              >
                {category}
              </option>
            ))}
          </select>
        </form>
      );
    }
}

export default BooksForm;
