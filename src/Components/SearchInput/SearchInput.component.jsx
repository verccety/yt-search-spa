import { StyledSearch } from './SearchInput.styles';

const SearchInput = ({ ...props }) => {
  return (
    <StyledSearch
      placeholder='Что хотите посмотреть?'
      enterButton='Найти'
      size='large'
      {...props}
    />
  );
};

export default SearchInput;
