import { Row, Typography } from 'antd';
import { DescriptionContainer, ImgContainer, StyledTitle, VideoCell } from './VideoItem.styles';
import formatViewCount from 'utils/formatViewCount';
import { truncate } from 'utils/truncateStr';

const VideoItem = ({ channelName, videoName, videoCount, videoThumbnail, viewMode }) => {
  const { Text } = Typography;
  const charLimit = viewMode === 'grid' ? 55 : 200;

  return (
    <VideoCell justify={viewMode === 'grid' ? 'center' : 'start'} $viewMode={viewMode}>
      <ImgContainer src={videoThumbnail} alt='Превью' />
      <DescriptionContainer>
        <Row>
          <StyledTitle dangerouslySetInnerHTML={{ __html: truncate(videoName, charLimit) }} />
        </Row>
        <Text type='secondary'>{channelName}</Text>
        <Text type='secondary'>{formatViewCount(videoCount)}</Text>
      </DescriptionContainer>
    </VideoCell>
  );
};

export default VideoItem;
