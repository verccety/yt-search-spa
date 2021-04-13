import { Row } from 'antd';
import SearchInput from 'components/SearchInput/SearchInput.component';
import React from 'react';
import styles from './Search.module.scss';

const SearchPage = () => {
  const searchQuery = null;

  return searchQuery ? (
    <div />
  ) : (
    <Row className={styles.container}>
      <Row justify='center' className={styles.searchContainer}>
        <h1>Поиск видео</h1>
        <SearchInput />
      </Row>
    </Row>
  );
};

export default SearchPage;
