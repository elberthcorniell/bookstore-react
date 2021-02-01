import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const CategoryFilter = ({ handleFilterChange }) => {
  const categories = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  const category = useSelector(state => state.filter);
  return (
    <select
      className="filter"
      value={category}
      id="category"
      onChange={handleFilterChange}
    >
      {categories?.map(category => (
        <option
          key={category}
          value={category}
        >
          {category}
        </option>
      ))}
    </select>
  );
};

CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.func,
};

CategoryFilter.defaultProps = {
  handleFilterChange: () => { },
};

export default CategoryFilter;
