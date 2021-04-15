import { Row, Typography } from 'antd';
import formatViewCount from 'utils/formatViewCount';
import { truncate } from 'utils/truncateStr';
import {
  DescriptionContainer,
  ImgContainer,
  StyledTitle,
  VideoCell,
  StatsContainer,
} from './VideoItem.styles';

const VideoItem = ({ channelName, videoName, videoCount, videoThumbnail, viewMode }) => {
  const { Text } = Typography;
  const charLimit = viewMode === 'grid' ? 55 : 200;

  return (
    <VideoCell justify={viewMode === 'grid' ? 'center' : 'start'} $viewMode={viewMode}>
      <ImgContainer src={videoThumbnail} alt='Превью' />
      <DescriptionContainer $viewMode={viewMode}>
        <Row>
          <StyledTitle
            dangerouslySetInnerHTML={{ __html: truncate(videoName, charLimit) }}
            $viewMode={viewMode}
          />
        </Row>
        <StatsContainer>
          <Text type='secondary'>{channelName}</Text>
          <Text type='secondary'>{formatViewCount(videoCount)}</Text>
        </StatsContainer>
      </DescriptionContainer>
    </VideoCell>
  );
};

export default VideoItem;
