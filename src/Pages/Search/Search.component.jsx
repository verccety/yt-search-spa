import MenuLayout from 'components/MenuLayout/MenuLayout.component';
import SearchInput from 'components/SearchInput/SearchInput.component';
import React from 'react';
import { Container, SearchContainer, Title } from './Search.styles';

const SearchPage = () => {
  const searchQuery = null;

  return searchQuery ? (
    <div />
  ) : (
    <MenuLayout>
      <Container>
        <SearchContainer justify='center'>
          <Title>Поиск видео</Title>
          <SearchInput />
        </SearchContainer>
      </Container>
    </MenuLayout>
  );
};

export default SearchPage;
