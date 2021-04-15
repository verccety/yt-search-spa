import { Col, Row, Typography, Skeleton } from 'antd';
import SearchInput from 'components/SearchInput/SearchInput.component';
import VideoItem from 'components/VideoItem/VideoItem.component';
import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setInitialValues } from 'redux/form/formSlice';
import { setIsModalVisible } from 'redux/modal/modalSlice';
import { selectQueryName, selectVideoList, fetchVideosByQuery } from 'redux/search/searchSlice';
import { selectCurrentFavorites } from 'redux/user/userSlice';
import {
  Container,
  FavoriteIcon,
  GridIcon,
  InputContainer,
  PopoverStyled,
  StyledPopoverContent,
  TextVideoOnRequest,
  VerticalIcon,
  ViewMode,
  StyledTitle,
} from './VideosOverview.styles';

const { Text } = Typography;
const content = (
  <StyledPopoverContent>
    <span>Поиск сохранён в разделе «Избранное»</span>
    <Link to='/favorites'>Перейти в избранное</Link>
  </StyledPopoverContent>
);

const VideosOverview = () => {
  const dispatch = useDispatch();
  const userFavorites = useSelector(selectCurrentFavorites);
  const queryName = useSelector(selectQueryName);
  const videoList = useSelector(selectVideoList);
  const isLoading = useSelector((state) => state.search.status);
  const { searchQuery, order, maxResults } = useSelector((state) => state.search);

  // кол-во сохр. записей на начало => для своевременного показа popover
  const numFavorites = useRef(userFavorites?.length || 0);
  const [isPopoverVisible, setIsPopoverVisible] = useState(false);
  const [fetchedVideos, setFetchedVideos] = useState(null);
  // значения: 'vertical | grid'
  const [viewMode, setViewMode] = useState('vertical');

  const handleSaveFavorite = () => {
    dispatch(
      setInitialValues({
        ['request']: searchQuery,
        ['favoriteName']: '',
        ['maxItems']: 12,
        ['sortBy']: '',
      })
    );
    dispatch(setIsModalVisible());
  };

  useEffect(() => {
    if (queryName === searchQuery) {
      setFetchedVideos(videoList);
      return;
    }

    dispatch(fetchVideosByQuery({ searchQuery, sortBy: order, maxResults }));

    // eslint-disable-next-line
  }, [searchQuery, queryName, videoList, order, maxResults]);

  useEffect(() => {
    if (userFavorites?.length === undefined) return;
    if (userFavorites?.length <= numFavorites.current) return;

    setIsPopoverVisible(true);
    setTimeout(() => {
      setIsPopoverVisible(false);
    }, 10000);
  }, [userFavorites, numFavorites]);

  return (
    <Row>
      <Container>
        <Row>
          <Col span={24}>
            <StyledTitle>Поиск видео</StyledTitle>
          </Col>
        </Row>
        <InputContainer>
          <SearchInput
            suffix={
              <PopoverStyled
                content={content}
                trigger='click'
                visible={isPopoverVisible}
                placement='bottom'
              >
                <FavoriteIcon onClick={handleSaveFavorite} />
              </PopoverStyled>
            }
          />
        </InputContainer>

        <Row style={{ marginBottom: '2rem' }}>
          <Col span={12}>
            <TextVideoOnRequest>
              Видео по запросу <Text strong>«{searchQuery}»</Text> |{' '}
              {isLoading === 'loading' ? (
                <Skeleton.Button size={'small'} active />
              ) : (
                <Text type='secondary'>{fetchedVideos?.pageInfo?.totalResults ?? ''}</Text>
              )}
            </TextVideoOnRequest>
          </Col>

          <ViewMode span={12}>
            <VerticalIcon onClick={() => setViewMode('vertical')} $viewMode={viewMode} />
            <GridIcon onClick={() => setViewMode('grid')} $viewMode={viewMode} />
          </ViewMode>
        </Row>
        {isLoading === 'loading' ? (
          <Skeleton active />
        ) : (
          <Row gutter={[24, 16]}>
            {fetchedVideos?.items &&
              fetchedVideos.items.map((v) => (
                <Col span={viewMode === 'grid' ? 6 : 24} key={v.id.videoId}>
                  <VideoItem
                    videoThumbnail={v.snippet.thumbnails.medium.url}
                    videoName={v.snippet.title}
                    channelName={v.snippet.channelTitle}
                    videoCount={v.statistics?.viewCount}
                    viewMode={viewMode}
                  />
                </Col>
              ))}
          </Row>
        )}
      </Container>
    </Row>
  );
};

export default VideosOverview;
