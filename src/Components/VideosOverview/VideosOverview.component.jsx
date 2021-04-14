import { Col, Row, Typography } from 'antd';
import FavoritesModal from 'components/FavoritesModal/FavoritesModal.component';
import SearchInput from 'components/SearchInput/SearchInput.component';
import VideoItem from 'components/VideoItem/VideoItem.component';
import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setInitialValues } from 'redux/form/formSlice';
import { setIsModalVisible } from 'redux/modal/modalSlice';
import {
  selectQueryName,
  selectSearchQuery,
  selectVideoList,
  setVideoList,
} from 'redux/search/searchSlice';
import { selectCurrentFavorites } from 'redux/user/userSlice';
import { fetchData } from 'utils/fetchData';
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
  const searchQuery = useSelector(selectSearchQuery);
  const queryName = useSelector(selectQueryName);
  const videoList = useSelector(selectVideoList);

  const numFavorites = useRef(userFavorites.length);
  const [isPopoverVisible, setIsPopoverVisible] = useState(false);
  const [fetchedVideos, setFetchedVideos] = useState(null);
  // possible values: 'vertical | grid'
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
    fetchData().then((res) => {
      dispatch(setVideoList(res));
    });
  }, [searchQuery, queryName, videoList, dispatch]);

  useEffect(() => {
    if (userFavorites.length <= numFavorites.current) return;

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
            <h1>Поиск видео</h1>
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
              <Text type='secondary'>{fetchedVideos?.pageInfo?.totalResults ?? ''}</Text>
            </TextVideoOnRequest>
          </Col>

          <ViewMode span={12}>
            <VerticalIcon onClick={() => setViewMode('vertical')} $viewMode={viewMode} />
            <GridIcon onClick={() => setViewMode('grid')} $viewMode={viewMode} />
          </ViewMode>
        </Row>

        <Row gutter={[24, 16]}>
          {fetchedVideos?.items &&
            fetchedVideos.items.map((v) => (
              <Col span={viewMode === 'grid' ? 6 : 24} key={v.id.videoId}>
                <VideoItem
                  videoThumbnail={v.snippet.thumbnails.medium.url}
                  videoName={v.snippet.title}
                  channelName={v.snippet.channelTitle}
                  videoCount={v.statistics.viewCount}
                  viewMode={viewMode}
                />
              </Col>
            ))}
        </Row>
      </Container>
      <FavoritesModal />
    </Row>
  );
};

export default VideosOverview;
