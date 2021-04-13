import { Col, Row, Typography } from 'antd';
import SearchInput from 'components/SearchInput/SearchInput.component';
import VideoItem from 'components/VideoItem/VideoItem.component';
import React, { useEffect, useState } from 'react';
import { fetchData } from 'utils/fetchData';
import {
  Container,
  FavoriteIcon,
  GridIcon,
  InputContainer,
  VerticalIcon,
  ViewMode,
} from './VideosOverview.styles';

const VideosOverview = () => {
  const { Text } = Typography;

  const [fetchedVideos, setFetchedVideos] = useState(null);
  // possible values: 'vertical | grid'
  const [viewMode, setViewMode] = useState('vertical');

  useEffect(() => {
    fetchData().then((res) => setFetchedVideos(res));
    // ? изменить потом dependency array
    return () => {
      console.log('******************* UNMOUNTED');
    };
  }, []);
  return (
    <Row>
      <Container>
        <Row>
          <Col span={24}>
            <h1>Поиск видео</h1>
          </Col>
        </Row>
        <InputContainer>
          <SearchInput suffix={<FavoriteIcon />} />
        </InputContainer>

        <Row style={{ marginBottom: '2rem' }}>
          <Col span={12}>
            <Text>
              Видео по запросу <Text strong>TEST STRING!!!</Text> |{' '}
              <Text type='secondary'>{fetchedVideos?.pageInfo?.totalResults ?? ''}</Text>
            </Text>
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
    </Row>
  );
};

export default VideosOverview;
