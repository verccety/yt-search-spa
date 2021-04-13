import { StyledSearch } from './SearchInput.styles';
import { setSearchQuery } from 'redux/search/searchSlice';
import { useDispatch } from 'react-redux';

const SearchInput = ({ ...props }) => {
  const dispatch = useDispatch();
  const onSearch = (value) => dispatch(setSearchQuery(value));

  return (
    <StyledSearch
      placeholder='Что хотите посмотреть?'
      enterButton='Найти'
      size='large'
      onSearch={onSearch}
      {...props}
    />
  );
};

export default SearchInput;
