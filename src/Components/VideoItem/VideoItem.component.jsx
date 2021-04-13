import { Row, Typography } from 'antd';
import { DescriptionContainer, ImgContainer, StyledTitle, VideoCell } from './VideoItem.styles';
import formatViewCount from 'utils/formatViewCount';

const VideoItem = ({ channelName, videoName, videoCount, videoThumbnail, viewMode }) => {
  const { Text } = Typography;

  return (
    <VideoCell justify={viewMode === 'grid' ? 'center' : 'start'} $viewMode={viewMode}>
      <ImgContainer src={videoThumbnail} alt='Превью' />
      <DescriptionContainer>
        <Row>
          <StyledTitle> {videoName}</StyledTitle>
        </Row>
        <Text type='secondary'>{channelName}</Text>
        <Text type='secondary'>{formatViewCount(videoCount)}</Text>
      </DescriptionContainer>
    </VideoCell>
  );
};

export default VideoItem;
