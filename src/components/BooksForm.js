import { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class BooksForm extends Component {
  constructor() {
    super();
    this.state = {
      category: 'Action',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getCategories = () => ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  handleChange(e) {
    const { id, value } = e.target;
    this.setState({
      [id]: value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { dispatch } = this.props;
    const { title, category } = this.state;
    dispatch({
      type: 'CREATE_BOOK',
      book: {
        bookId: Math.random(),
        title,
        category,
      },
    });
  }

  render() {
    const { title, category } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          value={title}
          id="title"
          placeholder="Title"
          type="text"
          onChange={this.handleChange}
        />
        <select value={category} id="category" onChange={this.handleChange}>
          {this.getCategories()?.map(category => (
            <option
              key={category}
              value={category}
            >
              {category}
            </option>
          ))}
        </select>
        <button type="submit">Add book</button>
      </form>
    );
  }
}

BooksForm.propTypes = {
  dispatch: PropTypes.func,
};

BooksForm.defaultProps = {
  dispatch: () => { },
};

export default connect()(BooksForm);
