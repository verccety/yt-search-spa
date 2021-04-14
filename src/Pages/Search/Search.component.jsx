import SearchInput from 'components/SearchInput/SearchInput.component';
import VideosOverview from 'components/VideosOverview/VideosOverview.component';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectSearchQuery } from 'redux/search/searchSlice';
import { Container, SearchContainer, Title } from './Search.styles';
import MenuLayout from 'components/MenuLayout/MenuLayout.component';

const SearchPage = () => {
  const searchQuery = useSelector(selectSearchQuery);

  return searchQuery ? (
    <MenuLayout>
      <VideosOverview />
    </MenuLayout>
  ) : (
    <MenuLayout>
      <Container>
        <SearchContainer>
          <Title>Поиск видео</Title>
          <SearchInput />
        </SearchContainer>
      </Container>
    </MenuLayout>
  );
};

export default SearchPage;
