import { Input } from 'antd';
import styles from './SearchInput.module.scss';

const SearchInput = ({ ...props }) => {
  const { Search } = Input;


  return (
    <Search className={styles.searchInput}
      placeholder='Что хотите посмотреть?'
      enterButton='Найти'
      size='large'
      {...props}
    />
  );
};

export default SearchInput;
