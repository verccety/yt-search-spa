import { useDispatch, useSelector } from 'react-redux';
import { selectSearchQuery, setSearchQuery } from 'redux/search/searchSlice';
import { StyledSearch } from './SearchInput.styles';

const SearchInput = ({ ...props }) => {
  const dispatch = useDispatch();
  const onSearch = (value) => dispatch(setSearchQuery(value));
  const isLoading = useSelector((state) => state.search.status);
  const searchQuery = useSelector(selectSearchQuery);
  console.log('isloading: ', isLoading);

  return (
    <StyledSearch
      placeholder='Что хотите посмотреть?'
      enterButton='Найти'
      size='large'
      onSearch={onSearch}
      defaultValue={searchQuery}
      loading={isLoading === 'loading'}
      {...props}
    />
  );
};

export default SearchInput;
