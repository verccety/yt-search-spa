import SearchInput from 'components/SearchInput/SearchInput.component';
import VideosOverview from 'components/VideosOverview/VideosOverview.component';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectSearchQuery } from 'redux/search/searchSlice';
import { Container, SearchContainer, Title } from './Search.styles';

const SearchPage = () => {
  const searchQuery = useSelector(selectSearchQuery);

  return searchQuery ? (
    <VideosOverview />
  ) : (
    <Container>
      <SearchContainer justify='center'>
        <Title>Поиск видео</Title>
        <SearchInput />
      </SearchContainer>
    </Container>
  );
};

export default SearchPage;
